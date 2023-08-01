import React, { useState, useEffect } from 'react';

const EmailOTPVerification = () => {
  const [otpData, setOTPData] = useState({});
  const [otpValue, setOTPValue] = useState('');

  useEffect(() => {
    // Fetch the JSON data from the backend API
        fetch('http://localhost:8080/getOTP/{otp}')
        .then((response) => response.json())
        .then((data) => {
            setOTPData(data); // Save the entire JSON data in the state
            setOTPValue(data.OTP); // Extract and save the OTP value in the state
        })
        .catch((error) => {
            console.error('Error fetching OTP data:', error);
            // Handle error, e.g., show an error message to the user
        });
  }, []);

  const handleVerifyOTP = (event) => {
    event.preventDefault();
  
  };

  return (
    <div className="container">
      <h2>Email OTP Verification</h2>
      <form onSubmit={handleVerifyOTP}>
        <label htmlFor="otp">Enter OTP</label>
        <input
          type="text"
          id="otp"
          placeholder="Enter OTP received in email"
          value={otpValue}
          onChange={(e) => setOTPValue(e.target.value)}
          required
        />

        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
};

export default EmailOTPVerification;
