import Header from "../Header/Header";

import "./Forgot.css";

const Forgot = () => {
  return (
    <>
      <Header />
      <div className="bg-container">
        <div className="verify-container">
          <form className="form-container">
            <h1 className="forgot-heading">Forgot Password</h1>
            <input className="input-field" type="text" placeholder="Email" />
            <div className="forget-container">
              <p className="sign-in">Sign In</p>
              <button className="verify-button" type="submit">
                VERIFY
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Forgot;
