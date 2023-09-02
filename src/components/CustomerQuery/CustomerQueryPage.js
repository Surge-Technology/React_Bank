import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CustomerQueryPage.css";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const CustomerQueryPage = () => {
  const location = useLocation();
  const [query, setQuery] = useState("");
  const queryData = location.state ? location.state.queryData : '';

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/completeMessageEvent', 
      { query: query }, 
      { headers: { 'Content-Type': 'application/json' } }
      );
      alert("Document is submitted");
      console.log("API Response:", response);
    } catch (error) {
      console.error('Error while submitting query:', error);
    }
    alert(" Your Document is submitted")
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/getAllConsumerData');
        console.log("Fetched Data:", response.data);
      } catch (error) {
        console.error('Error while fetching data:', error);
      }
    };

    fetchData(); 
  }, []); 

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-5">
        <h1 className="mb-4">Query from RBA</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="customer-message-box">
              <p>
                Hii, This message from Reserve Bank of Australia giving a some message to you, submit the required mentioned below files.
              </p>
            </div>

            <h3 className="mb-4">Application Status :<span style={{ margin: '0 10px' }}>In Progress</span></h3>
            {/* <h4>Query :{AdminQuery}</h4> */}
          </div>
         
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="message">Comments</label>
                <textarea className="form-control fixed-textarea" id="message" rows="4" onChange={handleQueryChange}></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="document">Upload Document</label>
                <input type="file" className="form-control-file" id="document" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerQueryPage;
