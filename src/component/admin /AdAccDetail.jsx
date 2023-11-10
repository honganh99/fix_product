import React from "react";

function AdAccDetail() {
  return (
    <div className="card">
      <div className="card-header">
        <h3>Chi Tiết Tài Khoản </h3>
      </div>
      <div className="card-body">
        <p>
          Bạn đã có tài khoản? <a href="#">Hãy đăng nhập!</a>
        </p>
        <form className="form_update_acount">
          <div className="row">
            <div className="form-group col-md-12 mb-3">
              <label>
                Tên đăng nhập
                <span className="required">*</span>
              </label>
              <input className="form-control" type="text" />
              <div className="error_message" />
            </div>
            <div className="form-group col-md-12 mb-3">
              <label>
                Email
                <span className="required">*</span>
              </label>
              <input className="form-control" type="email" />
              <div className="error_message" />
            </div>
            <div className="form-group col-md-12 mb-3">
              <label>
                Password
                <span className="required">*</span>
              </label>
              <input className="form-control" type="password" />
              <div className="error_message" />
            </div>
            <div className="form-group col-md-12 mb-3">
              <label>
                Password Mới
                <span className="required">*</span>
              </label>
              <input className="form-control" type="password" />
            </div>
            <div className="form-group col-md-12 mb-3">
              <label>
                Xác nhận lại Password
                <span className="required">*</span>
              </label>
              <input className="form-control" type="password" />
              <div className="error_message" />
            </div>
            <div className="col-md-12">
              <button type="submit" className="btn_common btn_save">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdAccDetail;
