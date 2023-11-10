import React, { useEffect } from "react";
import "./bagPro.css";

function BagPro() {
  return (
    <div className="home-page">
      <nav
        className="navbar fixed-top"
        style={{ backgroundColor: "rgb(255, 253, 253, 0.3)" }}
      >
        <div className="container-fluid find">
          <div className="logo_lv">
            <h1>LOUIS VUITTON</h1>
          </div>
          <div className="lv-menu">
            <div className="myLV-cart" style={{ paddingTop: "5px" }}>
              <a href="">
                <i className="bi bi-cart3" /> Giỏ hàng{" "}
              </a>
            </div>
            <div className="header-myLV" style={{ paddingTop: "5px" }}>
              <a href="">My LV</a>
            </div>
            <div className="button-menu">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>
          </div>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Đóng
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul>
                <a href="">Tui</a>
                <li>
                  <a href="">Nước hoa</a>
                </li>
                <li>
                  <a href="">Đồ nữ</a>
                </li>
                <li>
                  <a href="">Đồ nam</a>
                </li>
                <li>
                  <a href="">Đồng hồ</a>
                </li>
                <li>
                  <a href="">Sản phẩm mới</a>
                </li>
              </ul>
              <hr />
              <ul>
                <li>
                  <a href=""> My LV</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="main-img">
        <div className="header-img">
          <img
            src="https://www.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--BC_WOMEN_EDITORIALISATION_045_LVCOM_2048x1152_DI3.jpg"
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="product-bag">
          <h2>Sản phẩm túi</h2>
          <div className="row product-card">
            <div className="col-3 ">
              <div className="card pro-card">
                <img
                  src="https://vn.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-t%C3%BAi-micro-chantilly-monogram-t%C3%BAi-v%C3%AD-%C4%91a-n%C4%83ng-v%C3%A0-ph%E1%BB%A5-ki%E1%BB%87n-b%E1%BA%B1ng-da--M46643_PM2_Front%20view.png"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <div className="name-cart">
                    <h5 className="card-title">Túi Micro Chantilly</h5>
                    <a href="">
                      <i class="bi bi-cart"></i>
                    </a>
                  </div>
                  <p>41,000,000 VNĐ</p>
                  <p className="card-text">
                    Với thiết kế độc đáo cùng kích thước nhỏ gọn, túi Micro
                    Chantilly mang đến nét thời thượng cho mọi trang phục.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="name-cart">
                    <h5 className="card-title">Card title</h5>
                    <i class="bi bi-cart"></i>
                  </div>

                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <footer className="lv-footer">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <h5>HỖ TRỢ</h5>
                <p>Câu hỏi thường gặp</p>
                <p>Chăm sóc sản phẩm</p>
                <p>Cửa hàng</p>
              </div>
              <div className="col-3">
                <h5>DỊCH VỤ</h5>
                <p>Dịch vụ bảo dưỡng</p>
                <p>Dịch vụ cá nhân hoá</p>
                <p>Quà tặng</p>
                <p>Tải ứng dụng của chúng tôi</p>
              </div>
              <div className="col-3">
                <h5>VỀ LOUIS VUITTON</h5>
                <p>Buổi trình diễn thời trang</p>
                <p>Nghệ thuật - văn hoá</p>
                <p>La Maison</p>
                <p>Phát triển</p>
              </div>
              <div className="col-3">
                <h5>KẾT NỐI VỚI CHÚNG TÔI</h5>
                <p>
                  <a href="">Đăng ký </a> để nhận thông tin mới nhất về bộ sưu
                  tập, chiến dịch và video
                </p>
                <p>Theo dõi chúng tôi</p>
              </div>
            </div>
          </div>
        </footer>
        <hr />
        <div className="address-end">
          <div>
            <p>🇻🇳 VIETNAM</p>
          </div>
          <div>
            <p>Sơ đồ trang web</p>
            <p>Pháp lý - Quyền riêng tư</p>
          </div>
        </div>
        <div className="name-brand-end">
          <h2>LOUIS VUITTON</h2>
        </div>
      </div>
    </div>
  );
}

export default BagPro;
