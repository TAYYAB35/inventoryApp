import React, { useState } from 'react';
import Table from '../components/Table.jsx';
import { useGetProductsQuery } from '../slices/productApiSlice.jsx';

const ProductsListScreen = () => {

  const { data, isLoading, isError, refetch } = useGetProductsQuery()

  const products = data?.products || [] // Use optional chaining to handle undefined data
  return (
    <div>

      {/*  Header */}
      <div className="py-4 px-6 grid gap-3 xl:flex xl:justify-between xl:items-center border-b border-gray-200 bg-slate-50">
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
            <a className="py-2 px-3 inline-flex !cursor-pointer items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 " href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="#000000" fill="none">
                <path d="M18.25 8.99997C20.3077 9.07357 22.0549 10.6169 21.9987 12.6843C21.9856 13.1653 21.7993 13.7598 21.4266 14.9488C20.5298 17.8104 19.0226 20.2944 15.6462 20.8904C15.0255 21 14.3271 21 12.9303 21H11.0697C9.6729 21 8.9745 21 8.35384 20.8904C4.97739 20.2944 3.47018 17.8104 2.57336 14.9488C2.20072 13.7598 2.01439 13.1653 2.00132 12.6843C1.94512 10.6169 3.6923 9.07357 5.75001 8.99997" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M12 14L12 3M12 14C11.2998 14 9.99153 12.0057 9.5 11.5M12 14C12.7002 14 14.0085 12.0057 14.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Export
            </a>

            <a href='products/add' className="py-2 !cursor-pointer px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-teal-600 text-white hover:bg-teal-700 focus:outline-hidden focus:bg-teal-700 disabled:opacity-50 disabled:pointer-events-none">
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
              Add Product
            </a>
          </div>
        </div>
      </div>
      {/*  End Header */}

      <div className='p-6 overflow-x-auto' >
        {/*<!-- Component: Responsive Table --> */}
        <table className="w-full text-left border border-separate rounded border-slate-200" cellSpacing="0">
          <thead>
            <tr>
              <th scope="col" className="hidden h-12 px-6 text-base font-semibold border-l xl:table-cell first:border-l-0 stroke-slate-700 text-white bg-teal-500">#</th>
              <th scope="col" className="hidden h-12 px-6 text-base font-semibold border-l xl:table-cell first:border-l-0 stroke-slate-700 text-white bg-teal-500">Image</th>
              <th scope="col" className="hidden h-12 px-6 text-base font-semibold border-l xl:table-cell first:border-l-0 stroke-slate-700 text-white bg-teal-500">Name</th>
              <th scope="col" className="hidden h-12 px-6 text-base font-semibold border-l xl:table-cell first:border-l-0 stroke-slate-700 text-white bg-teal-500">Description</th>
              <th scope="col" className="hidden h-12 px-6 text-base font-semibold border-l xl:table-cell first:border-l-0 stroke-slate-700 text-white bg-teal-500">Price</th>
              <th scope="col" className="hidden h-12 px-6 text-base font-semibold border-l xl:table-cell first:border-l-0 stroke-slate-700 text-white bg-teal-500">SKU</th>
              <th scope="col" className="hidden h-12 px-6 text-base font-semibold border-l xl:table-cell first:border-l-0 stroke-slate-700 text-white bg-teal-500">Brand</th>
              <th scope="col" className="hidden h-12 px-6 text-base font-semibold border-l xl:table-cell first:border-l-0 stroke-slate-700 text-white bg-teal-500">Category</th>
              <th scope="col" className="hidden h-12 px-6 text-base font-semibold border-l xl:table-cell first:border-l-0 stroke-slate-700 text-white bg-teal-500">Link</th>
              <th scope="col" className="hidden h-12 px-6 text-base font-semibold border-l xl:table-cell first:border-l-0 stroke-slate-700 text-white bg-teal-500">Stock</th>
              <th scope="col" className="hidden h-12 px-6 text-base font-semibold border-l xl:table-cell first:border-l-0 stroke-slate-700 text-white bg-teal-500">minStock Limit</th>
              <th scope="col" className="hidden h-12 px-6 text-base font-semibold border-l xl:table-cell first:border-l-0 stroke-slate-700 text-white bg-teal-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index} className="block border-b xl:table-row last:border-b-0 border-slate-200 xl:border-none">
                <td data-th="Sr no" className="before:w-32 bg-white before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] xl:before:content-none flex items-center xl:table-cell min-h-12 h-fit py-2 px-6 text-base transition duration-300 xl:border-t xl:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{index + 1}</td>
                <td data-th="Image" className="before:w-32 bg-white before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] xl:before:content-none flex items-center xl:table-cell min-h-12 h-fit py-2 px-6 text-base min-w-32">{item.image && <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />}</td>
                <td data-th="Name" className="before:w-32 bg-white before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] xl:before:content-none flex items-center xl:table-cell min-h-12 h-fit py-2 px-6 text-base">{item.name}</td>
                <td data-th="Description" className="before:w-32 bg-white before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] xl:before:content-none flex items-center xl:table-cell min-h-12 h-fit py-2 px-6 text-base">{item.description}</td>
                <td data-th="Price" className="before:w-32 bg-white before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] xl:before:content-none flex items-center xl:table-cell min-h-12 h-fit py-2 px-6 text-base">Rs/{item.price}</td>
                <td data-th="SKU" className="before:w-32 bg-white before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] xl:before:content-none flex items-center xl:table-cell min-h-12 h-fit py-2 px-6 text-base">{item.sku}</td>
                <td data-th="Brand" className="before:w-32 bg-white before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] xl:before:content-none flex items-center xl:table-cell min-h-12 h-fit py-2 px-6 text-base">{item.brand}</td>
                <td data-th="Category" className="before:w-32 bg-white before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] xl:before:content-none flex items-center xl:table-cell min-h-12 h-fit py-2 px-6 text-base">{item.category}</td>
                <td data-th="Link" className="before:w-32 bg-white before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] xl:before:content-none flex items-center xl:table-cell min-h-12 h-fit py-2 px-6 text-base"><a href={item.link} target="_blank" rel="noopener noreferrer">View</a></td>
                <td data-th="Stock" className="before:w-32 bg-white before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] xl:before:content-none flex items-center xl:table-cell min-h-12 h-fit py-2 px-6 text-base">{item.stock}</td>
                <td data-th="minStock" className="before:w-32 bg-white before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] xl:before:content-none flex items-center xl:table-cell min-h-12 h-fit py-2 px-6 text-base"><span className='text-red-500 underline font-bold' >{item.minStock}</span></td>
                <td data-th="Actions" className="before:w-32 bg-white before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] xl:before:content-none flex items-center xl:table-cell min-h-12 h-fit py-2 px-6 text-base">
                  {/* Add your actions (edit, delete, etc.) here */}
                  <div className='flex gap-2' >

                    <button> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#4a90e2" fill="none">
                      <path d="M16.4249 4.60509L17.4149 3.6151C18.2351 2.79497 19.5648 2.79497 20.3849 3.6151C21.205 4.43524 21.205 5.76493 20.3849 6.58507L19.3949 7.57506M16.4249 4.60509L9.76558 11.2644C9.25807 11.772 8.89804 12.4078 8.72397 13.1041L8 16L10.8959 15.276C11.5922 15.102 12.228 14.7419 12.7356 14.2344L19.3949 7.57506M16.4249 4.60509L19.3949 7.57506" stroke="#4a90e2" stroke-width="2" stroke-linejoin="round"></path>
                      <path d="M18.9999 13.5C18.9999 16.7875 18.9999 18.4312 18.092 19.5376C17.9258 19.7401 17.7401 19.9258 17.5375 20.092C16.4312 21 14.7874 21 11.4999 21H11C7.22876 21 5.34316 21 4.17159 19.8284C3.00003 18.6569 3 16.7712 3 13V12.5C3 9.21252 3 7.56879 3.90794 6.46244C4.07417 6.2599 4.2599 6.07417 4.46244 5.90794C5.56879 5 7.21252 5 10.5 5" stroke="#4a90e2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg></button>
                    <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#d0021b" fill="none">
                      <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="#d0021b" stroke-width="1.5" stroke-linecap="round"></path>
                      <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="#d0021b" stroke-width="1.5" stroke-linecap="round"></path>
                      <path d="M9.5 16.5L9.5 10.5" stroke="#d0021b" stroke-width="1.5" stroke-linecap="round"></path>
                      <path d="M14.5 16.5L14.5 10.5" stroke="#d0021b" stroke-width="1.5" stroke-linecap="round"></path>
                    </svg></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/*<!-- End Responsive Table --> */}      </div>

    </div>
  )
}

export default ProductsListScreen