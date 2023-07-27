import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// import "./AddressFillForm.css";





const AddressFillForm = () => {
  const [file, setFile] = useState(null);
  const [address, setAddress] = useState({
    street: "",
    suburb: "",
    state: "",
    postcode: ""
  });

  // Step 1: Add state to manage OTP information
  const [otp, setOTP] = useState("");
  const [isOTPGenerated, setIsOTPGenerated] = useState(false);
  const [isOTPVerified, setIsOTPVerified] = useState(false);

  // Function to handle file upload
  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  // Step 2: Function to generate and send OTP
  const generateAndSendOTP = () => {
    // Replace this fictional method with actual implementation for sending OTP
    axios
      .post("https://api.example.com/send-otp", { phone: "USER_PHONE_NUMBER" })
      .then(() => {
        setIsOTPGenerated(true);
        toast.success("OTP sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending OTP:", error);
        toast.error("Error sending OTP. Please try again.");
      });
  };

  // Step 3: Function to verify OTP
  const verifyOTP = () => {
    // Replace this fictional method with actual implementation for verifying OTP
    axios
      .post("https://api.example.com/verify-otp", { otp })
      .then(() => {
        setIsOTPVerified(true);
        toast.success("OTP verified successfully!");
      })
      .catch((error) => {
        console.error("Error verifying OTP:", error);
        toast.error("Invalid OTP. Please try again.");
      });
  };

  // Step 4: Function to navigate to the address page after successful verification
  const navigateToAddressPage = () => {
    // Replace this with your navigation code to the address page
    // For example, you can use React Router to achieve navigation
    // Here, we are just displaying an alert as a placeholder.
    alert("Address page navigation placeholder");
  };

  // Function to automatically fill address after file upload
  const autoFillAddress = () => {
    if (!file) {
      toast.error("Please upload a file first.");
      return;
    }

    if (!isOTPGenerated) {
      generateAndSendOTP();
      return;
    }

    if (!isOTPVerified) {
      toast.error("Please verify OTP before filling the address.");
      return;
    }

    // Replace this fictional method with actual implementation using external services
    axios
      .get("https://api.example.com/fill-address", { params: { file: file } })
      .then((response) => {
        const { street, suburb, state, postcode } = response.data;
        setAddress({ street, suburb, state, postcode });
        toast.success("Address filled successfully!");
        navigateToAddressPage(); // Step 4: Navigate to the address page after successful address fill
      })
      .catch((error) => {
        console.error("Error filling address:", error);
        toast.error("Error filling address. Please try again.");
      });
  };

  return (
    <div>
      <h2>Address Fill Form</h2>
      <form>
        <div className="form-group">
          <label htmlFor="fileUpload">Upload Document:</label>
          <input
            type="file"
            id="fileUpload"
            onChange={handleFileUpload}
            accept=".pdf,.doc,.docx"
          />
        </div>

        <div className="form-group">
          <label htmlFor="street">Street:</label>
          <input
            type="text"
            id="street"
            value={address.street}
            onChange={(e) => setAddress({ ...address, street: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="suburb">Suburb:</label>
          <input
            type="text"
            id="suburb"
            value={address.suburb}
            onChange={(e) => setAddress({ ...address, suburb: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            value={address.state}
            onChange={(e) => setAddress({ ...address, state: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="postcode">Postcode:</label>
          <input
            type="text"
            id="postcode"
            value={address.postcode}
            onChange={(e) => setAddress({ ...address, postcode: e.target.value })}
          />
        </div>

        {isOTPGenerated && !isOTPVerified && (
          <div className="form-group">
            <label htmlFor="otp">Enter OTP:</label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
            />
            <button type="button" onClick={verifyOTP}>
              Verify OTP
            </button>
          </div>
        )}

        <button type="button" onClick={autoFillAddress}>
          Auto Fill Address
        </button>
      </form>
    </div>
  );
};

export default AddressFillForm;
