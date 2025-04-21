import React, { useState } from 'react';
import Table from '../components/Table.jsx';
import { Button, Modal } from 'antd';
import InputComponent from './../components/Input.jsx'

const ProductsScreen = () => {

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');


  const [img, setImg] = useState('');
  const [name, setName] = useState('Dummy');
  const [price, setPrice] = useState('500');
  const [description, setDescription] = useState('Dummy Desc');
  const [qty, setQty] = useState(5);
  const [minStock, setMinStock] = useState(10);

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  const showModal = () => {
    setOpen(true);
  };

  return (
    <div>

      {/*  Header */}
      <div className="py-4 px-6 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 bg-slate-50">
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
            <a className="py-2 px-3 inline-flex !cursor-pointer items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 " href="#">
              View all
            </a>

            <a onClick={showModal} className="py-2 !cursor-pointer px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-teal-600 text-white hover:bg-teal-700 focus:outline-hidden focus:bg-teal-700 disabled:opacity-50 disabled:pointer-events-none">
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
              Add Product
            </a>
          </div>
        </div>
      </div>
      {/*  End Header */}

      <div className='p-6' >
        <Table />
      </div>

      <Modal
        title="Product Detail"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={{
          xs: '90%',
          sm: '80%',
          md: '70%',
          lg: '60%',
          xl: '50%',
          xxl: '40%',
        }}
      >
        <div className=' grid grid-cols-1 lg:grid-cols-2 gap-5 space-y-2' >

          <div className="relative my-6 col-span-2">
            <input
              id="id-dropzone02"
              name="file-upload"
              type="file"
              className="peer hidden"
              accept=".gif,.jpg,.png,.jpeg"
              multiple
            />
            <label
              for="id-dropzone02"
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

          <InputComponent label='Name' value={name} setValue={setName} placeholder='Enter name' />

          <InputComponent label='Price' value={price} setValue={setPrice} placeholder='Enter price' />

          <InputComponent label='Quantity' value={qty} setValue={setQty} placeholder='Enter quantity' />
          <InputComponent label='minStock' value={qty} setValue={setMinStock} placeholder='Enter min stock alert quantity' />

          <textarea name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} className='col-span-2 p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-teal-600 focus:bg-white caret-teal-600' rows={3} ></textarea>

        </div>

      </Modal>

    </div>
  )
}

export default ProductsScreen