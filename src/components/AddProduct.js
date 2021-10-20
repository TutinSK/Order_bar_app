import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import { useRouteMatch } from "react-router-dom";
import { Alert, Button, Form } from 'reactstrap';
// import fakeimg from '../assets/img/fake.jpg';
import * as BEERAPP from './../utils/index';
import CustomIput from './CustomComponent/CustomIput'
import Https from '../service/Https';
import { FormGroup, Label, Input } from 'reactstrap';
import { Table } from 'reactstrap';


function ProductDetails(props) {
    const [infoProduct, setInfoProduct] = useState(
        {
            nameProduct: '',
            desProduct: '',
            imgUpload: '',
            idProduct: '',
            quantityProduct: 1,
            priceProduct: 1
        }
    )
    const [fakeApi, setFakeApi] = useState([])

    async function getBeerAll() {
        const response = await Https.get();
        setFakeApi(response.data)
    }
    useEffect(() => {
        getBeerAll()
    }, [])
    const [flagState, setFlagState] = useState(false)
    // const [imgUpload, setImgUpload] = useState('')
    // const sendData = {
    //     "id": null,
    //     "href": null,
    //     "nameProduct": "Bia Hà Nội tu client",
    //     "price": 100000000000,
    //     "cancellationDate": null,
    //     "cancellationReason": null,
    //     "category": 'haha',
    //     "completionDate": null,
    //     "description": 'haha',
    //     "expectedCompletionDate": null,
    //     "externalId": null,
    //     "notificationContact": null,
    //     "orderDate": null,
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
    //     "orderTotalPrice": null,
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
    //     "state": "acknowledged",
    //     "@baseType": null,
    //     "@schemaLocation": null,
    //     "@type": "BeerOrder"
    // }
    const addProducts = () => {

        addProductList();
    }
    async function addProductList() {
        const { idProduct, quantityProduct, desProduct, nameProduct, priceProduct } = infoProduct
        let resultPro = await Https.post(`${process.env.REACT_APP_API_URL}`, BEERAPP.createProduct(idProduct, quantityProduct, desProduct, nameProduct, priceProduct));
        console.log(resultPro)
        setFlagState(true)
        setInfoProduct({
            nameProduct: '',
            desProduct: '',
            quantityProduct: 1,
            imgUpload: '',
            idProduct: '',
            priceProduct: ''
        })

    }

    const handleUploadImg = (e) => {
        setInfoProduct({ ...infoProduct, [e.target.name]: e.target.files[0].name })
    }
    const handleUpdateActive =()=>{
        
    }
    const hanldleRadioActive =(e)=>{
    }
    const hanldleRadioDisable=(e)=>{
    }

    const renderData = fakeApi
        .filter(itemState => {
            return itemState.state === "acknowledged" && Array.isArray(itemState.productOrderItem) && itemState.productOrderItem.length && itemState.productOrderItem[0].product.status
        })
        .map((itemBeer, index) => {
            var price = itemBeer.productOrderItem[0].product.productPrice[0].price.taxIncludedAmount.value //itemBeer.productOrderItem[0].itemPrice[0].price.taxIncludedAmount.value
            var quantity = itemBeer.productOrderItem[0].quantity
            var namePro = itemBeer.quote[0].name // itemBeer.productOrderItem[0].product !== null ? itemBeer.productOrderItem[0].product.name : ""
            var status = itemBeer.productOrderItem[0].product.status
            return (
                //{{ backgroundImage: `url(${itemBeer.href !== null ? itemBeer.href : fakeimg})` }}
                <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{namePro}</td>
                    <td>{price}</td>
                    <td>{quantity}</td>
                    <td>{status}</td>

                    <td>
                        <FormGroup check>
                            <Label check>
                                <Input onChange={hanldleRadioActive} value="active" type="radio" name={namePro} />
                                Active
                            </Label>
                        </FormGroup>
                    </td>
                    <td>
                        <FormGroup check>
                            <Label check>
                                <Input onChange={hanldleRadioDisable} value="disable" type="radio" name={namePro} />
                                Disable
                            </Label>
                        </FormGroup>
                    </td>
                        <td colSpan={6}><Button outline color="primary" onClick={handleUpdateActive}>Cập nhật</Button></td>
                </tr>
            )
        });

    return (
        <div className="add-product-app">
            {flagState ? <Alert color="success">
                them thanh cong
            </Alert> : ''}
            <h1>them san pham</h1>


            <CustomIput setInfoProduct={setInfoProduct} infoProduct={infoProduct} forLabel="id sản phẩm" name="idProduct" type="text" valueInput="valueInput" placeholder="Nhập id sản phẩm" />
            <CustomIput setInfoProduct={setInfoProduct} infoProduct={infoProduct} forLabel="Tên sản phẩm" name="nameProduct" type="text" valueInput="valueInput" placeholder="Nhập tên sản phẩm" />
            <CustomIput setInfoProduct={setInfoProduct} infoProduct={infoProduct} forLabel="Số lượng sản phẩm" name="quantityProduct" type="number" valueInput="valueInput" placeholder="Nhập sl sản phẩm" />

            <CustomIput setInfoProduct={setInfoProduct} infoProduct={infoProduct} forLabel="Giá sản phẩm" name="priceProduct" type="number" valueInput="valueInput" placeholder="Nhập giá sản phẩm" />
            <CustomIput setInfoProduct={setInfoProduct} infoProduct={infoProduct} forLabel="Mô tả sản phẩm" name="desProduct" type="textarea" valueInput="valueInput" placeholder="Mô tả sản phẩm" />
            {/* <CustomIput forLabel="Hinh anh" name="imgUpload" setInfoProduct={setInfoProduct} infoProduct={infoProduct} type="file" /> */}
            <FormGroup>
                <Label for="exampleText">them hinh anh</Label>
                <Input name='imgUpload' type="file" onChange={handleUploadImg} />
            </FormGroup>
            <Form>
                <Button onClick={() => addProducts()}>Thêm sản phẩm</Button>
            </Form>

            <Table>
                <thead>
                    <tr>
                        <th>stt</th>
                        <th>Tên sp</th>
                        <th>Giá sản phẩm</th>
                        <th>Số lượng sản phẩm</th>
                        <th>Trạng thái</th>

                        <th colSpan={3  }>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {renderData}
                </tbody>
             
            </Table>

        </div>
    );
}

export default ProductDetails;