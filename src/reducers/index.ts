import {productDetails, variantDB} from "../data/ProductData";
import * as Constant from "../actions/Constants";

const initialState = {
    productDetails,
    variantDetails: variantDB["ColorBlueRAM6GBStorage64GB"],
    cartCount: 0
}

const rootReducer = (state = initialState, action) => {
    if (action.type === Constant.UPDATE_VARIANT) {
        return {...state, variantDetails: action.payload}
    }

    if (action.type === Constant.ADD_CART) {
        return {...state, cartCount: state.cartCount + 1}
    }

    return state;
}

export default rootReducer;
