import React from 'react'
import { Layout } from 'antd';

const Footer = () => {
    const { Footer } = Layout;
    return (

        <Footer style={{ textAlign: 'center' }}>
            Inventory & Stock managment ©{new Date().getFullYear()} Created by confeet
        </Footer>

    )
}

export default Footer