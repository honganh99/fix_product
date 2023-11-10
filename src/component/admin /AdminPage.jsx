import React from "react";
import "./admin.css";
import AdminProduct from "./AdminProduct";
import AdminManagePro from "./AdminManagePro";
import { NavLink, Outlet } from "react-router-dom";

function AdminPage() {
  return (
    <div className="myAccount">
      <div className="page-title">
        <h1>My Account</h1>
      </div>

      <div className="main-myAccount">
        <div className="row">
          <div className="col-3 ">
            <div class="list-group list-menu">
              <NavLink to="admin-product">
                <i className="bi bi-grid" />
                Sản Phẩm
              </NavLink>
              <NavLink to="admin-manage-pro">
                <i className="bi bi-folder2" />
                Quản Lý Người Dùng
              </NavLink>
              <NavLink to="admin-account-detail">
                <i className="bi bi-person-vcard" />
                Chi Tiết Tài Khoản
              </NavLink>
              <NavLink to="/">
                <i className="bi bi-lock" />
                Đăng Xuất
              </NavLink>
            </div>
          </div>

          <div className="col-9">
            <Outlet />

            {/* Phan quan ly san pham  */}
            {/* end - Phan quan ly san pham */}

            {/* quản lí danh mục sản phẩm */}
            {/* end - quản lí danh mục sản phẩm */}

            {/* Chi tiết tài khoản */}
            {/* End - Chi tiết tài khoản */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
