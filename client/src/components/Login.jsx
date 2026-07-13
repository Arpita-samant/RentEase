import React, { useState } from "react";

const Login = ({ setShowLogin }) => {
  const [isLogin, setIsLogin] = useState(true);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (isLogin) {
      console.log("Login Form Submitted");
    } else {
      console.log("Signup Form Submitted");
    }
  };

  return (
    <div
      onClick={() => setShowLogin(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      <form
        onSubmit={onSubmitHandler}
        onClick={(e) => e.stopPropagation()}
        className="relative w-80 sm:w-[380px] rounded-lg bg-white p-8 shadow-xl"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setShowLogin(false)}
          className="absolute right-4 top-3 text-xl font-bold text-gray-500 hover:text-black"
        >
          ×
        </button>

        <h2 className="text-center text-2xl font-semibold">
          <span className="text-primary">User</span>{" "}
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        {!isLogin && (
          <div className="mt-4">
            <label className="block mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="w-full rounded border border-gray-300 p-2 outline-primary"
            />
          </div>
        )}

        <div className="mt-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full rounded border border-gray-300 p-2 outline-primary"
          />
        </div>

        <div className="mt-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
            className="w-full rounded border border-gray-300 p-2 outline-primary"
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded bg-primary py-2 text-white transition hover:bg-indigo-600"
        >
          {isLogin ? "Login" : "Create Account"}
        </button>

        {isLogin ? (
          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className="font-medium text-primary"
            >
              Click here
            </button>
          </p>
        ) : (
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className="font-medium text-primary"
            >
              Login
            </button>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
