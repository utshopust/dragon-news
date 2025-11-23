import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    if (name.length < 5) {
      setNameError("Name Should Be More Then 5 Character");
      return;
    } else {
      setNameError("");
    }
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log({ name, email, password, photo });
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({...user,displayName: name, photoURL: photo});
          })
          .catch((error) => {
           console.log(error);
           setUser(user);
          });

        navigate("/");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };
  return (
    <div>
      <div className="flex justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className="font-semibold text-2xl text-center ">
            Register Your Account
          </h2>
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Your Name</label>
              <input
                type="text"
                className="input"
                name="name"
                placeholder="Enter Your Name"
                required
              />
              {nameError && <p className="text-red-500 text-xs">{nameError}</p>}
              {/* Photo URL */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                className="input"
                name="photo"
                placeholder="Enter Photo URL"
              />
              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Your Email"
                required
              />

              {/* Password */}
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                name="password"
                placeholder="Your Password"
                required
              />

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
              <p className="text-center pt-5 font-semibold ">
                Already Have An Account ?{" "}
                <Link to="/auth/login" className="text-secondary">
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
