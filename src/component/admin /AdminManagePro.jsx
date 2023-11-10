import React from "react";

function AdminManagePro() {
  return (
    <div className="card">
      <div className="card-header">
        <h3>Quản Lí Người Dùng</h3>
      </div>
      <div className="card-body">
        <div className="category_wrapper">
          <div className="title">
            <h2>Danh mục</h2>
          </div>
          <table className="styles_table">
            <thead>
              <tr>
                <td>STT</td>
                <td>Tên</td>
                <td>Email</td>
                <td>Mật khẩu</td> 
                <td>Hành động</td>
              </tr>
            </thead>
            <tbody className="category_table">
              {/* Đưa dữ liệu vào đây */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminManagePro;
