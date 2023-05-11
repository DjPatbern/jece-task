import React from "react";
import { useRegisterContext } from "../../ContextManager/RegisterContext";

const Country = () => {
  const { country, handleSetUser, handleSignup } = useRegisterContext(); //COUNTRY, HANDLESIGNUP AND HANDLEUSER STATE IMPORTED FROM USECONTEXT STATE MANAGER
  return (
    <div className="inputReg-container">
      <div>
        <div className="text-session">
          <p>Step 5/5</p>
          <h2>Let's know your nationality</h2>
          <span>Please fill in the details below</span>
        </div>

        <div className="input-session">
          <p>Enter your country</p>
          <input
            type="country"
            name="country"
            id="country"
            value={country}
            onChange={handleSetUser}
          />
          <button
            id={country.length === 0 && "disabled"}
            className="button"
            onClick={handleSignup}
          >
            FINISH
          </button>
        </div>
      </div>
    </div>
  );
};

export default Country;
