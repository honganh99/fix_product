import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      {/* navbar */}
      <div className="navbar-home-page">
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
                <Link to="/bag-product">My LV</Link>
              </div>
              <Link to="/bag-product">Tui</Link>

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
                  <Link to="/bag-product">Tui</Link>
                  <li></li>
                  <li>
                    <Link to="">Nước hoa</Link>
                  </li>
                  <li>
                    <Link to="">Đồ nữ</Link>
                  </li>
                  <li>
                    <Link to="">Đồ nam</Link>
                  </li>
                  <li>
                    <Link to="">Đồng hồ</Link>
                  </li>
                  <li>
                    <Link to="">Sản phẩm mới</Link>
                  </li>
                </ul>
                <hr />
                <ul>
                  <li>
                    <Link to=".." relative="/register">
                      {" "}
                      My LV
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* end navbar */}

      {/* picture */}
      <div className="haeder-home-page">
        {/* video */}
        <div className="video-home-page ">
          <div className="header-video img-content">
            <video autoPlay="" loop="">
              <source
                src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/5ysm8hs4iN_HD.mp4"
                type="video/mp4"
              />
            </video>
            <div className="video-content">
              <div className="content-title">
                <h1>Túi GO-14</h1>
                <div className="button-conten">
                  <button>Khám phá túi mới</button>
                  <button>Xem tất cả túi</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end video */}

        <div className="video-home-page ">
          <div className="header-video img-content">
            <img
              src="https://vn.louisvuitton.com/images/is/image/HP_SG_MEN_FORMAL_2023_DI3.jpg"
              alt=""
            />
            <div className="video-content">
              <div className="content-title">
                <h1>Bộ sưu tập New Formal</h1>
                <div className="button-conten">
                  <button>Khám phá thêm</button>
                  <button>Xem thêm giày</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="video-home-page ">
          <div className="header-video img-content">
            <img
              src="https://vn.louisvuitton.com/images/is/image/BC_WOMEN_EDITORIALISATION_045_LVCOM_2048x1152_DI3.jpg"
              alt=""
            />
            <div className="video-content">
              <div className="content-title">
                <h1>Những thiết kế mới nhất cho Nữ</h1>
                <div className="button-conten">
                  <button>Khám phá thêm</button>
                  <button>Xem túi Monogram kinh điển</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="video-home-page ">
          <div className="header-video img-content">
            <img
              src="https://vn.louisvuitton.com/images/is/image/HP_AU_LV_EVERGREEN_Pochette_Voyage_MM_DII.jpg"
              alt=""
            />
            <div className="video-content">
              <div className="content-title">
                <h1>Những mẫu túi kinh điển cho Nam</h1>
                <div className="button-conten">
                  <button>Xem túi ví và phụ kiện</button>
                  <button>Xem thêm túi</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="video-home-page ">
          <div className="header-video img-content">
            <video autoPlay="">
              <source
                src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/E8wcyy1dZg_HD.mp4"
                type="video/mp4"
              />
            </video>
            <div className="video-content">
              <div className="content-title">
                <h1>Bộ sưu tập Thu-Đông 2023 dành cho Nữ</h1>
                <div className="button-conten">
                  <button>Khám phá bộ sưu tập</button>
                  <button>Xem túi ví và phụ kiện</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end picture */}

      {/* dịch vụ */}
      <section className="service">
        <h2>Dịch vụ của Louis Vuiton</h2>
        <div className="container">
          <div className="row">
            <div className="col-4 aa">
              <div className="card">
                <img
                  src="https://vn.louisvuitton.com/images/is/image/HP_Services_Push_Contact_Us_DI2.jpg"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h3>Giúp đỡ</h3>
                  <p className="card-text">
                    Chuyên viên Tư vấn của Louis Vuitton hân hạnh hỗ trợ.
                  </p>
                  <p className="card-link">Liên hệ với chúng tôi</p>
                </div>
              </div>
            </div>
            <div className="col-4 aa">
              <div className="card">
                <img
                  src="https://vn.louisvuitton.com/images/is/image/HP_Services_Push_Art_Of_Gifting_DI2.jpg"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h3>Quà tặng</h3>
                  <p className="card-text">
                    Chọn quà từ những sản phẩm được tuyển chọn đặc biệt.
                  </p>
                  <p>Sự lựa chọn của bạn</p>
                </div>
              </div>
            </div>
            <div className="col-4 aa">
              <div className="card">
                <img
                  src="https://vn.louisvuitton.com/images/is/image/HP_Services_Push_Personalization_DI2.jpg"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h3>Dịch vụ</h3>
                  <p className="card-text">
                    Dịch vụ Louis Vuitton mang đến nhiều sự lựa chọn cho bạn.
                  </p>
                  <p className="card-link">Khám phá Bộ sưu tập</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end dịch vụ */}
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
  );
}

export default Home;
