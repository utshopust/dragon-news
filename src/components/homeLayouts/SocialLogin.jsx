import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { use } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";

const SocialLogin = () => {
  const { auth } = use(AuthContext);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    console.log("google clicked");
    signInWithPopup(auth, provider)
    .then(result =>{
      console.log(result);
    }).catch(error=>{
      console.log(error);
    })
  };
  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold mb-4">Login with</h2>

      <div className="flex flex-col gap-3">
        {/* Google */}
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center gap-3 w-full border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition cursor-pointer btn"
        >
          <FcGoogle size={22} />
          <span className="font-medium">Continue with Google</span>
        </button>

        {/* GitHub */}
        {/* <button className="flex items-center justify-center gap-3 w-full bg-gray-900 text-white rounded-lg py-2 hover:bg-gray-800 transition cursor-pointer btn">
          <FaGithub size={22} />
          <span className="font-medium">Continue with GitHub</span>
        </button> */}
      </div>
    </div>
  );
};

export default SocialLogin;
