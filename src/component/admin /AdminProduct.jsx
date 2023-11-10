import React from "react";

function AdminProduct() {
  return (
    <div className="tab-pane fade active show" id="dashboard">
      <div className="card">
        <div className="card-header">
          <h3>Quản lí sản phẩm</h3>
        </div>
        <div className="card-body">
          <div className="form_product_wrapper">
            <form>
              {/* phần nhập tên sản phẩm */}
              <div className="form-group">
                <label>Tên sản phẩm</label>
                <input
                  className="form-control-item name"
                  placeholder="Nhập tên sản phẩm"
                />
                <div className="error_message" />
              </div>
              {/* phần nhập tên sản phẩm */}
              {/* phần chọn category */}
              <div className="form-group">
                <label>Chọn danh mục</label>
                <select className="form-control-item category_wrapper_form">
                  {/* Đưa danh sách category vào đây */}
                  <option value="">Túi</option>
                  <option value="">Nước hoa</option>
                  <option value="">Phụ Kiện / Khác</option>
                </select>
              </div>
              {/* phần end chọn category */}
              {/* phần nhập giá sản phẩm */}
              <div className="form-group">
                <label>Giá sản phẩm</label>
                <input
                  className="form-control-item price_product"
                  placeholder="Nhập giá sản phẩm"
                />
                <div className="error_message" />
              </div>
              {/* phần nhập giá sản phẩm */}
              {/* phần ảnh sản phẩm */}
              <div className="form-group">
                <label>Ảnh sản phẩm</label>
                <input
                  className="form-control-item image"
                  placeholder="Nhập ảnh sản phẩm"
                />
                <div className="error_message" />
              </div>
              {/* phần nhập ảnh phẩm */}
              {/* phần nhập mô tả sản phẩm */}
              <div className="form-group">
                <label>Mô tả sản phẩm</label>
                <textarea rows={6} className="form-control-item description" />
                <div className="error_message" />
              </div>
              {/* Phần thêm loại sản phẩm */}
              <div className="form-group-radio">
                <input
                  type="radio"
                  defaultValue="new_arrival"
                  className="type_product"
                />
                <label>Túi</label>
                <input type="radio" className="type_product" />
                <label>Nước hoa</label>

                <input
                  name="type_product"
                  type="radio"
                  defaultValue="special_offer"
                  className="type_product"
                />
                <label>Phụ Kiện / Khác</label>
              </div>
              {/* Phần end thêm loại sản phẩm */}
              <div className="form-group">
                <button className="btn_common btn_save">Save</button>
              </div>
              {/* phần nhập mô tả phẩm */}
            </form>
            {/* 1. end form */}
            {/* 2. Table hiển thị thông tin sản phẩm */}
            <div className="title">
              <h2>Danh sách sản phẩm</h2>
            </div>
            <table className="styles_table">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Image</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody className="product_table" />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProduct;
