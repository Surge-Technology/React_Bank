import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CustomerQueryPage.css";

const CustomerQueryPage = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-5">
        <h1 className="mb-4">Admin Query</h1>
        <div className="row">
          <div className="col-md-6">
            {/* Customer Message Box */}
            <div className="customer-message-box">
              <h3> Admin </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                euismod eros at sapien volutpat luctus. Pellentesque vel nunc
                sed lacus dictum tincidunt.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            {/* Message Form */}
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Customer Query</label>
                <textarea className="form-control fixed-textarea" id="message" rows="4"></textarea>
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
