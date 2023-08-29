import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CustomerQueryPage.css";
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const CustomerQueryPage = () => {
  const [customerQuery, setCustomerQuery] = useState(""); // State to store the customer query
  const location = useLocation();
  const query = location.state ? location.state.query : '';
  useEffect(() => {
    // Fetch the customer query from the API when the component mounts
    fetchCustomerQuery();
  }, []);

  const fetchCustomerQuery = async () => {
    try {
      // Fetch the customer query using a GET API
      const response = await axios.get('http://localhost:8080/getAllConsumerData');

      // Update the customer query state with the retrieved data
      setCustomerQuery(response.data.customerQuery);

    } catch (error) {
      console.error('Error while fetching customer query:', error);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let processInstanceKey=sessionStorage.getItem("key");

      console.log("dataaaa",processInstanceKey);
      // Send the customer query along with other form data to the API
      const response = await axios.post('http://localhost:8080/completeMessageEvent/', {
        customerQuery: customerQuery,
      });
      alert("Document is submitted");

      console.log("API Response:", response);

    } catch (error) {
      console.error('Error while submitting query:', error);
    }
  }

  const handleQueryChange = (event) => {
    setCustomerQuery(event.target.value); // Update the customer query state
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-5">
        <h1 className="mb-4">Query from RBA</h1>
        <div className="row">
          <div className="col-md-6">
            {/* Customer Message Box */}
            <div className="customer-message-box">
              {/* <h3> Query from RBA </h3> */}
              <p>

                Hii, This message from Reserve Bank of Australia giving a some message to you, submit the required mentioned below files.

              </p>
             
              <p>{query}</p>
              
            </div>
          </div>
          <div className="col-md-6">
            {/* Message Form */}
            <form>
              {/* <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" />
              </div> */}
              <div className="form-group">
                <label htmlFor="message">Customer Query</label>
                <textarea
                  className="form-control fixed-textarea"
                  id="message"
                  rows="4"
                  value={customerQuery}
                  onChange={handleQueryChange} // Update the query state as the user types
                />
              </div>
              <div className="form-group">
                <label htmlFor="document">Upload Document</label>
                <input type="file" className="form-control-file" id="document" />
              </div>
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerQueryPage;
