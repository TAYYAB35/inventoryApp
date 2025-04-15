import { Menu, Layout } from 'antd';
import { useState } from 'react';

const Sidebar = () => {
    const { Sider } = Layout;
    const [collapsed, setCollapsed] = useState(false);

    const items = [
        { key: '1', icon: '', label: 'Dashboard' },
        { key: '2', icon: '', label: 'Products' },
        { key: '3', icon: '', label: 'Stock' },
        { key: '4', icon: '', label: 'Purchase Orders' },
        { key: '5', icon: '', label: 'Sales' },
        { key: '6', icon: '', label: 'Expenses' },
        { key: '7', icon: '', label: 'Budgets' },
        { key: '8', icon: '', label: 'Reports' },
        { key: '9', icon: '', label: 'Settings' },
        { key: '10', icon: '', label: 'Logout' },
    ];

    return (
        <>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} width={280} collapsedWidth={100} >
                <div className="logo-vertical flex h-16 items-center justify-start gap-3 px-6" >

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#ffffff" fill="none">
                        <path d="M11 6L21 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M11 12L21 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M11 18L21 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M3 7.39286C3 7.39286 4 8.04466 4.5 9C4.5 9 6 5.25 8 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3 18.3929C3 18.3929 4 19.0447 4.5 20C4.5 20 6 16.25 8 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    {!collapsed &&
                        <span className="text-white font-bold text-2xl">Inventory</span>
                    }
                </div>
                <Menu
                    theme="dark"
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    items={items}
                    className="!px-5 [&_.ant-menu-item]:rounded-md [&_.ant-menu-item]:my-1 
               [&_.ant-menu-item-selected]:bg-indigo-600 
               [&_.ant-menu-item-selected]:text-white 
               [&_.ant-menu-item]:hover:bg-indigo-500"
                />            </Sider>
        </>
    )
}

export default Sidebar