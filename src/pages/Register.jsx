import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div>
      <div className="flex justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className="font-semibold text-2xl text-center ">
            Register Your Account
          </h2>
          <div className="card-body">
            <fieldset className="fieldset">
                {/* Name */}
              <label className="label">Your Name</label>
              <input type="text" className="input" placeholder="Enter Your Name" />
                {/* Photo URL */}
              <label className="label">Photo URL</label>
              <input type="text" className="input" placeholder="Enter Photo URL" />
                {/* Email */}
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Your Email" />

                {/* Password */}
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Your Password" />

              
              <button className="btn btn-neutral mt-4">Register</button>
              <p className="text-center pt-5 font-semibold ">
                Already Have An Account ?{" "}
                <Link to="/auth/login" className="text-secondary">
                  Login
                </Link>
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
