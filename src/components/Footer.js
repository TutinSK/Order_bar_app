import React from 'react';


function Footer(props) {
    return (
        <footer className="footer">
            <div className="grid wide fix-wide-on-tablet footer-size">
                {/* Footer list */}
                <div className="row">
                    <div className="col p-2-4 t-4 m-6">
                        <h3 className="footer__heading">Chăm sóc khách hàng</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <span href="#" className="footer-item__link">Trung tâm trợ giúp</span>
                            </li>
                            <li className="footer-item">
                                <span href="#" className="footer-item__link">F8-Shop Mall</span>
                            </li>
                            <li className="footer-item">
                                <span href="#" className="footer-item__link">Hướng dẫn mua hàng</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col p-2-4 t-4 m-6">
                        <h3 className="footer__heading">Giới thiệu</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <span href="#" className="footer-item__link">Giới thiệu</span>
                            </li>
                            <li className="footer-item">
                                <span href="#" className="footer-item__link">Tuyển dụng</span>
                            </li>
                            <li className="footer-item">
                                <span href="#" className="footer-item__link">Điều khoản</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col p-2-4 t-4 m-6">
                        <h3 className="footer__heading">Danh mục</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <span href="#" className="footer-item__link">Trang phục nữ</span>
                            </li>
                            <li className="footer-item">
                                <span href="#" className="footer-item__link">Mĩ phẫm nam giới</span>
                            </li>
                            <li className="footer-item">
                                <span href="#" className="footer-item__link">Mĩ phẫm nữ giới</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col p-2-4 t-4 m-6">
                        <h3 className="footer__heading">Theo dõi</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <span href="#" className="footer-item__link">
                                    <i className="footer-item__icon fab fa-facebook" />
                                    Facebook
                                </span>
                            </li>
                            <li className="footer-item">
                                <span href="#" className="footer-item__link">
                                    <i className="footer-item__icon fab fa-instagram" />
                                    Instagram
                                </span>
                            </li>
                            <li className="footer-item">
                                <span href="#" className="footer-item__link">
                                    <i className="footer-item__icon fab fa-linkedin" />
                                    Linkedin
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="col p-2-4 t-8 m-12">
                        <h3 className="footer__heading">Vào cửa hàng trên ứng dụng</h3>
                        <div className="footer__download">
                            <img src="assets/img/qr_code.png" alt="Download QR" className="footer__download-qr" />
                            <div className="footer__download-apps">
                                <span href="#" className="footer__download-app-link">
                                    <img src="assets/img/app_store.png" alt="Google Play" className="footer__download-app-img" />
                                </span>
                                <span href="#" className="footer__download-app-link">
                                    <img src="assets/img/google_play.png" alt="App Store" className="footer__download-app-img" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer copyright */}
            <div className="footer__bottom footer__bottom--mobile">
                <div className="grid wide fix-wide-on-tablet">
                    <p className="footer__copyright-text">© 2021 - Bản quyền thuộc về Công ty MH</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;