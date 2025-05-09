import React from 'react';
import { Link } from 'react-router-dom';

const ProductCards = ({ products }) => {
    return (
        <div className="flex flex-wrap gap-6 justify-center">
            {products.map((product, index) => (
                <div key={index} className="bg-white shadow group hover:shadow-lg rounded-lg  overflow-hidden w-72">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
                    />
                    <div>
                        <div className='p-4' >
                            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                            <p className="text-gray-800 font-bold">{product.price}</p>
                            <p className="text-gray-500 text-sm"><b>Stock:</b> {product.stock}</p>
                            <p className="text-red-500 text-sm"><b>Min Stock Limit:</b> {product.minStock}</p>
                            <p className="text-blue-500 text-sm line-clamp-2"><b>Live Link:</b> <br /> <a href={product.link} target="_blank" rel="noopener noreferrer" className='hover:underline cursor-pointer ' > {product.link} </a></p>
                        </div>

                        <div className="flex justify-between items-center border-t border-gray-200 px-4 py-3">
                            <Link
                                to={`/products/${product._id}`}
                                rel="noopener noreferrer"
                                className="text-blue-600 text-sm hover:underline"
                            >
                                View
                            </Link>
                            <div className="flex space-x-2">
                                <button className="text-blue-500 hover:text-blue-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#4a90e2" fill="none">
                                        <path d="M16.4249 4.60509L17.4149 3.6151C18.2351 2.79497 19.5648 2.79497 20.3849 3.6151C21.205 4.43524 21.205 5.76493 20.3849 6.58507L19.3949 7.57506M16.4249 4.60509L9.76558 11.2644C9.25807 11.772 8.89804 12.4078 8.72397 13.1041L8 16L10.8959 15.276C11.5922 15.102 12.228 14.7419 12.7356 14.2344L19.3949 7.57506M16.4249 4.60509L19.3949 7.57506" stroke="#4a90e2" strokeWidth="2" strokeLinejoin="round"></path>
                                        <path d="M18.9999 13.5C18.9999 16.7875 18.9999 18.4312 18.092 19.5376C17.9258 19.7401 17.7401 19.9258 17.5375 20.092C16.4312 21 14.7874 21 11.4999 21H11C7.22876 21 5.34316 21 4.17159 19.8284C3.00003 18.6569 3 16.7712 3 13V12.5C3 9.21252 3 7.56879 3.90794 6.46244C4.07417 6.2599 4.2599 6.07417 4.46244 5.90794C5.56879 5 7.21252 5 10.5 5" stroke="#4a90e2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </button>
                                <button className="text-red-500 hover:text-red-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#d0021b" fill="none">
                                        <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="#d0021b" strokeWidth="1.5" strokeLinecap="round"></path>
                                        <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="#d0021b" strokeWidth="1.5" strokeLinecap="round"></path>
                                        <path d="M9.5 16.5L9.5 10.5" stroke="#d0021b" strokeWidth="1.5" strokeLinecap="round"></path>
                                        <path d="M14.5 16.5L14.5 10.5" stroke="#d0021b" strokeWidth="1.5" strokeLinecap="round"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCards;
