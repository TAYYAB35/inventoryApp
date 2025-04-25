import React, { useEffect, useState } from 'react'
import InputComponent from '../components/Input'
import { useCreateProductMutation, useUploadProductImageMutation } from '../slices/productApiSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const AddProductScreen = () => {

    const [uploadImage, { isLoading: loadingUpload }] = useUploadProductImageMutation();

    const [image, setImage] = useState('');
    const [imagePreview, setImagePreview] = useState(null);

    const navigate = useNavigate();

    //controls
    const [name, setName] = useState('Dummy');
    const [link, setLink] = useState('');
    const [brand, setBrand] = useState('Confeet');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('500');
    const [description, setDescription] = useState('Dummy Desc');
    const [stock, setStock] = useState(50);
    const [minStock, setMinStock] = useState(10);


    const [createProduct, { isLoading: loadingUpdate }] = useCreateProductMutation();

    const submitHandler = async (e) => {
        e.preventDefault();
    
        // Basic check to ensure required fields are present before submitting
        if (!name || !image || !category) {
            toast.error('Please fill out all required fields: name, image, and category');
            return;
        }
    
        const newProduct = {
            name,
            image,
            description,
            brand,
            category,
            link,
            price,
            stock,
            minStock,
        };
    
        try {
            const res = await createProduct(newProduct);
    
            if (res.error) {
                toast.error(res.error.data.message);
            } else {
                toast.success('Product created successfully');
                navigate('/productlist');
            }
        } catch (err) {
            toast.error('Something went wrong while creating the product');
            console.error(err);
        }
    };
    

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);

        setImage(file);
        setImagePreview(URL.createObjectURL(file));

        try {
            const res = await uploadImage(formData).unwrap();
            toast.success(res.message);
            setImage(res.image);
        } catch (error) {
            toast.error('Error while uploading image' || res.error.data.message || error.error);
        }
    }

    return (
        <>
            {/*  Header */}
            <div className="py-4 px-6 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 bg-slate-50">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 ">
                        Add Products
                    </h2>
                </div>

            </div>
            {/*  End Header */}

            <form onSubmit={submitHandler} className='grid grid-cols-1 lg:grid-cols-2 gap-5 space-y-2 p-10' >

                {!imagePreview &&
                    <div className="relative my-6 col-span-2 bg-white ">
                        <input
                            id="id-dropzone02"
                            name="file-upload"
                            type="file"
                            className="peer hidden"
                            accept=".gif,.jpg,.png,.jpeg"
                            onChange={uploadFileHandler}
                            onDrag={uploadFileHandler}
                            onDragEnter={uploadFileHandler}
                            onDragOver={uploadFileHandler}
                            onDragLeave={uploadFileHandler}
                        />
                        <label
                            htmlFor="id-dropzone02"
                            className="flex cursor-pointer flex-col items-center gap-6 rounded border border-dashed border-slate-300 px-6 py-10 text-center"
                        >
                            <span className="inline-flex h-12 items-center justify-center self-center rounded bg-slate-100/70 px-3 text-slate-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-label="File input icon"
                                    role="graphics-symbol"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                    />
                                </svg>
                            </span>
                            <p className="flex flex-col items-center justify-center gap-1 text-sm">
                                <span className="text-stone-500 hover:text-stone-500">
                                    Upload media
                                    <span className="text-slate-500"> or drag and drop </span>
                                </span>
                                <span className="text-slate-600"> PNG, JPG or GIF up to 10MB </span>
                            </p>
                        </label>
                    </div>
                }

                {imagePreview && (
                    <div className="relative col-span-2">
                        <img src={imagePreview} alt="Uploaded preview" className="w-full h-[200px] rounded-md object-cover" />
                    </div>
                )}

                <InputComponent label='Name' value={name} setValue={setName} placeholder='Enter name' />

                <InputComponent label='Price' value={price} setValue={setPrice} placeholder='Enter price' />

                <InputComponent label='Stock' value={stock} type='number' setValue={setStock} placeholder='Enter quantity' />
                <InputComponent label='Min Stock' value={minStock} setValue={setMinStock} placeholder='Enter min stock alert quantity' />
                <InputComponent label='Link' value={link} setValue={setLink} placeholder='Enter product live link' />
                <InputComponent label='Brand' value={brand} setValue={setBrand} placeholder='Enter brand name' />
                <InputComponent label='Category' value={category} setValue={setCategory} placeholder='Enter product live link' />

                <textarea name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} className='col-span-2 p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-teal-600 focus:bg-white caret-teal-600' rows={3} ></textarea>

                <button
                    type="submit"
                    className="inline-flex col-span-2 items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                >
                    ADD
                </button>

            </form>
        </>
    )
}



export default AddProductScreen