import React from 'react';
import { useGetProductDetailsQuery } from '../../slices/productApiSlice';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductView
    = () => {

        const { id: productId } = useParams(); // the id has datatype of string

        const { data: product, refetch, isLoading, error } = useGetProductDetailsQuery(productId);
        console.log(product);

        return (
            <div className="p-6">


                <Link to="/productlist" className="py-2 px-3 inline-flex !cursor-pointer items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 bg-gray-100 text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 " href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#4a4a4a" fill="none">
                        <path d="M3.99982 11.9998L19.9998 11.9998" stroke="#4a4a4a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M8.99963 17C8.99963 17 3.99968 13.3176 3.99966 12C3.99965 10.6824 8.99966 7 8.99966 7" stroke="#4a4a4a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    Back
                </Link>

                <h1 className="text-2xl font-bold my-4">Product Details</h1>

                {/* Product Image */}
                < div className="flex flex-col gap-6" >
                    <div className="">
                        <img
                            src={product?.image}
                            alt={product?.name}
                            className="w-full h-80 object-cover rounded-lg"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="md:w-1/2 space-y-4">
                        <h1 className="text-3xl font-bold">{product?.name}</h1>
                        <p className="text-gray-600">{product?.description}</p>
                        <p className="text-2xl font-semibold text-green-600">${product?.price}</p>

                        <div className="space-y-2 mt-4">
                            <p className="text-gray-700"><b>Brand:</b> {product?.brand}</p>
                            <p className="text-gray-700"><b>Category:</b> {product?.category}</p>
                            <p className="text-gray-700"><b>Stock:</b> {product?.stock}</p>
                            <p className="text-red-500"><b>Min Stock Limit:</b> {product?.minStock}</p>
                            <p className="text-blue-500">
                                <b>Live Link:</b> <br />
                                <a href={product?.link} target="_blank" rel="noopener noreferrer" className="underline">
                                    {product?.link}
                                </a>
                            </p>
                        </div>

                       
                    </div>
                </div >
            </div>
        );
    };

export default ProductView;
