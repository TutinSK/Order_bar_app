import "../assets/css/Base.css";
import "../assets/css/Main.css";
import "../assets/css/Responsive.css";
import "../assets/css/Grid.css";

<<<<<<< HEAD
=======
import { useHistory } from "react-router-dom";
>>>>>>> 4d045148b742037c905835e94c9f24a7e4e2a29a


function Basepage() {

  return (
    <div className="wrapper">
      
      <div className="app__container">
        <div className="grid wide fix-wide-on-tablet">
          <div className="row app__content sm-gutter">
            {/* List */}
            <div className="col p-2 t-3 m-0">
              <nav className="category">
                <h3 className="category__heading">Danh mục</h3>
                <ul className="category-list">
                  <li className="category-item category-item--active">
                    <span href="#" className="category-item__link">Nước hoa Ohui</span>
                  </li>
                  <li className="category-item category-item__link--more">
                    <span href="#" className="category-item__link">
                      Mỹ phẩm cho da
                      <i className="category-item__link-icon fas fa-angle-right" />
                    </span>
                    <ul className="category-item__link--list">
                      <li className="category-item__link--item">
                        <span href="#" className="category-item__link">Da khô</span>
                      </li>
                      <li className="category-item__link--item">
                        <span href="#" className="category-item__link">Da mịn</span>
                      </li>
                      <li className="category-item__link--item">
                        <span href="#" className="category-item__link">Da có dầu</span>
                      </li>
                    </ul>
                  </li>
                  <li className="category-item category-item__link--more">
                    <span href="#" className="category-item__link">
                      Trang sức vàng
                      <i className="category-item__link-icon fas fa-angle-right" />
                    </span>
                    <ul className="category-item__link--list">
                      <li className="category-item__link--item">
                        <span href="#" className="category-item__link">Dành cho nam</span>
                      </li>
                      <li className="category-item__link--item">
                        <span href="#" className="category-item__link">Dành cho nữ</span>
                      </li>
                    </ul>
                  </li>
                  <li className="category-item category-item__link--more">
                    <span href="#" className="category-item__link">
                      Mỹ phẩm cho da
                      <i className="category-item__link-icon fas fa-angle-right" />
                    </span>
                    <ul className="category-item__link--list">
                      <li className="category-item__link--item">
                        <span href="#" className="category-item__link">Da khô</span>
                      </li>
                      <li className="category-item__link--item">
                        <span href="#" className="category-item__link">Da mịn</span>
                      </li>
                      <li className="category-item__link--item">
                        <span href="#" className="category-item__link">Da có dầu</span>
                      </li>
                    </ul>
                  </li>
                  <li className="category-item category-item__link--more">
                    <span href="#" className="category-item__link">
                      Trang sức vàng
                      <i className="category-item__link-icon fas fa-angle-right" />
                    </span>
                    <ul className="category-item__link--list">
                      <li className="category-item__link--item">
                        <span href="#" className="category-item__link">Dành cho nam</span>
                      </li>
                      <li className="category-item__link--item">
                        <span href="#" className="category-item__link">Dành cho nữ</span>
                      </li>
                    </ul>
                  </li>
                  <li className="category-item">
                    <span href="#" className="category-item__link">Áo khoác</span>
                  </li>
                  <li className="category-item">
                    <span href="#" className="category-item__link">Giày thể thao</span>
                  </li>
                  <li className="category-item">
                    <span href="#" className="category-item__link">Áo khoác</span>
                  </li>
                  <li className="category-item">
                    <span href="#" className="category-item__link">Giày Nike air</span>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col p-10 t-9 m-12">
              {/* Filter */}
              {/* <div className="home-filter hide-on-mobile-tablet">
                <span className="home-filter__label">Sắp xếp theo</span>
                <button className="home-filter__btn btn">Phổ biến</button>
                <button className="home-filter__btn btn btn--primary">Mới nhất</button>
                <button className="home-filter__btn btn">Bán chạy</button>
                <div className="select-input">
                  <span className="select-input__label">Giá</span>
                  <i className="select-input__icon fas fa-angle-down" />
                  <ul className="select-input__list">
                    <li className="select-input__item">
                      <span href="#" className="select-input__link">
                        Giá: Thấp đến cao
                      </span>
                    </li>
                    <li className="select-input__item">
                      <span href="#" className="select-input__link">
                        Giá: Cao đến thấp
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="home-filter__page">
                  <span className="home-filter__page-num">
                    <span className="home-filter__page-current">1</span>/14
                  </span>
                  <div className="home-filter__page-control">
                    <span href="#" className="home-filter__page-btn home-filter__page-btn--disabled">
                      <i className="home-filter__page-icon fas fa-angle-left" />
                    </span>
                    <span href="#" className="home-filter__page-btn">
                      <i className="home-filter__page-icon fas fa-angle-right" />
                    </span>
                  </div>
                </div>
              </div> */}
              {/* Nav list mobile */}
              <nav className="mobile-category">
                <ul className="mobile-category__list">
                  <li className="mobile-category__item">
                    <span href="#" className="mobile-category__link">Thiết bị gia dụng </span>
                  </li>
                  <li className="mobile-category__item">
                    <span href="#" className="mobile-category__link">Dụng cụ điện tử điện lạnh</span>
                  </li>
                  <li className="mobile-category__item">
                    <span href="#" className="mobile-category__link">Đồ thể thao nam nữ </span>
                  </li>
                  <li className="mobile-category__item">
                    <span href="#" className="mobile-category__link">Thiết bị gia dụng </span>
                  </li>
                  <li className="mobile-category__item">
                    <span href="#" className="mobile-category__link">Dụng cụ điện tử điện lạnh</span>
                  </li>
                  <li className="mobile-category__item">
                    <span href="#" className="mobile-category__link">Đồ thể thao nam nữ </span>
                  </li>
                  <li className="mobile-category__item">
                    <span href="#" className="mobile-category__link">Thiết bị gia dụng </span>
                  </li>
                  <li className="mobile-category__item">
                    <span href="#" className="mobile-category__link">Dụng cụ điện thử điện lạnh</span>
                  </li>
                  <li className="mobile-category__item">
                    <span href="#" className="mobile-category__link">Đồ thể thao nam nữ </span>
                  </li>
                  <li className="mobile-category__item">
                    <span href="#" className="mobile-category__link">Thiết bị gia dụng </span>
                  </li>
                  <li className="mobile-category__item">
                    <span href="#" className="mobile-category__link">Dụng cụ điện tử điện lạnh</span>
                  </li>
                  <li className="mobile-category__item">
                    <span href="#" className="mobile-category__link">Đồ thể thao nam nữ </span>
                  </li>
                  <li className="mobile-category__item">
                    <span href="#" className="mobile-category__link">Thiết bị gia dụng </span>
                  </li>
                  <li className="mobile-category__item">
                    <span href="#" className="mobile-category__link">Dụng cụ điện tử</span>
                  </li>
                  <li className="mobile-category__item">
                    <span href="#" className="mobile-category__link">Đồ thể thao nam nữ </span>
                  </li>
                </ul>
              </nav>
              {/* Product */}
              <div className="home-product">
                {/* grid->row->column */}
                <div className="row sm-gutter">
                  {/* Product Item */}
                  <div className="col p-2-4 t-4 m-6">
                    <span className="home-product-item" href="product.html">
                      <div className="home-product-item__img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/33f5f79770cac0eb33db2f02b2e7567c_tn)' }} />
                      <h4 className="home-product-item__name">
                        Set nước hoa hồng Ohui Miracle Moisture Skin Softener Moist
                      </h4>
                      <div className="home-product-item__price">
                        <span className="home-product-item__price-old">1.200.000đ</span>
                        <span className="home-product-item__price-current">999.000đ</span>
                      </div>
                      <div className="home-product-item__action">
                        {/* Liked: home-product-item__like--liked */}
                        <span className="home-product-item__like home-product-item__like--liked">
                          <i className="home-product-item__like-icon-empty far fa-heart" />
                          <i className="home-product-item__like-icon-fill fas fa-heart" />
                        </span>
                        <div className="home-product-item__rating">
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <span className="home-product-item__sold">169 đã bán</span>
                      </div>
                      <div className="home-product-item__origin">
                        <span className="home-product-item__brand">Whoo</span>
                        <span className="home-product-item__origin-name">Nhật Bản</span>
                      </div>
                      <div className="home-product-item__favorite">
                        <i className="fas fa-check" />
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">43%</span>
                        <span className="home-product-item__sale-off-label">GIẢM</span>
                      </div>
                    </span>
                  </div>
                  <div className="col p-2-4 t-4 m-6">
                    <span className="home-product-item" href="product.html">
                      <div className="home-product-item__img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/48557d68e3b11497b6a5f577b004cb14_tn)' }} />
                      <h4 className="home-product-item__name">
                        Set nước hoa hồng Ohui Miracle Moisture Skin Softener Moist
                      </h4>
                      <div className="home-product-item__price">
                        <span className="home-product-item__price-old">1.200.000đ</span>
                        <span className="home-product-item__price-current">999.000đ</span>
                      </div>
                      <div className="home-product-item__action">
                        {/* Liked: home-product-item__like--liked */}
                        <span className="home-product-item__like home-product-item__like--liked">
                          <i className="home-product-item__like-icon-empty far fa-heart" />
                          <i className="home-product-item__like-icon-fill fas fa-heart" />
                        </span>
                        <div className="home-product-item__rating">
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <span className="home-product-item__sold">169 đã bán</span>
                      </div>
                      <div className="home-product-item__origin">
                        <span className="home-product-item__brand">Whoo</span>
                        <span className="home-product-item__origin-name">Nhật Bản</span>
                      </div>
                      <div className="home-product-item__favorite">
                        <i className="fas fa-check" />
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">43%</span>
                        <span className="home-product-item__sale-off-label">GIẢM</span>
                      </div>
                    </span>
                  </div>
                  <div className="col p-2-4 t-4 m-6">
                    <span className="home-product-item" href="product.html">
                      <div className="home-product-item__img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/ad8fda2186375c80d381c66f87aef14e_tn)' }} />
                      <h4 className="home-product-item__name">
                        Set nước hoa hồng Ohui Miracle Moisture Skin Softener Moist
                      </h4>
                      <div className="home-product-item__price">
                        <span className="home-product-item__price-old">1.200.000đ</span>
                        <span className="home-product-item__price-current">999.000đ</span>
                      </div>
                      <div className="home-product-item__action">
                        {/* Liked: home-product-item__like--liked */}
                        <span className="home-product-item__like home-product-item__like--liked">
                          <i className="home-product-item__like-icon-empty far fa-heart" />
                          <i className="home-product-item__like-icon-fill fas fa-heart" />
                        </span>
                        <div className="home-product-item__rating">
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <span className="home-product-item__sold">169 đã bán</span>
                      </div>
                      <div className="home-product-item__origin">
                        <span className="home-product-item__brand">Whoo</span>
                        <span className="home-product-item__origin-name">Nhật Bản</span>
                      </div>
                      <div className="home-product-item__favorite">
                        <i className="fas fa-check" />
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">43%</span>
                        <span className="home-product-item__sale-off-label">GIẢM</span>
                      </div>
                    </span>
                  </div>
                  <div className="col p-2-4 t-4 m-6">
                    <span className="home-product-item" href="product.html">
                      <div className="home-product-item__img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/9310b8a7ce22162e96d1d193af8c9aaa_tn)' }} />
                      <h4 className="home-product-item__name">
                        Set nước hoa hồng Ohui Miracle Moisture Skin Softener Moist
                      </h4>
                      <div className="home-product-item__price">
                        <span className="home-product-item__price-old">1.200.000đ</span>
                        <span className="home-product-item__price-current">999.000đ</span>
                      </div>
                      <div className="home-product-item__action">
                        {/* Liked: home-product-item__like--liked */}
                        <span className="home-product-item__like home-product-item__like--liked">
                          <i className="home-product-item__like-icon-empty far fa-heart" />
                          <i className="home-product-item__like-icon-fill fas fa-heart" />
                        </span>
                        <div className="home-product-item__rating">
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <span className="home-product-item__sold">169 đã bán</span>
                      </div>
                      <div className="home-product-item__origin">
                        <span className="home-product-item__brand">Whoo</span>
                        <span className="home-product-item__origin-name">Nhật Bản</span>
                      </div>
                      <div className="home-product-item__favorite">
                        <i className="fas fa-check" />
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">43%</span>
                        <span className="home-product-item__sale-off-label">GIẢM</span>
                      </div>
                    </span>
                  </div>
                  <div className="col p-2-4 t-4 m-6">
                    <span className="home-product-item" href="product.html">
                      <div className="home-product-item__img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/847b2d121800874595e39ebdc9c6e39b_tn)' }} />
                      <h4 className="home-product-item__name">
                        Set nước hoa hồng Ohui Miracle Moisture Skin Softener Moist
                      </h4>
                      <div className="home-product-item__price">
                        <span className="home-product-item__price-old">1.200.000đ</span>
                        <span className="home-product-item__price-current">999.000đ</span>
                      </div>
                      <div className="home-product-item__action">
                        {/* Liked: home-product-item__like--liked */}
                        <span className="home-product-item__like home-product-item__like--liked">
                          <i className="home-product-item__like-icon-empty far fa-heart" />
                          <i className="home-product-item__like-icon-fill fas fa-heart" />
                        </span>
                        <div className="home-product-item__rating">
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <span className="home-product-item__sold">169 đã bán</span>
                      </div>
                      <div className="home-product-item__origin">
                        <span className="home-product-item__brand">Whoo</span>
                        <span className="home-product-item__origin-name">Nhật Bản</span>
                      </div>
                      <div className="home-product-item__favorite">
                        <i className="fas fa-check" />
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">43%</span>
                        <span className="home-product-item__sale-off-label">GIẢM</span>
                      </div>
                    </span>
                  </div>
                  <div className="col p-2-4 t-4 m-6">
                    <span className="home-product-item" href="product.html">
                      <div className="home-product-item__img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/90edda778e02f7bf14439fbed0de7cd4_tn)' }} />
                      <h4 className="home-product-item__name">
                        Set nước hoa hồng Ohui Miracle Moisture Skin Softener Moist
                      </h4>
                      <div className="home-product-item__price">
                        <span className="home-product-item__price-old">1.200.000đ</span>
                        <span className="home-product-item__price-current">999.000đ</span>
                      </div>
                      <div className="home-product-item__action">
                        {/* Liked: home-product-item__like--liked */}
                        <span className="home-product-item__like home-product-item__like--liked">
                          <i className="home-product-item__like-icon-empty far fa-heart" />
                          <i className="home-product-item__like-icon-fill fas fa-heart" />
                        </span>
                        <div className="home-product-item__rating">
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <span className="home-product-item__sold">169 đã bán</span>
                      </div>
                      <div className="home-product-item__origin">
                        <span className="home-product-item__brand">Whoo</span>
                        <span className="home-product-item__origin-name">Nhật Bản</span>
                      </div>
                      <div className="home-product-item__favorite">
                        <i className="fas fa-check" />
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">43%</span>
                        <span className="home-product-item__sale-off-label">GIẢM</span>
                      </div>
                    </span>
                  </div>
                  <div className="col p-2-4 t-4 m-6">
                    <span className="home-product-item" href="product.html">
                      <div className="home-product-item__img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/770ca15f3c28c165b3b7ce6fb3c5edda_tn)' }} />
                      <h4 className="home-product-item__name">
                        Set nước hoa hồng Ohui Miracle Moisture Skin Softener Moist
                      </h4>
                      <div className="home-product-item__price">
                        <span className="home-product-item__price-old">1.200.000đ</span>
                        <span className="home-product-item__price-current">999.000đ</span>
                      </div>
                      <div className="home-product-item__action">
                        {/* Liked: home-product-item__like--liked */}
                        <span className="home-product-item__like home-product-item__like--liked">
                          <i className="home-product-item__like-icon-empty far fa-heart" />
                          <i className="home-product-item__like-icon-fill fas fa-heart" />
                        </span>
                        <div className="home-product-item__rating">
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <span className="home-product-item__sold">169 đã bán</span>
                      </div>
                      <div className="home-product-item__origin">
                        <span className="home-product-item__brand">Whoo</span>
                        <span className="home-product-item__origin-name">Nhật Bản</span>
                      </div>
                      <div className="home-product-item__favorite">
                        <i className="fas fa-check" />
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">43%</span>
                        <span className="home-product-item__sale-off-label">GIẢM</span>
                      </div>
                    </span>
                  </div>
                  <div className="col p-2-4 t-4 m-6">
                    <span className="home-product-item" href="product.html">
                      <div className="home-product-item__img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/43b0dab404f27ced5ed2801ffc24edf2_tn)' }} />
                      <h4 className="home-product-item__name">
                        Set nước hoa hồng Ohui Miracle Moisture Skin Softener Moist
                      </h4>
                      <div className="home-product-item__price">
                        <span className="home-product-item__price-old">1.200.000đ</span>
                        <span className="home-product-item__price-current">999.000đ</span>
                      </div>
                      <div className="home-product-item__action">
                        {/* Liked: home-product-item__like--liked */}
                        <span className="home-product-item__like home-product-item__like--liked">
                          <i className="home-product-item__like-icon-empty far fa-heart" />
                          <i className="home-product-item__like-icon-fill fas fa-heart" />
                        </span>
                        <div className="home-product-item__rating">
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <span className="home-product-item__sold">169 đã bán</span>
                      </div>
                      <div className="home-product-item__origin">
                        <span className="home-product-item__brand">Whoo</span>
                        <span className="home-product-item__origin-name">Nhật Bản</span>
                      </div>
                      <div className="home-product-item__favorite">
                        <i className="fas fa-check" />
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">43%</span>
                        <span className="home-product-item__sale-off-label">GIẢM</span>
                      </div>
                    </span>
                  </div>
                  <div className="col p-2-4 t-4 m-6">
                    <span className="home-product-item" href="product.html">
                      <div className="home-product-item__img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/ca918af68755e7b10ea380987fc102c7_tn)' }} />
                      <h4 className="home-product-item__name">
                        Set nước hoa hồng Ohui Miracle Moisture Skin Softener Moist
                      </h4>
                      <div className="home-product-item__price">
                        <span className="home-product-item__price-old">1.200.000đ</span>
                        <span className="home-product-item__price-current">999.000đ</span>
                      </div>
                      <div className="home-product-item__action">
                        {/* Liked: home-product-item__like--liked */}
                        <span className="home-product-item__like home-product-item__like--liked">
                          <i className="home-product-item__like-icon-empty far fa-heart" />
                          <i className="home-product-item__like-icon-fill fas fa-heart" />
                        </span>
                        <div className="home-product-item__rating">
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <span className="home-product-item__sold">169 đã bán</span>
                      </div>
                      <div className="home-product-item__origin">
                        <span className="home-product-item__brand">Whoo</span>
                        <span className="home-product-item__origin-name">Nhật Bản</span>
                      </div>
                      <div className="home-product-item__favorite">
                        <i className="fas fa-check" />
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">43%</span>
                        <span className="home-product-item__sale-off-label">GIẢM</span>
                      </div>
                    </span>
                  </div>
                  <div className="col p-2-4 t-4 m-6">
                    <span className="home-product-item" href="product.html">
                      <div className="home-product-item__img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/2e98b7a2f7fc8b2845f6c8ecba91ac71_tn)' }} />
                      <h4 className="home-product-item__name">
                        Set nước hoa hồng Ohui Miracle Moisture Skin Softener Moist
                      </h4>
                      <div className="home-product-item__price">
                        <span className="home-product-item__price-old">1.200.000đ</span>
                        <span className="home-product-item__price-current">999.000đ</span>
                      </div>
                      <div className="home-product-item__action">
                        {/* Liked: home-product-item__like--liked */}
                        <span className="home-product-item__like home-product-item__like--liked">
                          <i className="home-product-item__like-icon-empty far fa-heart" />
                          <i className="home-product-item__like-icon-fill fas fa-heart" />
                        </span>
                        <div className="home-product-item__rating">
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="home-product-item__star--gold fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <span className="home-product-item__sold">169 đã bán</span>
                      </div>
                      <div className="home-product-item__origin">
                        <span className="home-product-item__brand">Whoo</span>
                        <span className="home-product-item__origin-name">Nhật Bản</span>
                      </div>
                      <div className="home-product-item__favorite">
                        <i className="fas fa-check" />
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">43%</span>
                        <span className="home-product-item__sale-off-label">GIẢM</span>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <ul className="pagination pagination__home-product">
                <li className="pagination-item">
                  <span href="#" className="pagination-item__link">
                    <i className="pagination-item__icon fas fa-angle-left" />
                  </span>
                </li>
                <li className="pagination-item pagination-item--active">
                  <span href="#" className="pagination-item__link">
                    1
                  </span>
                </li>
                <li className="pagination-item">
                  <span href="#" className="pagination-item__link">
                    2
                  </span>
                </li>
                <li className="pagination-item">
                  <span href="#" className="pagination-item__link">
                    3
                  </span>
                </li>
                <li className="pagination-item">
                  <span href="#" className="pagination-item__link">
                    4
                  </span>
                </li>
                <li className="pagination-item">
                  <span href="#" className="pagination-item__link">
                    5
                  </span>
                </li>
                <li className="pagination-item">
                  <span className="pagination-item__link">
                    ...
                  </span>
                </li>
                <li className="pagination-item">
                  <span href="#" className="pagination-item__link">
                    14
                  </span>
                </li>
                <li className="pagination-item">
                  <span href="#" className="pagination-item__link">
                    <i className="pagination-item__icon fas fa-angle-right" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </div>

  );
}
export default Basepage;