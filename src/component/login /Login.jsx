import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { object } from "yup";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationMsg, setValidationMsg] = useState("");

  return (
    <div className="row in-out">
      <div className="col-4" />
      <div className="col-4 log-in-out">
        <div className="offcanvas-header in-out-head">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            THÔNG TIN ĐĂNG NHẬP CHO MYLV
          </h5>
        </div>
        <hr />
        <h3>TÔI ĐÃ CÓ TÀI KHOẢN</h3>

        <form id="main-form" className="was-validated">
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-input"
              placeholder="VD: abc@gmail.com"
              name="email"
            />
            <p>{validationMsg.email}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-input"
              placeholder="VD: Pass1234@"
              name="password"
            />
            <p>{validationMsg.password}</p>
          </div>
        </form>

        <button type="submit" className="form-control color-button">
          Đăng nhập
        </button>
        <hr />
        <div className="in-out-footer">
          <h3>TÔI CHƯA CÓ TÀI KHOẢN</h3>
          <p>
            Tận hưởng nhiều lợi ích và trải nghiệm phong phú hơn bằng cách tạo
            tài khoản cá nhân
          </p>
          <button type="submit" className="form-control color-button">
            <Link to="/register">Tạo tài khoản MyLV</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
