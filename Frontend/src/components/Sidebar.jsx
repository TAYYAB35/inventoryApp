import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const items = [
    {
        label: 'Dashboard', id: '1', link: '/', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <path d="M17.25 3V4.33957M17.25 4.33957C17.9156 4.33957 18.5182 4.60934 18.9545 5.04551M17.25 4.33957C16.5844 4.33957 15.9818 4.60934 15.5455 5.04551M17.25 9.161V10.5M17.25 9.161C17.9158 9.161 18.5185 8.89111 18.9548 8.45477M17.25 9.161C16.5842 9.161 15.9815 8.89111 15.5452 8.45477M21 6.75L19.6607 6.75028M19.6607 6.75028C19.6607 7.41591 19.3909 8.01853 18.9548 8.45477M19.6607 6.75028C19.6607 6.08451 19.3908 5.48177 18.9545 5.04551M14.8393 6.75028L13.5 6.75M14.8393 6.75028C14.8393 6.08451 15.1092 5.48177 15.5455 5.04551M14.8393 6.75028C14.8393 7.41591 15.1091 8.01853 15.5452 8.45477M19.9017 4.09835L18.9545 5.04551M14.5984 9.40165L15.5452 8.45477M19.9017 9.40165L18.9548 8.45477M14.5984 4.09835L15.5455 5.04551" stroke="currentColor" strokeWidth="1.5" strokestrokelinecap="round" strokeLinejoin="round" />
            <path d="M13.6903 19.4567C13.5 18.9973 13.5 18.4149 13.5 17.25C13.5 16.0851 13.5 15.5027 13.6903 15.0433C13.944 14.4307 14.4307 13.944 15.0433 13.6903C15.5027 13.5 16.0851 13.5 17.25 13.5C18.4149 13.5 18.9973 13.5 19.4567 13.6903C20.0693 13.944 20.556 14.4307 20.8097 15.0433C21 15.5027 21 16.0851 21 17.25C21 18.4149 21 18.9973 20.8097 19.4567C20.556 20.0693 20.0693 20.556 19.4567 20.8097C18.9973 21 18.4149 21 17.25 21C16.0851 21 15.5027 21 15.0433 20.8097C14.4307 20.556 13.944 20.0693 13.6903 19.4567Z" stroke="currentColor" strokeWidth="1.5" strokestrokelinecap="round" strokeLinejoin="round" />
            <path d="M3.1903 19.4567C3 18.9973 3 18.4149 3 17.25C3 16.0851 3 15.5027 3.1903 15.0433C3.44404 14.4307 3.93072 13.944 4.54329 13.6903C5.00272 13.5 5.58515 13.5 6.75 13.5C7.91485 13.5 8.49728 13.5 8.95671 13.6903C9.56928 13.944 10.056 14.4307 10.3097 15.0433C10.5 15.5027 10.5 16.0851 10.5 17.25C10.5 18.4149 10.5 18.9973 10.3097 19.4567C10.056 20.0693 9.56928 20.556 8.95671 20.8097C8.49728 21 7.91485 21 6.75 21C5.58515 21 5.00272 21 4.54329 20.8097C3.93072 20.556 3.44404 20.0693 3.1903 19.4567Z" stroke="currentColor" strokeWidth="1.5" strokestrokelinecap="round" strokeLinejoin="round" />
            <path d="M3.1903 8.95671C3 8.49728 3 7.91485 3 6.75C3 5.58515 3 5.00272 3.1903 4.54329C3.44404 3.93072 3.93072 3.44404 4.54329 3.1903C5.00272 3 5.58515 3 6.75 3C7.91485 3 8.49728 3 8.95671 3.1903C9.56928 3.44404 10.056 3.93072 10.3097 4.54329C10.5 5.00272 10.5 5.58515 10.5 6.75C10.5 7.91485 10.5 8.49728 10.3097 8.95671C10.056 9.56928 9.56928 10.056 8.95671 10.3097C8.49728 10.5 7.91485 10.5 6.75 10.5C5.58515 10.5 5.00272 10.5 4.54329 10.3097C3.93072 10.056 3.44404 9.56928 3.1903 8.95671Z" stroke="currentColor" strokeWidth="1.5" strokestrokelinecap="round" strokeLinejoin="round" />
        </svg>
    },
    {
        label: 'Products', id: '2', link: '/products', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <path d="M4.5 10.2653V6H19.5V10.2653C19.5 13.4401 19.5 15.0275 18.5237 16.0137C17.5474 17 15.976 17 12.8333 17H11.1667C8.02397 17 6.45262 17 5.47631 16.0137C4.5 15.0275 4.5 13.4401 4.5 10.2653Z" stroke="currentColor" strokeWidth="1.5" strokestrokelinecap="round" strokeLinejoin="round" />
            <path d="M4.5 6L5.22115 4.46154C5.78045 3.26838 6.06009 2.6718 6.62692 2.3359C7.19375 2 7.92084 2 9.375 2H14.625C16.0792 2 16.8062 2 17.3731 2.3359C17.9399 2.6718 18.2196 3.26838 18.7788 4.46154L19.5 6" stroke="currentColor" strokeWidth="1.5" strokestrokelinecap="round" />
            <path d="M10.5 9H13.5" stroke="currentColor" strokeWidth="1.5" strokestrokelinecap="round" />
            <path d="M12 19.5V22M12 19.5L7 19.5M12 19.5H17M7 19.5H4.5C3.11929 19.5 2 20.6193 2 22M7 19.5V22M17 19.5H19.5C20.8807 19.5 22 20.6193 22 22M17 19.5V22" stroke="currentColor" strokeWidth="1.5" strokestrokelinecap="round" strokeLinejoin="round" />
        </svg>
    },
    {
        label: 'stock', id: '3', link: '/stock', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <path d="M8.64298 3.14559L6.93816 3.93362C4.31272 5.14719 3 5.75397 3 6.75C3 7.74603 4.31272 8.35281 6.93817 9.56638L8.64298 10.3544C10.2952 11.1181 11.1214 11.5 12 11.5C12.8786 11.5 13.7048 11.1181 15.357 10.3544L17.0618 9.56638C19.6873 8.35281 21 7.74603 21 6.75C21 5.75397 19.6873 5.14719 17.0618 3.93362L15.357 3.14559C13.7048 2.38186 12.8786 2 12 2C11.1214 2 10.2952 2.38186 8.64298 3.14559Z" stroke="currentColor" strokeWidth="1.5" strokestrokelinecap="round" strokeLinejoin="round" />
            <path d="M20.788 11.0972C20.9293 11.2959 21 11.5031 21 11.7309C21 12.7127 19.6873 13.3109 17.0618 14.5072L15.357 15.284C13.7048 16.0368 12.8786 16.4133 12 16.4133C11.1214 16.4133 10.2952 16.0368 8.64298 15.284L6.93817 14.5072C4.31272 13.3109 3 12.7127 3 11.7309C3 11.5031 3.07067 11.2959 3.212 11.0972" stroke="currentColor" strokeWidth="1.5" strokestrokelinecap="round" strokeLinejoin="round" />
            <path d="M20.3767 16.2661C20.7922 16.5971 21 16.927 21 17.3176C21 18.2995 19.6873 18.8976 17.0618 20.0939L15.357 20.8707C13.7048 21.6236 12.8786 22 12 22C11.1214 22 10.2952 21.6236 8.64298 20.8707L6.93817 20.0939C4.31272 18.8976 3 18.2995 3 17.3176C3 16.927 3.20778 16.5971 3.62334 16.2661" stroke="currentColor" strokeWidth="1.5" strokestrokelinecap="round" strokeLinejoin="round" />
        </svg>
    },
    {
        label: 'Orders', id: '4', link: '/orders', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <path d="M20 12.5C19.9751 12.4136 19.9499 12.326 19.9244 12.2373C18.8875 8.63723 17.4956 7.5 13.4291 7.5H9.65019C5.74529 7.5 4.23479 8.48796 3.1549 12.2373C2.18223 15.6144 1.6959 17.3029 2.20436 18.6124C2.51576 19.4143 3.06862 20.1097 3.79294 20.6104C5.17171 21.5636 8.63187 22.0381 12 21.9976" stroke="currentColor" strokeWidth="1.5" strokestrokelinecap="round" />
            <path d="M7 8V6.36364C7 3.95367 9.01472 2 11.5 2C13.9853 2 16 3.95367 16 6.36364V8" stroke="currentColor" strokeWidth="1.5" />
            <path d="M14 19C14 19 15 19 16 21C16 21 19.1765 16 22 15" stroke="currentColor" strokeWidth="1.5" strokestrokelinecap="round" strokeLinejoin="round" />
            <path d="M10.5 11H12.5" stroke="currentColor" strokeWidth="1.5" strokestrokelinecap="round" />
        </svg>
    },
    {
        label: 'Sales', id: '5', link: '/sales', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <path d="M6.98633 3.7002C9.78335 6.79476 14.3961 0.115903 17.1255 2.53974C18.696 3.93439 18.1995 7.01373 16.1607 9.01999" stroke="currentColor" strokeWidth="1.5" strokestrokelinecap="round" />
            <path d="M13.7897 13.9839C13.8075 13.6494 13.9014 13.0373 13.3927 12.5722M13.3927 12.5722C13.2353 12.4282 13.0201 12.2983 12.7272 12.1951C11.6788 11.8256 10.391 13.0623 11.302 14.1944C11.7917 14.803 12.1692 14.9901 12.1337 15.6812C12.1087 16.1673 11.6311 16.6752 11.0018 16.8686C10.4551 17.0367 9.85198 16.8142 9.47052 16.3879C9.00476 15.8675 9.0518 15.3769 9.04782 15.163M13.3927 12.5722L13.9668 11.998M9.51204 16.4528L8.9668 16.998" stroke="currentColor" strokeWidth="1.5" strokestrokelinecap="round" strokeLinejoin="round" />
            <path d="M18.2726 6.63305C19.1981 6.8108 19.4057 7.39525 19.682 9.01703C19.9309 10.4776 20.0007 12.2304 20.0007 12.9765C19.9753 13.2515 19.8625 13.5081 19.682 13.7174C17.7469 15.7455 13.9064 19.5753 11.9681 21.4778C11.2074 22.1569 10.0597 22.1716 9.25241 21.5482C7.59928 20.0612 6.01095 18.3803 4.45501 16.8625C3.82993 16.0574 3.84458 14.9129 4.52567 14.1544C6.57621 12.0272 10.2867 8.38602 12.3813 6.3745C12.5913 6.19455 12.8486 6.08199 13.1243 6.05672C13.5943 6.0566 14.4005 6.11977 15.1859 6.1653" stroke="currentColor" strokeWidth="1.5" strokestrokelinecap="round" />
        </svg>
    },
    {
        label: 'Expenses', id: '6', link: '/expense', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <path d="M4 18.6458V8.05426C4 5.20025 4 3.77325 4.87868 2.88663C5.75736 2 7.17157 2 10 2H14C16.8284 2 18.2426 2 19.1213 2.88663C20 3.77325 20 5.20025 20 8.05426V18.6458C20 20.1575 20 20.9133 19.538 21.2108C18.7831 21.6971 17.6161 20.6774 17.0291 20.3073C16.5441 20.0014 16.3017 19.8485 16.0325 19.8397C15.7417 19.8301 15.4949 19.9768 14.9709 20.3073L13.06 21.5124C12.5445 21.8374 12.2868 22 12 22C11.7132 22 11.4555 21.8374 10.94 21.5124L9.02913 20.3073C8.54415 20.0014 8.30166 19.8485 8.03253 19.8397C7.74172 19.8301 7.49493 19.9768 6.97087 20.3073C6.38395 20.6774 5.21687 21.6971 4.46195 21.2108C4 20.9133 4 20.1575 4 18.6458Z" stroke="currentColor" strokeWidth="1.5" strokestrokelinecap="round" strokeLinejoin="round" />
            <path d="M16 6L8 6" stroke="currentColor" strokeWidth="1.5" strokestrokelinecap="round" strokeLinejoin="round" />
            <path d="M10 10H8" stroke="currentColor" strokeWidth="1.5" strokestrokelinecap="round" strokeLinejoin="round" />
            <path d="M14.5 9.875C13.6716 9.875 13 10.4626 13 11.1875C13 11.9124 13.6716 12.5 14.5 12.5C15.3284 12.5 16 13.0876 16 13.8125C16 14.5374 15.3284 15.125 14.5 15.125M14.5 9.875C15.1531 9.875 15.7087 10.2402 15.9146 10.75M14.5 9.875V9M14.5 15.125C13.8469 15.125 13.2913 14.7598 13.0854 14.25M14.5 15.125V16" stroke="currentColor" strokeWidth="1.5" strokestrokelinecap="round" />
        </svg>
    },
    {
        label: 'Budget', id: '7', link: '/budget', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <path d="M2 14C2 10.4934 2 8.74003 2.90796 7.55992C3.07418 7.34388 3.25989 7.14579 3.46243 6.96849C4.56878 6 6.21252 6 9.5 6H14.5C17.7875 6 19.4312 6 20.5376 6.96849C20.7401 7.14579 20.9258 7.34388 21.092 7.55992C22 8.74003 22 10.4934 22 14C22 17.5066 22 19.26 21.092 20.4401C20.9258 20.6561 20.7401 20.8542 20.5376 21.0315C19.4312 22 17.7875 22 14.5 22H9.5C6.21252 22 4.56878 22 3.46243 21.0315C3.25989 20.8542 3.07418 20.6561 2.90796 20.4401C2 19.26 2 17.5066 2 14Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M16 6C16 4.11438 16 3.17157 15.4142 2.58579C14.8284 2 13.8856 2 12 2C10.1144 2 9.17157 2 8.58579 2.58579C8 3.17157 8 4.11438 8 6" stroke="currentColor" strokeWidth="1.5" strokestrokelinecap="round" strokeLinejoin="round" />
            <path d="M12 11C10.8954 11 10 11.6716 10 12.5C10 13.3284 10.8954 14 12 14C13.1046 14 14 14.6716 14 15.5C14 16.3284 13.1046 17 12 17M12 11C12.8708 11 13.6116 11.4174 13.8862 12M12 11V10M12 17C11.1292 17 10.3884 16.5826 10.1138 16M12 17V18" stroke="currentColor" strokeWidth="1.5" strokestrokelinecap="round" />
            <path d="M6 12H2" stroke="currentColor" strokeWidth="1.5" strokestrokelinecap="round" />
            <path d="M22 12L18 12" stroke="currentColor" strokeWidth="1.5" strokestrokelinecap="round" />
        </svg>
    },
    {
        label: 'Reports', id: '8', link: '/reports', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <path d="M4 15L4 19" stroke="currentColor" strokeWidth="1.5" strokestrokelinecap="round" strokeLinejoin="round" />
            <path d="M12 9L12 19" stroke="currentColor" strokeWidth="1.5" strokestrokelinecap="round" strokeLinejoin="round" />
            <path d="M22 22L2 22" stroke="currentColor" strokeWidth="1.5" strokestrokelinecap="round" strokeLinejoin="round" />
            <path d="M20 13L20 19" stroke="currentColor" strokeWidth="1.5" strokestrokelinecap="round" strokeLinejoin="round" />
            <path d="M5.60009 8.79993C5.23521 8.31419 4.6543 8 4 8C2.89543 8 2 8.89543 2 10C2 11.1046 2.89543 12 4 12C5.10457 12 6 11.1046 6 10C6 9.54973 5.8512 9.13421 5.60009 8.79993ZM5.60009 8.79993L10.3999 5.20007M10.3999 5.20007C10.7648 5.68581 11.3457 6 12 6C12.783 6 13.4609 5.55006 13.7892 4.89462M10.3999 5.20007C10.1488 4.86579 10 4.45027 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4C14 4.32158 13.9241 4.62543 13.7892 4.89462M13.7892 4.89462L18.2108 7.10538M18.2108 7.10538C18.0759 7.37457 18 7.67842 18 8C18 9.10457 18.8954 10 20 10C21.1046 10 22 9.10457 22 8C22 6.89543 21.1046 6 20 6C19.217 6 18.5391 6.44994 18.2108 7.10538Z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    },
    {
        label: 'Logout', id: '9', link: '/logout', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <path d="M15 17.625C14.9264 19.4769 13.3831 21.0494 11.3156 20.9988C10.8346 20.987 10.2401 20.8194 9.05112 20.484C6.18961 19.6768 3.70555 18.3203 3.10956 15.2815C3 14.723 3 14.0944 3 12.8373L3 11.1627C3 9.90561 3 9.27705 3.10956 8.71846C3.70555 5.67965 6.18961 4.32316 9.05112 3.51603C10.2401 3.18064 10.8346 3.01295 11.3156 3.00119C13.3831 2.95061 14.9264 4.52307 15 6.37501" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M21 12H10M21 12C21 11.2998 19.0057 9.99153 18.5 9.5M21 12C21 12.7002 19.0057 14.0085 18.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    },
];


const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigation = (link) => {
        navigate(link);
    }

    return (
        <>

            <div id="hs-application-sidebar" className="hs-overlay  [--auto-close:lg]
                hs-overlay-open:translate-x-0
                -translate-x-full transition-all duration-300 transform
                w-65 h-full
                hidden
                fixed inset-y-0 start-0 z-60
                bg-white border-e border-gray-200 
                xl:block xl:translate-x-0 xl:end-auto xl:bottom-0
                    " role="dialog" tabIndex="-1" aria-label="Sidebar">
                <div className="relative flex flex-col h-full max-h-full">
                    <div className="px-6 pt-4 flex items-center">
                        {/* <!-- Logo --> */}
                        <a className="flex-none rounded-md text-xl inline-flex gap-2 items-center font-semibold focus:outline-hidden focus:opacity-80" >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#000000" fill="none">
                                <path d="M22 18C22 19.4001 22 20.1002 21.7275 20.635C21.4878 21.1054 21.1054 21.4878 20.635 21.7275C20.1002 22 19.4001 22 18 22C16.5999 22 15.8998 22 15.365 21.7275C14.8946 21.4878 14.5122 21.1054 14.2725 20.635C14 20.1002 14 19.4001 14 18C14 16.5999 14 15.8998 14.2725 15.365C14.5122 14.8946 14.8946 14.5122 15.365 14.2725C15.8998 14 16.5999 14 18 14C19.4001 14 20.1002 14 20.635 14.2725C21.1054 14.5122 21.4878 14.8946 21.7275 15.365C22 15.8998 22 16.5999 22 18Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M22 10C22 11.4001 22 12.1002 21.7275 12.635C21.4878 13.1054 21.1054 13.4878 20.635 13.7275C20.1002 14 19.4001 14 18 14C16.5999 14 15.8998 14 15.365 13.7275C14.8946 13.4878 14.5122 13.1054 14.2725 12.635C14 12.1002 14 11.4001 14 10C14 8.59987 14 7.8998 14.2725 7.36502C14.5122 6.89462 14.8946 6.51217 15.365 6.27248C15.8998 6 16.5999 6 18 6C19.4001 6 20.1002 6 20.635 6.27248C21.1054 6.51217 21.4878 6.89462 21.7275 7.36502C22 7.8998 22 8.59987 22 10Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M14 18C14 19.4001 14 20.1002 13.7275 20.635C13.4878 21.1054 13.1054 21.4878 12.635 21.7275C12.1002 22 11.4001 22 10 22C8.59987 22 7.8998 22 7.36502 21.7275C6.89462 21.4878 6.51217 21.1054 6.27248 20.635C6 20.1002 6 19.4001 6 18C6 16.5999 6 15.8998 6.27248 15.365C6.51217 14.8946 6.89462 14.5122 7.36502 14.2725C7.8998 14 8.59987 14 10 14C11.4001 14 12.1002 14 12.635 14.2725C13.1054 14.5122 13.4878 14.8946 13.7275 15.365C14 15.8998 14 16.5999 14 18Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M10 6C10 7.40013 10 8.1002 9.72752 8.63497C9.48783 9.10538 9.10538 9.48783 8.63498 9.72752C8.1002 10 7.40013 10 6 10C4.59987 10 3.8998 10 3.36502 9.72751C2.89462 9.48783 2.51217 9.10538 2.27248 8.63497C2 8.10019 2 7.40013 2 6C2 4.59987 2 3.8998 2.27248 3.36502C2.51217 2.89462 2.89462 2.51217 3.36502 2.27248C3.8998 2 4.59987 2 6 2C7.40013 2 8.1002 2 8.63498 2.27248C9.10538 2.51217 9.48783 2.89462 9.72752 3.36502C10 3.8998 10 4.59987 10 6Z" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                            <span className="text-gray-800 font-bold text-3xl">Inventoro</span>
                        </a>
                        {/* <!-- End Logo --> */}

                        <div className="hidden xl:block ms-2">

                        </div>
                    </div>

                    {/* <!-- Content --> */}
                    <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 ">
                        <nav className="hs-accordion-group p-3 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                            <ul className="flex flex-col space-y-1 mt-5">

                                {
                                    items && items.map(item => (

                                        <li key={item.id}>
                                            <a key={item.id} onClick={() => handleNavigation(item.link)} className={`flex hover:bg-gray-50 cursor-pointer items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg focus:outline-hidden 
                                                ${location.pathname === item.link ? 'bg-gray-100 text-gray-800 hover:bg-gray-200 ' : ''}`} >
                                                {item.icon}
                                                {item.label}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>
                    {/* <!-- End Content --> */}
                </div>
            </div>

        </>
    )
}

export default Sidebar