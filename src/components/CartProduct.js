import React, { useEffect, useState, useRef } from 'react';
import { Table, Button, Alert } from 'reactstrap';
import * as BEERAPP from './../utils/index';
import axios from 'axios';
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import fake from '../assets/img/fake.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { handleBuyNow } from '../redux/actions';

function CartProduct(props) {

    function convertDate(valueData) {
        var date = new Date(valueData);
        return date.getDate() + '-' + (date.getMonth() + 1 <= 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`) + '-' + date.getFullYear();
    }
    let changeState = useSelector(state => state.cartItem.changeState);

    let modalSuccess = useSelector(state => state.cartItem.modalSuccess);
    
    
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const paypalRef = useRef();
    const handleInputChange =()=>{
    }
    //    const [tampArr, setTampArr] = useState()
    var arrOrderProducts = JSON.parse(localStorage.getItem('localArrOrderProducts'))
    //  let locationIdUser = location.state !== undefined ? location.state.id : location.state.listOrder.id
    // let locationId = location.state !== undefined ? location.state.listOrder.id : []
    const [fakeApi, setFakeApi] = useState([])
    //console.log(locationIdUser)
    async function getBeerById() {
        // try {
        //     const response = await axios.get(`${BEERAPP.BASE_URL}/${locationIdUser}`, {
        //         headers: {
        //             Accept: "*/*",
        //         }
        //     });
        //     //console.log(response)
        //     setFakeApi(response.data)
        //     setTampArr(response.data.orderTotalPrice)

        // } catch (error) {
        //     console.error(error);
        // }
    }
    const styleTable = {
        height: '50px',
        lineHeight: '50px'
    }
    useEffect(() => {
    }, [changeState])
    
    useEffect(() => {
        const sendData = {
            "id": null,
            "href": null,
            "price": 100000000000,
            "cancellationDate": null,
            "cancellationReason": null,
            "category": null,
            "completionDate": null,
            "description": null,
            "expectedCompletionDate": null,
            "externalId": null,
            "notificationContact": null,
            "orderDate": null, //ISO 8601 2021-07-07T02:40:09.541Z
            "priority": null,
            "requestedCompletionDate": null,
            "requestedStartDate": null,
            "agreement": null,
            "billingAccount": null,
            "channel": null,
            "note": [
                {
                    "id": "333333333333333",
                    "author": null,
                    "date": null,
                    "text": "http://www.tesst.com",
                    "@baseType": null,
                    "@schemaLocation": null,
                    "@type": "Note"
                }
            ],
            // "orderTotalPrice": null,
            "orderTotalPrice": null,
            "payment": null,
            "productOfferingQualification": null,
            "quote": [
                {
                    "validFor": null,
                    "state": null,
                    "note": null,
                    "lastStateChangedDate": null,
                    "id": "00000007",
                    "href": null,
                    "name": "BIA ORDER-DEMO",
                    "@baseType": null,
                    "@schemaLocation": null,
                    "@type": "QuoteRef",
                    "@referredType": null
                }
            ],
            "state": "completed",//inProgress
            "@baseType": null,
            "@schemaLocation": null,
            "@type": "BeerOrder"
        }
        if (paidFor) {
            axios.post(`${BEERAPP.BASE_URL}`, sendData)
                .then(function () {
                    //console.log(response)
                    // setFakeApi(response.data)

                })
                .catch(function () {
                    //console.log(error);
                });
        }

        getBeerById()
    }, [paidFor])
    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                description: 'bia',
                                amount: {
                                    currency_code: 'USD',
                                    value: '1',
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {

                    setPaidFor(true);
                    // //console.log(order);
                    console.log(error)
                },
                onError: err => {
                    setError(err);
                },
            })
            .render(paypalRef.current);
    }, []);
    const dispatch = useDispatch()
    const OrderAll = () => {
        console.log()
        const actionsBuyNow = handleBuyNow(arrOrderProducts)
        dispatch(actionsBuyNow)
       // alert('Cảm ơn bạn đã mua hàng! Đơn của bạn đang được duyệt')
    }

    let totalCount = 0;

    const orderNow = Date.now();
    var dateobj = new Date(orderNow);
    var convertDateISO = dateobj.toISOString();
    const renderOrder = Array.isArray(arrOrderProducts) && arrOrderProducts.length ? arrOrderProducts.map((item, indexItem) => {
      //  var price = item.productOrderItem[0].itemPrice[0].price.taxIncludedAmount.value
      var price = item.productOrderItem[0].product.productPrice[0].price.taxIncludedAmount.value
        var quantity = item.productOrderItem[0].quantity
       // var namePro = item.productOrderItem[0].product.name
       var namePro =item.quote[0].name
       
        totalCount += (price * quantity)
        return (
            <tbody className="text-center" key={indexItem} style={styleTable} >
                <tr>
                    <td>{indexItem +1}</td>

                    <td>
                        <input
                            name="isGoing"
                            type="checkbox"
                            onChange={handleInputChange} 
                        />

                    </td>
                    <td>{namePro}</td>
                    <td><img src={fake} width="50px" height="50px" alt={item.name} /></td>
                    <td>{quantity}</td>
                    <td>{fakeApi.state}</td>
                    <td>{convertDate(convertDateISO)}</td>
                    <td>{BEERAPP.digitalNumber(price)}</td>
                </tr>
            </tbody>
        )
    }) : []
    // const renderOrderPending = location.state !== undefined && location.state.listOrder.length >= 1 ? location.state.listOrder.map((item, index) => {
    //     return (
    //         <tbody className="text-center" key={index} style={styleTable} >
    //             <tr>
    //                 <td>{index}</td>
    //                 <td>{item.category !== null ? item.category : 'Bia de mo'}</td>
    //                 <td><img src={fake} width="50px" height="50px" alt={item.name} /></td>
    //                 <td>1</td>
    //                 <td>{item.state}</td>
    //                 <td>hom nay</td>

    //                 <td></td>

    //                 <td><Button onClick={orderItem} color="success">Mua</Button></td>

    //                 <td><Button onClick={reJectItem} color="danger">Huy</Button></td>
    //                 {/* <td>{BEERAPP.digitalNumber(item.price.taxIncludedAmount.value)}</td> */}
    //             </tr>
    //         </tbody>
    //     )
    // }) : []





    return (
        <>
            {paidFor ? <Alert color="success">
                Mua hàng thành công
            </Alert> : ''}
            <Table className="table table-hover">
                <thead class="text-center">
                    <tr>
                        <th colSpan={7}>danh sach mua hang</th>

                    </tr>
                </thead>
                <thead>
                    <tr class="text-center">

                        <th>stt</th>

                        <th>Chọn sản phẩm</th>
                        <th>Tên sp</th>

                        <th>Hình ảnh</th>
                        <th>Só lượng</th>
                        <th>trạng thái</th>
                        <th>Ngày order</th>
                        <th>Giá</th>
                    </tr>
                </thead>
                {renderOrder}
                <tr>
                    <th colSpan={6}>TONG GIA :</th>
                    <th className="text-center">{BEERAPP.digitalNumber(totalCount)} VND</th>
                </tr>
            </Table>
            <div className="d-flex justify-content-center"><Button onClick={OrderAll} color="success" >Mua tất cả</Button></div>
            <div className="d-flex justify-content-center" ref={paypalRef}>
            </div>

        </>
    );
}

export default CartProduct;