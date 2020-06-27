import {productDetails, variantDB} from "../data/ProductData";
import * as Constant from "../actions/Constants";

const initialState = {
    productDetails,
    variantDetails: variantDB["ColorBlueRAM6GBStorage64GB"]
}

const rootReducer = (state = initialState, action) => {
    if (action.type === Constant.UPDATE_VARIANT) {
        return {...state, variantDetails: action.payload}
    }
    return state;
}

export default rootReducer;
