import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          firstName,
          lastName,
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );

      dispatch(addUser(res.data.data));
      navigate("/profile");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-200 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">
            {isLoginForm ? "Login" : "SignUp"}
          </h2>
          <div className="m-2">
            {!isLoginForm && (
              <>
                <fieldset className="fieldset ">
                  <legend className="fieldset-legend">First Name</legend>
                  <input
                    type="text"
                    value={firstName}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </fieldset>
                <fieldset className="fieldset ">
                  <legend className="fieldset-legend">Last Name</legend>
                  <input
                    type="text"
                    value={lastName}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </fieldset>
              </>
            )}

            <fieldset className="fieldset ">
              <legend className="fieldset-legend">Email ID</legend>
              <input
                type="text"
                value={emailId}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => {
                  setEmailId(e.target.value);
                }}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                value={password}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </fieldset>
          </div>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center m-2">
            <button
              className="btn btn-primary"
              onClick={isLoginForm ? handleLogin : handleSignUp}
            >
              {isLoginForm ? "Login" : "SignUp"}
            </button>
          </div>
          <p
            className="m-auto cursor-pointer"
            onClick={() => setIsLoginForm((value) => !value)}
          >
            {isLoginForm
              ? "New here! Create new account"
              : "Already have an account? Login"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
