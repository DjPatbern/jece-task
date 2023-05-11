import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRegisterContext } from "../../ContextManager/RegisterContext";

const Address = () => {
  const { address, handleSetUser } = useRegisterContext(); //ADDRESS AND HANDLEUSER STATE IMPORTED FROM USECONTEXT STATE MANAGER
  const navigate = useNavigate();
  const handleNext = (e) => {
    e.preventDefault();
    if (address.length > 0) {
      navigate("/register/country");
    } else toast.warn("Please add address");
  }; // LOGIC TO SEND USER TO THE COUNTRY INPUT WHEN "NEXT STEP BUTTON" IS PRESSED AFTER FILLING THE ADDRESS INPUT
  return (
    <div className="inputReg-container">
      <div>
        <div className="text-session">
          <p>Step 4/5</p>
          <h2>Let's know where you live</h2>
          <span>Please fill in the details below</span>
        </div>

        <div className="input-session">
          <p>Enter your address</p>
          <input
            type="text"
            name="address"
            value={address}
            onChange={handleSetUser}
          />
          <button
            id={address.length === 0 && "disabled"}
            className="button"
            onClick={handleNext}
          >
            NEXT STEP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Address;
