import Https from "../../service/Https";
import * as BEERAPP from "../../utils/index"
const initialState = {
    items: JSON.parse(localStorage.getItem('localArrOrderProducts')) || [],
    changeState: 1,
    modalSuccess: 1
}
var arrOrderProducts = JSON.parse(localStorage.getItem('localArrOrderProducts')) || [];
async function addProductList(getItemOrder) {
    let result = await Https.post(`${process.env.REACT_APP_API_URL}`, BEERAPP.orderListProductItem(getItemOrder));
    console.log(result)
    if (result.status == 200) {
        // localStorage.clear();

    }
}

const cartItem = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DATA_OREDER":
            {
                var itemBeer = action.payload
                itemBeer.productOrderItem[0].quantity = action.quantity
                if (Array.isArray(arrOrderProducts) && arrOrderProducts.length) {
                    let filterSameId = arrOrderProducts.find((item) => {
                        return item.id === itemBeer.id && item.productOrderItem[0].quantity++
                    })
                    if (filterSameId === undefined) {
                        arrOrderProducts.push(itemBeer);
                    }
                }
                else {
                    arrOrderProducts.push(itemBeer);
                }
                localStorage.setItem('localArrOrderProducts', JSON.stringify(arrOrderProducts));
                return {
                    ...state,
                    items: arrOrderProducts
                }
            }
        case "GET_ITEM":
            {
                state.changeState++
                var itemBeer = action.payload
                itemBeer.productOrderItem[0].quantity = action.quantity

                if (Array.isArray(arrOrderProducts) && arrOrderProducts.length) {
                    let filterSameId = arrOrderProducts.find((item) => {
                      
                        return item.id === itemBeer.id
                    })
                    if (filterSameId === undefined) {
                        arrOrderProducts.push(itemBeer);
                    }
                }
                else {
                    arrOrderProducts.push(itemBeer);
                }
                localStorage.setItem('localArrOrderProducts', JSON.stringify(arrOrderProducts));
                return {
                    ...state,
                    items: arrOrderProducts
                }

            }
        case "REMOVE_ITEM":
            {
                state.changeState++

                var cloneArr = [...state.items];
                var newArr = cloneArr.filter((item) => {
                    return item.id !== action.payload.id
                })
                localStorage.setItem('localArrOrderProducts', JSON.stringify(newArr));
                return {
                    ...state,
                    items: newArr,
                    changeState: state.changeState

                }
            }

        case "INCRE_PRO":
            {
                state.changeState++


                var cloneArr = [...state.items];

                if (Array.isArray(cloneArr) && cloneArr.length) {
                    let filterSameId = cloneArr.find((item) => {

                        return item.id === action.payload.id && item.productOrderItem[0].quantity++
                    })
                    localStorage.setItem('localArrOrderProducts', JSON.stringify(cloneArr));

                }

                return {
                    ...state,
                    items: cloneArr,
                    changeState: state.changeState

                }
            }

        case "DERCRE_PRO":
            {

                var cloneArr = [...state.items];
                state.changeState--


                if (Array.isArray(cloneArr) && cloneArr.length) {
                    let filterSameId = cloneArr.find((item) => {
                        if (item.productOrderItem[0].quantity > 1) {
                            return item.id === action.payload.id && item.productOrderItem[0].quantity--

                        }

                    })
                    localStorage.setItem('localArrOrderProducts', JSON.stringify(cloneArr));

                }
                return {
                    ...state,
                    changeState: state.changeState
                }
            }
        case "CHANGE_INPUT_PRO":
            {

                console.log(action.payload)
                console.log(action.quantity)
                state.changeState++
                var cloneArr = [...state.items];
                cloneArr.push(action.payload)
                console.log(cloneArr)
                if (Array.isArray(cloneArr) && cloneArr.length) {
                    var tampQuan = 1

                    let filterSameId = cloneArr.find((item) => {

                        item.productOrderItem[0].quantity = action.quantity

                        return item.id === action.payload.id

                    })
                    localStorage.setItem('localArrOrderProducts', JSON.stringify(cloneArr));


                }
                return {
                    ...state,
                    items: cloneArr,
                    changeState: state.changeState
                }
            }

        case "BUY_NOW":
            {

                var newArr = action.payload;

                let getItemOrder = newArr.map((item, indexItem) => {
                    //  console.log(item.productOrderItem[0].product)
                    var { id, name, href, quantity } = item.productOrderItem[0].product;
                    var { quantity } = item.productOrderItem[0]
                    var price = item.productOrderItem[0].product.productPrice[0].price.taxIncludedAmount.value
                    return {
                        "id": id,
                        "quantity": quantity,
                        "name": name,
                        "itemPrice": [
                            {
                                "price": {
                                    "percentage": null,
                                    "taxRate": null,
                                    "dutyFreeAmount": {
                                        "unit": "VND",
                                        "value": 350000.0
                                    },
                                    "taxIncludedAmount": {
                                        "unit": "VBD",
                                        "value": price
                                    },
                                    "@baseType": null,
                                    "@schemaLocation": null,
                                    "@type": "Price"
                                }
                            }
                        ]
                    }

                })
                addProductList(getItemOrder, state.changeState)
                //   state.changeState++
                localStorage.setItem('localArrOrderProducts', JSON.stringify([]));
                state.modalSuccess++
                return {
                    ...state,
                    items: newArr,
                    modalSuccess: state.modalSuccess
                    //changeState: state.changeState
                }
            }
        default:
            return state
    }

}
export default cartItem