import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
    getSingleProduct: builder.query({
      query: (productId) => `products/${productId}`,
    }),
    getBrands: builder.query({
      query: () => "brands",
    }),
    getProductsByTag: builder.query({
      query: (searchQuery) => `products?q=${searchQuery}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery, useGetBrandsQuery, useGetProductsByTagQuery } = productsApi;