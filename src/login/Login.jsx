import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {/* 📱 Телефон: col-12, 📟 Планшет: col-md-8, 💻 Ноут: col-lg-6, 🖥 Комп: col-xl-4 */}
        <div className="col-12 col-md-8 col-lg-6 col-xl-4">
          <div className="card shadow p-4 mt-5">
            <h3 className="mb-4 text-center">Sign In</h3>
            <form className="addUserForm">
              <div className="inputGroup d-flex flex-column gap-3">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Enter your email"
                  className="form-control"
                />

                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  autoComplete="off"
                  placeholder="Enter your password"
                  className="form-control"
                />

                <button type="submit" className="btn btn-primary w-100 mt-3">
                  Login
                </button>
              </div>
            </form>

            <div className="login mt-4 text-center">
              <p>Don't have an account?</p>
              <Link to="/signup" className="btn btn-success w-100">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
