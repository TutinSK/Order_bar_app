
export const getDataLocal = (payload, quantity = 1) => {
    return {
        type: "GET_DATA_OREDER",
        payload:payload,
        quantity:quantity
    };
};

export const removeDataLocal = (payload) => {
    return {
        type: "REMOVE_ITEM",
        payload:payload,
    };
};


export const inCreatePro = (payload) => {
    return {
        type: "INCRE_PRO",
        payload:payload,
    };
};


export const deCrePro = (payload) => {
    return {
        type: "DERCRE_PRO",
        payload:payload,
    };
};


export const changeCrePro = (payload, quantity) => {
    return {
        type: "CHANGE_INPUT_PRO",
        payload:payload,
        quantity:quantity
    };
};


export const getItem = (payload, quantity = 1) => {
    return {
        type: "GET_ITEM",
        payload:payload,
        quantity:quantity
    };
};




export const handleBuyNow = (payload, quantity =1) => {
    return {
        type: "BUY_NOW",
        payload:payload,
        quantity:quantity
    };
};