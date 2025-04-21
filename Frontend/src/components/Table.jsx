import React from "react"

export default function TableResponsive() {
    return (
        <>
            {/*<!-- Component: Responsive Table --> */}
            <table className="w-full text-left border border-separate rounded border-slate-200" cellSpacing="0">
                <tbody>
                    <tr>
                        <th scope="col" className="hidden h-12 px-6 text-base font-semibold border-l md:table-cell first:border-l-0 stroke-slate-700 text-white bg-teal-500">Name</th>
                        <th scope="col" className="hidden h-12 px-6 text-base font-semibold border-l md:table-cell first:border-l-0 stroke-slate-700 text-white bg-teal-500">Title</th>
                        <th scope="col" className="hidden h-12 px-6 text-base font-semibold border-l md:table-cell first:border-l-0 stroke-slate-700 text-white bg-teal-500">Company</th>
                        <th scope="col" className="hidden h-12 px-6 text-base font-semibold border-l md:table-cell first:border-l-0 stroke-slate-700 text-white bg-teal-500">Role</th>
                        <th scope="col" className="hidden h-12 px-6 text-base font-semibold border-l md:table-cell first:border-l-0 stroke-slate-700 text-white bg-teal-500">Username</th>
                    </tr>
                    <tr className="block border-b md:table-row last:border-b-0 border-slate-200 md:border-none">
                        <td data-th="Name" className="before:w-24 bg-white before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] md:before:content-none flex items-center md:table-cell h-12 px-6 text-md transition duration-300 md:border-t md:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">Ayub Salas</td>
                        <td data-th="Title" className="before:w-24 bg-white before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] md:before:content-none flex items-center md:table-cell h-12 px-6 text-md transition duration-300 md:border-t md:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">Designer</td>
                        <td data-th="Company" className="before:w-24 bg-white before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] md:before:content-none flex items-center md:table-cell h-12 px-6 text-md transition duration-300 md:border-t md:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">Carroll Group</td>
                        <td data-th="Role" className="before:w-24 bg-white before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] md:before:content-none flex items-center md:table-cell h-12 px-6 text-md transition duration-300 md:border-t md:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">Member</td>
                        <td data-th="Username" className="before:w-24 bg-white before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] md:before:content-none flex items-center md:table-cell h-12 px-6 text-md transition duration-300 md:border-t md:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">salas_a</td>
                    </tr>
                 
                </tbody>
            </table>
            {/*<!-- End Responsive Table --> */}

        </>
    )
}