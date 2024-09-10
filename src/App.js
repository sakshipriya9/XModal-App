import "./App.css";
import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen(true);
  };

  const closeHandler = (e) => {
    // Close modal when clicking outside of modal-content
    if (e.target.className.includes("modal")) {
      setIsOpen(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const username = e.target.username.value.trim();
    const email = e.target.email.value.trim();
    const phoneNo = e.target.phone.value.trim();
    const dob = e.target.dob.value;

    if (!username) {
      alert("Username is required.");
      return;
    } else if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    } else if (!/^\d{10}$/.test(phoneNo)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    } else if (new Date(dob).getTime() > Date.now()) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }

    e.target.reset();
    setIsOpen(false);
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button className="open-form-button" onClick={clickHandler}>
        Open Form
      </button>
      {isOpen && (
        <div className="modal" onClick={closeHandler}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={submitHandler}>
              <h2>Fill Details</h2>
              <div className="input-group">
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username" required />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email Address:</label>
                <input type="email" name="email" id="email" required />
              </div>
              <div className="input-group">
                <label htmlFor="phone">Phone Number:</label>
                <input type="text" name="phone" id="phone" required />
              </div>
              <div className="input-group">
                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" name="dob" id="dob" required />
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
