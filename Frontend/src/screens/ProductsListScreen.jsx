import React, { useState } from 'react';
import { useGetProductsQuery } from '../slices/productApiSlice.jsx';
import { Link } from 'react-router-dom';
import ProductCards from '../components/ProductCards.jsx';


const ProductsListScreen = () => {

  const { data, isLoading, isError, refetch } = useGetProductsQuery()

  const products = data?.products || [] // Use optional chaining to handle undefined data
  return (
    <div>

      {/*  Header */}
      <div className="py-4 sticky top-[59px] z-40 px-6 grid gap-3 xl:flex xl:justify-between xl:items-center border-b border-gray-200 bg-slate-50">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 ">
            Products
          </h2>
          <p className="text-sm text-gray-600">
            Add products, edit and more.
          </p>
        </div>

        <div>
          <div className="inline-flex gap-x-2">
            <Link className="py-2 px-3 inline-flex !cursor-pointer items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 " href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="#000000" fill="none">
                <path d="M18.25 8.99997C20.3077 9.07357 22.0549 10.6169 21.9987 12.6843C21.9856 13.1653 21.7993 13.7598 21.4266 14.9488C20.5298 17.8104 19.0226 20.2944 15.6462 20.8904C15.0255 21 14.3271 21 12.9303 21H11.0697C9.6729 21 8.9745 21 8.35384 20.8904C4.97739 20.2944 3.47018 17.8104 2.57336 14.9488C2.20072 13.7598 2.01439 13.1653 2.00132 12.6843C1.94512 10.6169 3.6923 9.07357 5.75001 8.99997" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M12 14L12 3M12 14C11.2998 14 9.99153 12.0057 9.5 11.5M12 14C12.7002 14 14.0085 12.0057 14.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Export
            </Link>


            <Link to='/products/add' className="py-2 !cursor-pointer px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-teal-600 text-white hover:bg-teal-700 focus:outline-hidden focus:bg-teal-700 disabled:opacity-50 disabled:pointer-events-none">
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
              Add Product
            </Link>
          </div>
        </div>
      </div>
      {/*  End Header */}

      <div className="py-4 px-6 grid gap-3 xl:flex xl:justify-between xl:items-center border-b border-gray-200 bg-slate-50">

        <ProductCards products={products} />

      </div>

    </div>
  )
}

export default ProductsListScreen