import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name: 'product',
    initialState:{
        products: [],
        brands: [],
        product: null,
        sortQuery: ''
    },
    reducers:{
        setProducts(state, action) {
            state.products = action.payload
        },
        setBrands(state, action) {
            state.brands = action.payload
        },
        setProduct(state, action) {
            state.product = action.payload
        },
        setSortQuery(state, action) {
            state.product = action.payload
        },
    }
});

// export const productActions = ProductSlice.actions
export const { setProducts, setBrands, setProduct, setSortQuery } = ProductSlice.actions

export const productReducer = ProductSlice.reducer