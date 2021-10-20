import React, { useEffect, useState } from 'react';
import fakeimg from '../assets/img/fake.jpg';
import Https from '../service/Https';
import "../assets/css/Base.css";
import "../assets/css/Responsive.css";
import "../assets/css/Grid.css";
import "../assets/css/Main.css";

import {
    Link,
    useHistory,
    // Redirect,
    // useHistory,
    // useLocation
} from "react-router-dom";
import * as BEERAPP from './../utils/index';
import { useDispatch } from 'react-redux'


import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { getDataLocal, getItem } from '../redux/actions';

//

// ACKNOWLEDGED("acknowledged"),

//   REJECTED("rejected"),

//   PENDING("pending"),

//   HELD("held"),

//   INPROGRESS("inProgress"),

//   ARCHIVED("archived"),

//   CANCELLED("cancelled"),

//   COMPLETED("completed"),

//   DELAYED("delayed"),

//   DELETED("deleted"),

// INPROCESS("inProcess"),

// REVOKED("revoked"),

// SCHEDULED("scheduled)"
function Products(props) {

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const [show, setShow] = useState(false)

    const [fakeApi, setFakeApi] = useState([])
    const [isLoading, setIsloading] = useState(true)
    const [arrItemOrder, setArrItemOrder] = useState([])
    let history = useHistory()
    async function getBeerById() {
        const response = await Https.get();
        setIsloading(false)
        setFakeApi(response.data)
    }
    useEffect(() => {
        getBeerById()
    }, [])
    var arrOrderProducts = []


    // if (typeof window !== "undefined") {

    //   }
    const dispatch = useDispatch()


    const handleOrderBeer = (indexBeer, itemBeer) => {

        const actions = getDataLocal(itemBeer, 1)
        dispatch(actions)

        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 2000);
        // dataArr.push(itemBeer)
        // setArrItemOrder([...arrItemOrder, itemBeer])

    }
    history.push({
        pathname: `/`,
        state: { dataOrder: arrItemOrder }
    })
    const handleBuyNow = (indexBeer, itemBeer) => {

        // const actions = getItem(itemBeer)
        // dispatch(actions)

        history.push({
            pathname: `/products/${indexBeer}`,
            state: { dataOrder: [itemBeer] }
        })
    }
    const handleToCartPro = () => {

    }
    //  console.log(arrItemOrder)
    const renderData = fakeApi
        .filter(itemState => {
            return itemState.state === "acknowledged" && Array.isArray(itemState.productOrderItem) && itemState.productOrderItem.length && itemState.productOrderItem[0].product.status
        })
        .map((itemBeer, index) => {
            var price = itemBeer.productOrderItem[0].product.productPrice[0].price.taxIncludedAmount.value //itemBeer.productOrderItem[0].itemPrice[0].price.taxIncludedAmount.value
            var quantity = itemBeer.productOrderItem[0].quantity
            var namePro =itemBeer.quote[0].name // itemBeer.productOrderItem[0].product !== null ? itemBeer.productOrderItem[0].product.name : ""
            return (
                //{{ backgroundImage: `url(${itemBeer.href !== null ? itemBeer.href : fakeimg})` }}
                <div className="col p-2-4 t-4 m-6" key={index}>

                    <div className="home-product-item" >
                        <Link
                            to={{
                                pathname: `/products/${itemBeer.id}`,
                                state: { dataOrder: [itemBeer] }
                            }}

                        >
                            <div className="home-product-item__img" style={{ backgroundImage: `url(${itemBeer.href !== null ? itemBeer.href : fakeimg})` }} />
                            <h4 className="home-product-item__name">
                               
                                {namePro}
                            </h4>
                            <div className="home-product-item__price">
                                <span className="home-product-item__price-old">15,200,000đ</span>
                                <span className="home-product-item__price-current"> {BEERAPP.digitalNumber(price)}đ</span>
                            </div>
                        </Link>

                        <div className="home-product-item__price-cart1">
                            <div className="product__content-cart1 d-flex justify-content-between">
                                <button className="btn-cart1 btn-cart1-relative" onClick={() => { handleOrderBeer(itemBeer.id, itemBeer) }}>
                                    <i className="content-cart-icon fas fa-cart-plus" />
                                    Thêm vào giỏ hàng
                                </button>
                                <button className="btn-cart1" onClick={() => { handleBuyNow(itemBeer.id, itemBeer) }}>Mua ngay</button>
                            </div>
                        </div>
                        <Link to={{
                            pathname: `/products/${itemBeer.id}`,
                            state: { dataOrder: [itemBeer] }


                        }}>

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
                        </Link>

                        <div className="home-product-item__favorite">
                            <i className="fas fa-check" />
                            <span>Yêu thích</span>
                        </div>
                        <div className="home-product-item__sale-off">
                            {/* <span className="home-product-item__sale-off-percent">{BEERAPP.randomKm()}%</span> */}
                            <span className="home-product-item__sale-off-label">GIẢM</span>
                        </div>
                    </div>
                </div>


            )
        });

    return (

        // <div>
        //     <div className="home-product">
        //         <div className="row sm-gutter">

        //             {/* {isLoading ?
        //                 <>
        //                     <div className="spinner-border text-primary" role="status">
        //                         <span className="sr-only">Loading...</span>
        //                     </div>
        //                 </> : renderData} */}

        //         </div>
        //     </div>
        // </div>
        <div className="app__container">
            <div className="grid wide fix-wide-on-tablet">
                <div className="row app__content sm-gutter">
                    {/* List */}
                    <div className="col p-2 t-3 m-0">
                        <nav className="category">
                            <h3 className="category__heading">Danh mục</h3>
                            <ul className="category-list">
                            <li className="category-item category-item__link--more">
                                    <span href="#" className="category-item__link">
                                        Bia Nội Địa
                                        <i className="category-item__link-icon fas fa-angle-right" />
                                    </span>
                                    <ul className="category-item__link--list">
                                        <li className="category-item__link--item">
                                            <span href="#" className="category-item__link">Bia Hà Nội</span>
                                        </li>
                                        <li className="category-item__link--item">
                                            <span href="#" className="category-item__link">Bia 333</span>
                                        </li>
                                        <li className="category-item__link--item">
                                            <span href="#" className="category-item__link">Bia Corona</span>
                                        </li>
                                    </ul>
                                </li>
                                <li className="category-item category-item__link--more">
                                    <span href="#" className="category-item__link">
                                        Bia Ngoại Nhập
                                        <i className="category-item__link-icon fas fa-angle-right" />
                                    </span>
                                    <ul className="category-item__link--list">
                                        <li className="category-item__link--item">
                                            <span href="#" className="category-item__link">Bia Heniken</span>
                                        </li>
                                        <li className="category-item__link--item">
                                            <span href="#" className="category-item__link">Bia Budweiser</span>
                                        </li>
                                        <li className="category-item__link--item">
                                            <span href="#" className="category-item__link">Bia Corona</span>
                                        </li>
                                    </ul>
                                </li>
                                <li className="category-item category-item__link--more">
                                    <span href="#" className="category-item__link">
                                        Bia Nga
                                        <i className="category-item__link-icon fas fa-angle-right" />
                                    </span>
                                    <ul className="category-item__link--list">
                                        <li className="category-item__link--item">
                                            <span href="#" className="category-item__link">Bia Baltika</span>
                                        </li>
                                        <li className="category-item__link--item">
                                            <span href="#" className="category-item__link">Bia Leffe Blonde</span>
                                        </li>
                                    </ul>
                                </li>
                                <li className="category-item category-item__link--more">
                                    <span href="#" className="category-item__link">
                                        Bia Đức
                                        <i className="category-item__link-icon fas fa-angle-right" />
                                    </span>
                                    <ul className="category-item__link--list">
                                        <li className="category-item__link--item">
                                            <span href="#" className="category-item__link">Bia Beck's</span>
                                        </li>
                                        <li className="category-item__link--item">
                                            <span href="#" className="category-item__link">Beer Dark Wheat</span>
                                        </li>
                                        <li className="category-item__link--item">
                                            <span href="#" className="category-item__link">Bia Hoegaarden</span>
                                        </li>
                                    </ul>
                                </li>
                                <li className="category-item category-item__link--more">
                                    <span href="#" className="category-item__link">
                                        Bia Mỹ
                                        <i className="category-item__link-icon fas fa-angle-right" />
                                    </span>
                                    <ul className="category-item__link--list">
                                        <li className="category-item__link--item">
                                            <span href="#" className="category-item__link">Bia Budweiser</span>
                                        </li>
                                        <li className="category-item__link--item">
                                            <span href="#" className="category-item__link">Bia La Trappe Witte Trappist</span>
                                        </li>
                                    </ul>
                                </li>
                                <li className="category-item">
                                    <span href="#" className="category-item__link">Bia Hà Lan</span>
                                </li>
                                <li className="category-item">
                                    <span href="#" className="category-item__link">Bia Pilsner Feldschlobchen</span>
                                </li>
                                <li className="category-item">
                                    <span href="#" className="category-item__link">Bia 0.5 Original</span>
                                </li>
                                <li className="category-item">
                                    <span href="#" className="category-item__link">Bia Krynica Strong</span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col p-10 t-9 m-12">
                        {/* Carousel here */}

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

                            {show ? <div className="rounded pos-right">
                                <Toast>
                                    <ToastHeader>
                                        Them thanh cong
                                    </ToastHeader>
                                    <ToastBody>
                                        Ban vua them 1 san pham vao gio hang
                                    </ToastBody>
                                </Toast>
                            </div>
                                : ''
                            }
                            <div className="row sm-gutter">

                                {!isLoading ? renderData :
                                    <div className="spinner-border text-primary " role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                }
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
    );
}

export default Products;
//vsii.interview@vsi-international.com
//"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"