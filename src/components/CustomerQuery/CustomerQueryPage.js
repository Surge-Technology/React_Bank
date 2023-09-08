import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CustomerQueryPage.css";
import { useLocation } from 'react-router-dom';
import axios from 'axios';


const CustomerQueryPage = () => {
  const location = useLocation();
  const [query, setQuery] = useState("");
  const[comment,setComment]=useState('');
  const queryData = location.state ? location.state.queryData : '';
  const [submitted,setSubmitted]=useState(false);
  useEffect(() => {
    // Get the URL search parameters
    const searchParams = new URLSearchParams(window.location.href);
    const decodedUrl = decodeURIComponent(searchParams);
 const urlObj = new URL(decodedUrl);
 
 const pId = urlObj.searchParams.get('pId');
 alert("PID "+ pId);
  
    if (pId) {
      console.log('pId:', pId);
 
      const fetchData = async () => {
        try {
          const response = await axios.post(`http://localhost:8080/customerReply?processInstanceKey=${pId}`);
          console.log('Fetched Data:', response.data);
          console.log('Query for showing  '+response.data.query);
         sessionStorage.setItem('query', response.data.query);
         
          console.log('Customer Name:--- '+response.data.username);
          sessionStorage.setItem('customerName',response.data.username);
          
        } catch (error) {
          console.error('Error while fetching data:', error);
        }
      };
 
      fetchData();
    } else {
      // Handle the case when pId is not present in the URL
      console.log('pId not found in the URL');
    }
  }, []);
  

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };
  const postData={
    comment:comment,
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitted) {
      return; // Prevent multiple submissions
    }
    try {
      const response = await axios.post('http://localhost:8080/completeTaskWithInstanceId/{pId}', 
postData,
      { headers: { 'Content-Type': 'application/json' } }
      );
      alert("Document is submitted");
      console.log("API Response:", response);
      setSubmitted(true);
    } catch (error) {
      console.error('Error while submitting query:', error);
    }
    alert(" Your Document is submitted")
  };

  const retrievedQueryData = sessionStorage.getItem('query');
  console.log(retrievedQueryData);

  const applicantName=sessionStorage.getItem('customerName');
  console.log('applicantName',applicantName);
  console.log("postdata"+comment)

  return (
    <div className='background-image'>
         <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-5">
        <h1 className="mb-4">Query from RBA</h1>
        <div className="row">
          <div className="col-md-6">
            
            {/* <div className="customer-message-box">
              <p>
                Hii, This message from Reserve Bank of Australia giving a some message to you, submit the required mentioned below files.
              </p>
            </div> */}

             {/* <h3 className="mb-4">Application Status : Inprogress<span style={{ margin: '0 10px' }}>   
            </span>  </h3>  */}
             <p>Application Status:<span><strong> Inprogress</strong> 
            </span>
            </p> 

        <div className="form-group">
                <label htmlFor="message">Query</label>
                <div className="form-group">
                <textarea className="form-control fixed-textarea" id="message" rows="4" onChange={handleQueryChange}>
                {retrievedQueryData}

                </textarea>
              </div>
              </div>

                  
                 
            {/* <h4>Query :{AdminQuery}</h4> */}
           

          </div>
         
            <div className="col-md-6">
            <p>Customer Name :<span><strong> { applicantName} </strong>
            </span></p>
            
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
            
              <div className="form-group">
                <label htmlFor="message">Comments</label>
                <div className="form-group">

                <textarea className="form-control fixed-textarea" id="comment" rows="4" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
              </div>
              </div>
              <div className="form-group">
                <label htmlFor="document">Upload Document <span className='star'> *</span></label>
                <input type="file" className="form-control-file" id="document" required />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          {submitted && (
            <div className="col-12 text-white p-5 bg-black">
              <p className="text-center">Form has already been submitted. Thank you!</p>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CustomerQueryPage;
