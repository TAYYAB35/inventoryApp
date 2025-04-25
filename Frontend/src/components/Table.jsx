import React from "react"

export default function TableResponsive({ data }) {
    return (
        <>
            {/*<!-- Component: Responsive Table --> */}
            <table className="w-full text-left border border-separate rounded border-slate-200" cellSpacing="0">
                <thead>
                    <tr>
                        <th scope="col" className="hidden h-12 px-6 text-base font-semibold border-l md:table-cell first:border-l-0 stroke-slate-700 text-white bg-teal-500">Sr no</th>
                        <th scope="col" className="hidden h-12 px-6 text-base font-semibold border-l md:table-cell first:border-l-0 stroke-slate-700 text-white bg-teal-500">Image</th>
                        <th scope="col" className="hidden h-12 px-6 text-base font-semibold border-l md:table-cell first:border-l-0 stroke-slate-700 text-white bg-teal-500">Name</th>
                        <th scope="col" className="hidden h-12 px-6 text-base font-semibold border-l md:table-cell first:border-l-0 stroke-slate-700 text-white bg-teal-500">Description</th>
                        <th scope="col" className="hidden h-12 px-6 text-base font-semibold border-l md:table-cell first:border-l-0 stroke-slate-700 text-white bg-teal-500">Price</th>
                        <th scope="col" className="hidden h-12 px-6 text-base font-semibold border-l md:table-cell first:border-l-0 stroke-slate-700 text-white bg-teal-500">SKU</th>
                        <th scope="col" className="hidden h-12 px-6 text-base font-semibold border-l md:table-cell first:border-l-0 stroke-slate-700 text-white bg-teal-500">Brand</th>
                        <th scope="col" className="hidden h-12 px-6 text-base font-semibold border-l md:table-cell first:border-l-0 stroke-slate-700 text-white bg-teal-500">Category</th>
                        <th scope="col" className="hidden h-12 px-6 text-base font-semibold border-l md:table-cell first:border-l-0 stroke-slate-700 text-white bg-teal-500">Link</th>
                        <th scope="col" className="hidden h-12 px-6 text-base font-semibold border-l md:table-cell first:border-l-0 stroke-slate-700 text-white bg-teal-500">Stock</th>
                        <th scope="col" className="hidden h-12 px-6 text-base font-semibold border-l md:table-cell first:border-l-0 stroke-slate-700 text-white bg-teal-500">minStock</th>
                        <th scope="col" className="hidden h-12 px-6 text-base font-semibold border-l md:table-cell first:border-l-0 stroke-slate-700 text-white bg-teal-500">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="block border-b md:table-row last:border-b-0 border-slate-200 md:border-none">
                            <td data-th="Sr no" className="before:w-24 bg-white before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] md:before:content-none flex items-center md:table-cell h-12 px-6 text-md transition duration-300 md:border-t md:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{index + 1}</td>
                            <td data-th="Image" className="before:w-24 bg-white before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] md:before:content-none flex items-center md:table-cell h-12 px-6 text-md">{item.image && <img src={item.image} alt={item.name} className="w-10 h-10 object-cover" />}</td>
                            <td data-th="Name" className="before:w-24 bg-white before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] md:before:content-none flex items-center md:table-cell h-12 px-6 text-md">{item.name}</td>
                            <td data-th="Description" className="before:w-24 bg-white before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] md:before:content-none flex items-center md:table-cell h-12 px-6 text-md">{item.description}</td>
                            <td data-th="Price" className="before:w-24 bg-white before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] md:before:content-none flex items-center md:table-cell h-12 px-6 text-md">{item.price}</td>
                            <td data-th="SKU" className="before:w-24 bg-white before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] md:before:content-none flex items-center md:table-cell h-12 px-6 text-md">{item.sku}</td>
                            <td data-th="Brand" className="before:w-24 bg-white before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] md:before:content-none flex items-center md:table-cell h-12 px-6 text-md">{item.brand}</td>
                            <td data-th="Category" className="before:w-24 bg-white before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] md:before:content-none flex items-center md:table-cell h-12 px-6 text-md">{item.category}</td>
                            <td data-th="Link" className="before:w-24 bg-white before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] md:before:content-none flex items-center md:table-cell h-12 px-6 text-md"><a href={item.link} target="_blank" rel="noopener noreferrer">View</a></td>
                            <td data-th="Stock" className="before:w-24 bg-white before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] md:before:content-none flex items-center md:table-cell h-12 px-6 text-md">{item.stock}</td>
                            <td data-th="minStock" className="before:w-24 bg-white before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] md:before:content-none flex items-center md:table-cell h-12 px-6 text-md">{item.minStock}</td>
                            <td data-th="Actions" className="before:w-24 bg-white before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] md:before:content-none flex items-center md:table-cell h-12 px-6 text-md">
                                {/* Add your actions (edit, delete, etc.) here */}
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/*<!-- End Responsive Table --> */}
        </>
    )
}
