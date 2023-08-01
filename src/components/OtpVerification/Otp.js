

import React, { useState, useEffect } from 'react';

import './Otp.css';

import '@fortawesome/fontawesome-free/css/all.min.css';

 

const Otp = (props) => {

  const [otpValue, setOTPValue] = useState('');

  const [isLoading, setIsLoading] = useState(true);

 

  useEffect(() => {

    // Fetch the OTP from the backend API after a delay of 5 seconds

    const timer = setTimeout(() => {

      fetchOTPFromAPI();

    }, 5000);

 

    // Cleanup function to clear the timer when the component unmounts

    return () => clearTimeout(timer);

  }, []);

 

  const fetchOTPFromAPI = () => {

    fetch('http://localhost:8080/getOTP/{otp}')

      .then((response) => {

        if (!response.ok) {

          throw new Error('Network response was not ok');

        }

        return response.json();

      })

      .then((data) => {

        setOTPValue(data.OTP); // Save the OTP value in the state

        setIsLoading(false); // Set isLoading to false once the OTP is fetched

      })

      .catch((error) => {

        console.error('Error fetching OTP data:', error);

        setIsLoading(false); // Set isLoading to false in case of an error

      });

  };

 

  const handleVerifyOTP = (event) => {

    event.preventDefault();

    // Your verification logic goes here

    console.log('Verifying OTP:', otpValue); // Example: Log the OTP value to the console

    props.history.push("AddressFillForm");

  };

 

  return (

    <div className="container p-7">

      <div className="row">

        <div className="col-md-3" />

        <div className="col-md-6 mt-3">

          <div className="bg-white p-5 rounded-3 shadow-sm border">

            <div>

              <p className="text-center text-success" style={{ fontSize: '5.5rem' }}>

                <i className="fa-solid fa-envelope-circle-check" />

              </p>

              <p className="text-center text-center h5">OTP Verification</p>

              <p className="text-muted text-center">Please check your email</p>

              <div className="row pt-4 pb-2">

                {isLoading ? (

                  <div className="col-12 text-center">

                    Loading OTP...

                  </div>

                ) : (

                  otpValue.split('').map((digit, index) => (

                    <div key={index} className="col-2">

                      <input

                        className="otp-letter-input"

                        type="text"

                        value={digit}

                        readOnly

                      />

                    </div>

                  ))

                )}

              </div>

              <p className="text-muted text-center">

                Didn't get the code? <a href="#" className="text-success">Click to resend.</a>

              </p>

              <div className="row pt-5">

                <div className="col-6">

                  <button className="btn btn-outline-secondary w-100">Cancel</button>

                </div>

                <div className="col-6">

                  <button className="btn btn-success w-100" onClick={handleVerifyOTP}> Verify</button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

 

export default Otp;

 