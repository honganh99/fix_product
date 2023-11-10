import React from "react";
import "./register.css";
import "../home/home.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Register() {
  // Khai báo formik:
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    // Sd Yup viet dk cho input:
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, "Cần nhiều hơn 5 ký tự")
        .max(25, "Không được nhập quá 25 ký tự")
        .required("Không được để trống"),
      email: Yup.string()
        .email("Email chưa đúng định dạng")
        .required("Không được để trống"),
      password: Yup.string()
        .min(8, "Nhập nhiều hơn 8 ký tự")
        .required("Không được để trống"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Mật khẩu không trùng khớp")
        .required("Không được để trống"),
    }),
    onSubmit: (values) => {
      console.log("asd", values);
      toast.success("Đăng ký thàng công!!!");
    },
  });

  return (
    <>
      <div className="name-brand">
        <h3>LOUIS VUITTON</h3>
        <h5>TẠO TÀI KHOẢN</h5>
      </div>
      <div className="new-account container">
        <div className="header-crete">
          <h1>TẠO TÀI KHOẢN MỚI</h1>
          <hr />
          <h3>THÔNG TIN ĐĂNG NHẬP</h3>
        </div>
      </div>
      <h1 style={{ textAlign: "center" }}>Đăng kí</h1>
      <section className="main container">
        <div className="row">
          <div className="col-3" />

          <div className="col-6">
            <form
              className="was-validated"
              onSubmit={formik.handleSubmit}
              method="post"
            >
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Tên Đăng Nhập
                </label>
                <input
                  type="text"
                  className="form-input"
                  name="name"
                  placeholder="Enter Your Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                {formik.errors.name && formik.touched.name && (
                  <p style={{ color: "red" }}>{formik.errors.name}</p>
                )}
              </div>

              <div className=" mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-input"
                  name="email"
                  placeholder="VD: abc@gmail.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.errors.email && formik.touched.email && (
                  <p style={{ color: "red" }}>{formik.errors.email}</p>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-input"
                  name="password"
                  placeholder="VD: Pass1234@"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                {formik.errors.password && formik.touched.password && (
                  <p style={{ color: "red" }}>{formik.errors.password}</p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Nhập Lại Password
                </label>
                <input
                  type="password"
                  className="form-input"
                  name="confirmPassword"
                  placeholder="VD: Pass1234@"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                />
                {formik.errors.confirmPassword &&
                  formik.touched.confirmPassword && (
                    <p style={{ color: "red" }}>
                      {formik.errors.confirmPassword}
                    </p>
                  )}
              </div>

              <div>
                Bạn đã có tài khoản? mời bạn
                <Link formik={formik} to="/login">
                  đăng nhập
                </Link>
              </div>
              <br />

              <button type="submit" className="button-submit">
                Đăng kí
              </button>
            </form>
          </div>

          <div className="col-3" />
        </div>
      </section>
      <div className="end-brand">
        <h3>LOUIS VUITTON</h3>
        <hr style={{ color: "white", margin: "0 30px" }} />
        <div className="address-brand">
          <ul>
            <li>Newsletter</li>
            <li>Contact</li>
            <li>Store</li>
            <li>Sustainability</li>
            <li>Apps</li>
            <li>Follow Us</li>
            <li>Legal - Privacy</li>
            <li>Cookies</li>
            <li>Jobs</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Register;
