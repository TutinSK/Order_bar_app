import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import '../assets/css/Header.css'
import '../assets/css/Responsive.css'
import '../assets/css/Grid.css'
import logo from '../assets/img/logo.jpg'
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import fakeImg from './../assets/img/fake.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { deCrePro, getDataLocal, getItem, inCreatePro, removeDataLocal } from '../redux/actions';
import * as BEERAPP from './../utils/index';

function Header(props) {
    const authFakeLocal = JSON.parse(localStorage.getItem('authLogin'));
    let changeState = useSelector(state => state.cartItem.changeState);

    const history = useHistory();
    const location = useLocation();
    const [conutRender, setCOuntRender] = useState(0)
    const [countBeer, setCountBeer] = useState(1);
    const handleLogout = () => {
        localStorage.removeItem('authLogin')
        window.location.reload()
    }
    var arrOrderProducts = JSON.parse(localStorage.getItem('localArrOrderProducts')) || []
    const dispatch = useDispatch();

    const handleDeleteLocal = (item) => {
        const actionsDelete = removeDataLocal(item)
        dispatch(actionsDelete)
        setTimeout(() => {
            setCOuntRender(conutRender + 1)
        }, 50)

    }
    const handleCount = (mark, item) => {
        if (mark === '-') {
            const acionsDecre = deCrePro(item)
            dispatch(acionsDecre)
            setTimeout(() => {
                setCOuntRender(conutRender + 1)
            }, 50)

        }
        else if (mark === '+') {
            const actionsIncre = inCreatePro(item)
            dispatch(actionsIncre)
            setTimeout(() => {
                setCOuntRender(conutRender + 1)
            }, 50)

        }


    }
    function getData() {

    }
    const handleBuyNow = (indexBeer, itemBeer) => {

        const actions = getItem(itemBeer)
        dispatch(actions)


    }

    useEffect(() => {

    }, [conutRender, changeState])

    return (

        <header className="header">

            <div className="grid wide fix-wide-on-tablet">
                {/* Header navbar */}
                <nav className="header__navbar hide-on-mobile-tablet">
                    <ul className="header__navbar-list">
                        <li className="header__navbar-item header__navbar-item--has-link header__navbar-item--separate">
                            Vào cửa hàng trên ứng dụng MH Shop
                            <div className="header__qr">
                                <img src="./assets/img/qr_code.png" alt="QR CODE" className="header__qr-img" />
                                <div className="header__qr-apps">
                                    <span href="#" className="header__qr-link">
                                        <img src="assets/img/google_play.png" alt="Google Play" className="header__qr-download-img" />
                                    </span>
                                    <span href="#" className="header__qr-link">
                                        <img src="assets/img/app_store.png" alt="App Store" className="header__qr-download-img" />
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className="header__navbar-item">
                            <span className="header__navbar-title--no-pointer">
                                Kết nối
                            </span>
                            <span href="#" className="header__navbar-icon-link">
                                <i className="header__navbar-icon fab fa-facebook" />
                            </span>
                            <span href="#" className="header__navbar-icon-link">
                                <i className="header__navbar-icon fab fa-instagram" />
                            </span>
                        </li>
                    </ul>
                    <ul className="header__navbar-list">
                        <li className="header__navbar-item header__navbar-item--has-notify">
                            <span href="#" className="header__navbar-item-link">
                                <i className="header__navbar-icon far fa-bell" />
                                Thông báo
                            </span>
                            <div className="header__notify">
                                <header className="header__notify-header">
                                    <h3>Thông báo mới nhận</h3>
                                </header>
                                <ul className="header__notify-list">
                                    <li className="header__notify-item">
                                        <span href="#" className="header__notify-link">
                                            <img src="https://cf.shopee.vn/file/aebbec31c262e22639dc6ecc75179b16_tn" alt="" className="header__notify-img" />
                                            <div className="header__notify-info">
                                                <span className="header__notify-name">Mỹ phẩm Ohui chính hãng Mỹ phẩm Ohui chính hãng Mỹ phẩm Ohui chính hãng Mỹ phẩm Ohui chính hãng</span>
                                                <span className="header__notify-descriotion">Mô tả Ohui chính hãng Ohui chính hãng Mô tả Ohui chính hãng Ohui chính hãng Mô tả Ohui chính hãng Ohui chính hãng</span>
                                            </div>
                                        </span>
                                    </li>
                                    <li className="header__notify-item">
                                        <span href="#" className="header__notify-link">
                                            <img src="https://cf.shopee.vn/file/4fc67eef124763f71f8a1a928b2f209d" alt="" className="header__notify-img" />
                                            <div className="header__notify-info">
                                                <span className="header__notify-name">Váy polo cổ đức cực năng động. Váy polo siêu hot</span>
                                                <span className="header__notify-descriotion">Khách chưa rõ size số vui lòng nt tư vấn trước khi mua hàng để tránh tình trạng chật rộng shop k.</span>
                                            </div>
                                        </span>
                                    </li>
                                    <li className="header__notify-item">
                                        <span href="#" className="header__notify-link">
                                            <img src="https://cf.shopee.vn/file/dd3768d68449b9c4e5dc653339443dfd" alt="" className="header__notify-img" />
                                            <div className="header__notify-info">
                                                <span className="header__notify-name">Váy Nữ Caro Cổ Vuông Ôm Body Chiết Eo Sang Chảnh Sun.z</span>
                                                <span className="header__notify-descriotion">Tư vấn nhanh chóng, nếu bạn có bất kỳ câu hỏi nào, vui lòng hỏi và trò chuyện, chúng tôi sẽ phục vụ bạn trực tuyến online hằng ngày</span>
                                            </div>
                                        </span>
                                    </li>
                                    <li className="header__notify-item header__notify-item--viewed">
                                        <span href="#" className="header__notify-link">
                                            <img src="https://cf.shopee.vn/file/4b7af8582e7b284216da68e982785141" alt="" className="header__notify-img" />
                                            <div className="header__notify-info">
                                                <span className="header__notify-name">Zara Mickey hot hit lại sản xuất thêm rồi.</span>
                                                <span className="header__notify-descriotion">Vừa xinh vừa dễ phối đồ. Phiên bản đạp gót của Zara là ưng nhất trong các loại đạp gót luôn ạ</span>
                                            </div>
                                        </span>
                                    </li>
                                    <li className="header__notify-item header__notify-item--viewed">
                                        <span href="#" className="header__notify-link">
                                            <img src="https://cf.shopee.vn/file/e7e789acc9bd94486e32acc961b9227e" alt="" className="header__notify-img" />
                                            <div className="header__notify-info">
                                                <span className="header__notify-name">Giày bệt nơ chất liệu da lộn hàng chuẩn đẹp</span>
                                                <span className="header__notify-descriotion">Cách đặt nhiều sản phẩm/mẫu/màu gộp 1 đơn hàng: Bạn chọn các sản phẩm cần mua</span>
                                            </div>
                                        </span>
                                    </li>
                                    <li className="header__notify-item header__notify-item--viewed">
                                        <span href="#" className="header__notify-link">
                                            <img src="https://cf.shopee.vn/file/4b7af8582e7b284216da68e982785141" alt="" className="header__notify-img" />
                                            <div className="header__notify-info">
                                                <span className="header__notify-name">Zara Mickey hot hit lại sản xuất thêm rồi.</span>
                                                <span className="header__notify-descriotion">Vừa xinh vừa dễ phối đồ. Phiên bản đạp gót của Zara là ưng nhất trong các loại đạp gót luôn ạ</span>
                                            </div>
                                        </span>
                                    </li>
                                    <li className="header__notify-item header__notify-item--viewed">
                                        <span href="#" className="header__notify-link">
                                            <img src="https://cf.shopee.vn/file/e7e789acc9bd94486e32acc961b9227e" alt="" className="header__notify-img" />
                                            <div className="header__notify-info">
                                                <span className="header__notify-name">Giày bệt nơ chất liệu da lộn hàng chuẩn đẹp</span>
                                                <span className="header__notify-descriotion">Cách đặt nhiều sản phẩm/mẫu/màu gộp 1 đơn hàng: Bạn chọn các sản phẩm cần mua</span>
                                            </div>
                                        </span>
                                    </li>
                                    <li className="header__notify-item header__notify-item--viewed">
                                        <span href="#" className="header__notify-link">
                                            <img src="https://cf.shopee.vn/file/4b7af8582e7b284216da68e982785141" alt="" className="header__notify-img" />
                                            <div className="header__notify-info">
                                                <span className="header__notify-name">Zara Mickey hot hit lại sản xuất thêm rồi.</span>
                                                <span className="header__notify-descriotion">Vừa xinh vừa dễ phối đồ. Phiên bản đạp gót của Zara là ưng nhất trong các loại đạp gót luôn ạ</span>
                                            </div>
                                        </span>
                                    </li>
                                    <li className="header__notify-item header__notify-item--viewed">
                                        <span href="#" className="header__notify-link">
                                            <img src="https://cf.shopee.vn/file/e7e789acc9bd94486e32acc961b9227e" alt="" className="header__notify-img" />
                                            <div className="header__notify-info">
                                                <span className="header__notify-name">Giày bệt nơ chất liệu da lộn hàng chuẩn đẹp</span>
                                                <span className="header__notify-descriotion">Cách đặt nhiều sản phẩm/mẫu/màu gộp 1 đơn hàng: Bạn chọn các sản phẩm cần mua</span>
                                            </div>
                                        </span>
                                    </li>
                                </ul>
                                <footer className="header__notify-footer">
                                    <span href="#" className="header__notify-footer-btn">
                                        Xem tất cả
                                    </span>
                                </footer>
                            </div>
                        </li>
                        <li className="header__navbar-item">
                            <span href="#" className="header__navbar-item-link">
                                <i className="header__navbar-icon far fa-question-circle" />
                                Trợ giúp
                            </span>
                        </li>
                        {/* <li class="header__navbar-item header__navbar-item--bold header__navbar-item--separate">Đăng kí</li>
        <li class="header__navbar-item header__navbar-item--bold">Đăng nhập</li> */}
                        <li className="header__navbar-item header__navbar-user">
                            <img src="https://yt3.ggpht.com/yti/ANoDKi5pv5fU3lXkrswX8iF2gEL5yetOMwkB3vUMdHEHPg=s88-c-k-c0x00ffffff-no-rj-mo" alt="Username" className="header__navbar-user-img" />
                            <span className="header__navbar-user-name">{authFakeLocal !== null ? authFakeLocal.user : ''}</span>
                            <ul className="header__navbar-user-menu">
                                <li className="header__navbar-user-item"><span href="#">Tài khoản của tôi</span></li>
                                <li className="header__navbar-user-item"><span href="#">Địa chỉ của tôi</span></li>

                                <li className="header__navbar-user-item"><span href="#">Đơn mua</span></li>
                                <li className="header__navbar-user-item header__navbar-user-item--separate" onClick={handleLogout}><span style={{ color: 'black' }} >Đăng xuất</span></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                {/* Header with search */}
                <div className="header-with-search">
                    {/* List Mobile icon */}
                    <label htmlFor="mobile-list-input" className="header__mobile-list">
                        <i className="header__mobile-list-icon fas fa-bars" />
                    </label>
                    {/* Search mobile icon */}
                    <label htmlFor="mobile-search-input" className="header__mobile-search">
                        <i className="header__mobile-search-icon fas fa-search" />
                    </label>
                    {/* Logo */}
                    <div className="header__logo">
                        <span className="header__logo-link">
                            <img src={logo} className="header__logo-img" alt="logo"/>
                    
                        </span>
                    </div> 
                    <input type="checkbox" name id="mobile-search-input" className="header__search-checkbox" hidden />

                    <div className="header__search">
                        <div className="header__search-input-wrap">
                            <input type="text" className="header__search-input" placeholder="Tìm kiếm sản phẩm" />
                            {/* Search history */}
                            <div className="header__search-history">
                                <h3 className="header__search-history-heading">Lịch sử tìm kiếm</h3>
                                <ul className="header__search-history-list">
                                    <li className="header__search-history-item">
                                        <span href="#">N</span>
                                    </li>
                                    <li className="header__search-history-item">
                                        <span href="#">T</span>
                                    </li>
                                    <li className="header__search-history-item">
                                        <span href="#">Hana</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button className="header__search-btn">
                            <p className="header__search-btn-icon"><FaSearch /></p>
                        </button>
                    </div>
                    {/* Mobile */}
                    <label htmlFor="header__mobile-notify" className="header__notify-mobile">
                        <i className="header__notify-mobile--icon far fa-bell" />
                        <span className="header__notify-mobile--notice">5+</span>
                    </label>
                    <input type="checkbox" hidden name id="header__mobile-notify" className="header__mobile-noti" />
                    <label htmlFor="header__mobile-notify" className="header__mobile-notify--overlay" />
                    <div className="header__notify">
                        <header className="header__notify-header">
                            <h3>Thông báo mới nhận</h3>
                        </header>
                        <ul className="header__notify-list">
                            <li className="header__notify-item">
                                <span href="#" className="header__notify-link">
                                    <img src="https://cf.shopee.vn/file/aebbec31c262e22639dc6ecc75179b16_tn" alt="" className="header__notify-img" />
                                    <div className="header__notify-info">
                                        <span className="header__notify-name">Mỹ phẩm Ohui chính hãng Mỹ phẩm Ohui chính hãng Mỹ phẩm Ohui chính hãng Mỹ phẩm Ohui chính hãng</span>
                                        <span className="header__notify-descriotion">Mô tả Ohui chính hãng Ohui chính hãng Mô tả Ohui chính hãng Ohui chính hãng Mô tả Ohui chính hãng Ohui chính hãng</span>
                                    </div>
                                </span>
                            </li>
                            <li className="header__notify-item">
                                <span href="#" className="header__notify-link">
                                    <img src="https://cf.shopee.vn/file/4fc67eef124763f71f8a1a928b2f209d" alt="" className="header__notify-img" />
                                    <div className="header__notify-info">
                                        <span className="header__notify-name">Váy polo cổ đức cực năng động. Váy polo siêu hot</span>
                                        <span className="header__notify-descriotion">Khách chưa rõ size số vui lòng nt tư vấn trước khi mua hàng để tránh tình trạng chật rộng shop k.</span>
                                    </div>
                                </span>
                            </li>
                            <li className="header__notify-item">
                                <span href="#" className="header__notify-link">
                                    <img src="https://cf.shopee.vn/file/dd3768d68449b9c4e5dc653339443dfd" alt="" className="header__notify-img" />
                                    <div className="header__notify-info">
                                        <span className="header__notify-name">Váy Nữ Caro Cổ Vuông Ôm Body Chiết Eo Sang Chảnh Sun.z</span>
                                        <span className="header__notify-descriotion">Tư vấn nhanh chóng, nếu bạn có bất kỳ câu hỏi nào, vui lòng hỏi và trò chuyện, chúng tôi sẽ phục vụ bạn trực tuyến online hằng ngày</span>
                                    </div>
                                </span>
                            </li>
                            <li className="header__notify-item header__notify-item--viewed">
                                <span href="#" className="header__notify-link">
                                    <img src="https://cf.shopee.vn/file/4b7af8582e7b284216da68e982785141" alt="" className="header__notify-img" />
                                    <div className="header__notify-info">
                                        <span className="header__notify-name">Zara Mickey hot hit lại sản xuất thêm rồi.</span>
                                        <span className="header__notify-descriotion">Vừa xinh vừa dễ phối đồ. Phiên bản đạp gót của Zara là ưng nhất trong các loại đạp gót luôn ạ</span>
                                    </div>
                                </span>
                            </li>
                            <li className="header__notify-item header__notify-item--viewed">
                                <span href="#" className="header__notify-link">
                                    <img src="https://cf.shopee.vn/file/e7e789acc9bd94486e32acc961b9227e" alt="" className="header__notify-img" />
                                    <div className="header__notify-info">
                                        <span className="header__notify-name">Giày bệt nơ chất liệu da lộn hàng chuẩn đẹp</span>
                                        <span className="header__notify-descriotion">Cách đặt nhiều sản phẩm/mẫu/màu gộp 1 đơn hàng: Bạn chọn các sản phẩm cần mua</span>
                                    </div>
                                </span>
                            </li>
                            <li className="header__notify-item header__notify-item--viewed">
                                <span href="#" className="header__notify-link">
                                    <img src="https://cf.shopee.vn/file/4b7af8582e7b284216da68e982785141" alt="" className="header__notify-img" />
                                    <div className="header__notify-info">
                                        <span className="header__notify-name">Zara Mickey hot hit lại sản xuất thêm rồi.</span>
                                        <span className="header__notify-descriotion">Vừa xinh vừa dễ phối đồ. Phiên bản đạp gót của Zara là ưng nhất trong các loại đạp gót luôn ạ</span>
                                    </div>
                                </span>
                            </li>
                            <li className="header__notify-item header__notify-item--viewed">
                                <span href="#" className="header__notify-link">
                                    <img src="https://cf.shopee.vn/file/e7e789acc9bd94486e32acc961b9227e" alt="" className="header__notify-img" />
                                    <div className="header__notify-info">
                                        <span className="header__notify-name">Giày bệt nơ chất liệu da lộn hàng chuẩn đẹp</span>
                                        <span className="header__notify-descriotion">Cách đặt nhiều sản phẩm/mẫu/màu gộp 1 đơn hàng: Bạn chọn các sản phẩm cần mua</span>
                                    </div>
                                </span>
                            </li>
                            <li className="header__notify-item header__notify-item--viewed">
                                <span href="#" className="header__notify-link">
                                    <img src="https://cf.shopee.vn/file/4b7af8582e7b284216da68e982785141" alt="" className="header__notify-img" />
                                    <div className="header__notify-info">
                                        <span className="header__notify-name">Zara Mickey hot hit lại sản xuất thêm rồi.</span>
                                        <span className="header__notify-descriotion">Vừa xinh vừa dễ phối đồ. Phiên bản đạp gót của Zara là ưng nhất trong các loại đạp gót luôn ạ</span>
                                    </div>
                                </span>
                            </li>
                            <li className="header__notify-item header__notify-item--viewed">
                                <span href="#" className="header__notify-link">
                                    <img src="https://cf.shopee.vn/file/e7e789acc9bd94486e32acc961b9227e" alt="" className="header__notify-img" />
                                    <div className="header__notify-info">
                                        <span className="header__notify-name">Giày bệt nơ chất liệu da lộn hàng chuẩn đẹp</span>
                                        <span className="header__notify-descriotion">Cách đặt nhiều sản phẩm/mẫu/màu gộp 1 đơn hàng: Bạn chọn các sản phẩm cần mua</span>
                                    </div>
                                </span>
                            </li>
                        </ul>
                        <footer className="header__notify-footer">
                            <span href="#" className="header__notify-footer-btn">
                                Xem tất cả
                            </span>
                        </footer>
                    </div>
                    {/* Cart layout */}
                    <div className="header__cart">
                        <div className="header__cart-wrap">
                            <p className="header__cart-icon"><FaShoppingCart /></p>
                            <span className="header__cart-notice">{Array.isArray(arrOrderProducts) && arrOrderProducts.length ? arrOrderProducts.length : 0}</span>
                            <div className="header__cart-list">
                                <img src="assets/img/no-cart.png" alt="" className="header__cart-no-cart-img" />
                                <span className="header__cart-list--no-cart-msg">Chưa có sản phẩm</span>
                                <h4 className="header__cart-heading">Sản phẩm đã thêm</h4>
                                <ul className="header__cart-list-item">
                                    {Array.isArray(arrOrderProducts) && arrOrderProducts.length ? arrOrderProducts.map((item, indexItem) => {
                                        var namePro = item.productOrderItem[0].product.name

                                        var price = item.productOrderItem[0].product.productPrice[0].price.taxIncludedAmount.value // item.productOrderItem[0].itemPrice[0].price.taxIncludedAmount.value
                                        var quantity = item.productOrderItem[0].quantity
                                       var namePro =item.quote[0].name
                                        // //  console.log(item.productOrderItem[0].itemPrice[0].price.taxIncludedAmount.value)
                                        // var price = item.productOrderItem[0].itemPrice[0].price.taxIncludedAmount.value
                                        // var quantity = item.productOrderItem[0].quantity
                                        //item.itemPrice[0].price.taxIncludedAmount.value
                                        return (
                                            <li className="header__cart-item" indexItem={indexItem}>
                                                <Link to={{
                                                    pathname: `/products/${item.id}`,
                                                    state: { dataOrder: [item] }
                                                }}>


                                                    <img src={fakeImg} alt="Bộ kem sáng da mềm mịn" className="header__cart-img" />
                                                </Link>
                                                <div className="header__cart-item-info">
                                                    <div className="header__cart-item-head">
                                                        <h5 className="header__cart-item-name">{namePro}</h5>
                                                        <div className="header__cart-item-price-wrap">
                                                            <span className="header__cart-item-price">{BEERAPP.digitalNumber(price)}đ</span>
                                                            <span className="header__cart-item-multiply">x</span>
                                                            <span className="header__cart-item-qnt">{quantity}</span>
                                                        </div>
                                                    </div>
                                                    <div className="product__content-count">
                                                        <div className="content-count--title">
                                                            <Link to={`/products/${item.id}`} onClick={() => { handleBuyNow(item.id, item) }}>
                                                                Số lượng
                                                            </Link>
                                                        </div>
                                                        <div className="content-count--control">
                                                            <div className="content-count--item">
                                                                <button className="content-count--button" onClick={() => { handleCount('-', item) }} >
                                                                    <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x={0} y={0} className="content-count-svg-icon"><polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5" /></svg>
                                                                </button>
                                                                <span className="pl-3 pr-3">  {quantity}</span>
                                                                <button className="content-count--button" onClick={() => { handleCount('+', item) }} >
                                                                    <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x={0} y={0} className="content-count-svg-icon"><polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5" /></svg>
                                                                </button>
                                                            </div>
                                                            <Link className="link-cart-item" to={{
                                                                pathname: `/products/${item.id}`,

                                                                state: { dataOrder: [item] }

                                                            }}>


                                                            </Link>


                                                        </div>
                                                    </div>
                                                    <div className="header__cart-item-body">
                                                        <span className="header__cart-item-description">
                                                            {item.description}
                                                        </span>
                                                        <span className="header__cart-item-del" onClick={() => { handleDeleteLocal(item) }}>
                                                            Xóa
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    }) : []}
                                </ul>
                                <div className="header__cart-view-cart">
                                    {/* <span href="#" className="header__cart-btn btn btn--primary">Xem giỏ hàng</span> */}
                                    {/* disabled={props.cartItem !== undefined && props.cartItem.length > 1 ? false : true} */}
                                    <button className="header__cart-btn btn btn--primary" onClick={() => {
                                        // const idArr = props.cartItem.length - 1;
                                        // const id = props.cartItem[idArr].id;
                                        // let resultListOrder = props.cartItem.map((item, index) => {
                                        //     return {
                                        //         "description": item.category,
                                        //         "name": item.category,
                                        //         "priceType": "one time",
                                        //         "price": {
                                        //             "taxRate": 16.0,
                                        //             "dutyFreeAmount": {
                                        //                 "unit": "VND",
                                        //                 "value": 1213333
                                        //             },
                                        //             "taxIncludedAmount": {
                                        //                 "unit": "VND",
                                        //                 "value": 1410000
                                        //             }
                                        //         },
                                        //         "state": "inProgress",//inProgress
                                        //     }
                                        // })

                                        // const sendData = {
                                        //     "id": id,
                                        //     "href": null,
                                        //     "price": 100000000000,
                                        //     "cancellationDate": null,
                                        //     "cancellationReason": null,
                                        //     "category": null,
                                        //     "completionDate": null,
                                        //     "description": null,
                                        //     "expectedCompletionDate": null,
                                        //     "externalId": null,
                                        //     "notificationContact": null,
                                        //     "orderDate": null, //ISO 8601 2021-07-07T02:40:09.541Z
                                        //     "priority": null,
                                        //     "requestedCompletionDate": null,
                                        //     "requestedStartDate": null,
                                        //     "agreement": null,
                                        //     "billingAccount": null,
                                        //     "channel": null,
                                        //     "note": [
                                        //         {
                                        //             "id": "333333333333333",
                                        //             "author": null,
                                        //             "date": null,
                                        //             "text": "http://www.tesst.com",
                                        //             "@baseType": null,
                                        //             "@schemaLocation": null,
                                        //             "@type": "Note"
                                        //         }
                                        //     ],
                                        //     // "orderTotalPrice": null,
                                        //     "orderTotalPrice": resultListOrder,
                                        //     "payment": null,
                                        //     "productOfferingQualification": null,
                                        //     "quote": [
                                        //         {
                                        //             "validFor": null,
                                        //             "state": null,
                                        //             "note": null,
                                        //             "lastStateChangedDate": null,
                                        //             "id": "00000007",
                                        //             "href": null,
                                        //             "name": "BIA ORDER-DEMO",
                                        //             "@baseType": null,
                                        //             "@schemaLocation": null,
                                        //             "@type": "QuoteRef",
                                        //             "@referredType": null
                                        //         }
                                        //     ],
                                        //     "state": "inProgress",//inProgress
                                        //     "@baseType": null,
                                        //     "@schemaLocation": null,
                                        //     "@type": "BeerOrder"
                                        // }

                                        // axios.post(`${BEERAPP.BASE_URL}`, sendData)
                                        //     .then(function (response) {
                                        //         //    console.log(response)

                                        //     })
                                        //     .catch(function (error) {
                                        //         console.log(error);
                                        //     });

                                        history.push({
                                            pathname: '/CartProduct',
                                            // state: { listOrder: props.cartItem, id: id }
                                        })
                                    }}>Xem tat ca</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <input type="checkbox" hidden className="nav__input" id="mobile-list-input" />
                <label htmlFor="mobile-list-input" className="nav__overlay" />
                {/* Mobile admin */}
                <nav className="header__mobile-nav">
                    <div className="header__mobile-nav--heading">
                        <img src="https://yt3.ggpht.com/yti/ANoDKi5pv5fU3lXkrswX8iF2gEL5yetOMwkB3vUMdHEHPg=s88-c-k-c0x00ffffff-no-rj-mo" alt="Hồ Hoàng Phú" className="header__mobile-nav--img" />
                        <div className="header__mobile-nav--text">
                            <h2 className="header__mobile-name">Mark Han</h2>
                            <span className="header__mobile-rule">
                                <i className="header__mobile-rule--icon fas fa-user-shield" />
                                Admin
                            </span>
                        </div>
                        <label htmlFor="mobile-list-input" className="header__mobile-close">
                            <i className="header__mobile-close-icon fas fa-times" />
                        </label>
                    </div>
                    <ul className="header__mobile-nav--list">
                        <li>
                            <span href="#" className="header__mobile-link">
                                <i className="fas fa-home" />
                                Trang chủ
                            </span>
                        </li>
                        <li>
                            <span href="#" className="header__mobile-link">
                                <i className="fas fa-id-card" />
                                Thông tin tài khoản
                            </span>
                        </li>
                        <li>
                            <span href="#" className="header__mobile-link">
                                <i className="fas fa-box" />
                                Quản lí đơn hàng
                            </span>
                        </li>
                        <li>
                            <span href="#" className="header__mobile-link">
                                <i className="fas fa-map-marker-alt" />
                                Địa chỉ của tôi
                            </span>
                        </li>
                        <li>
                            <span href="#" className="header__mobile-link">
                                <i className="fas fa-sign-out-alt" />
                                Đăng xuất
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;