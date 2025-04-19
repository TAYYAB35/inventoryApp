import { useState } from 'react'
import { ToastContainer } from 'react-toastify';

import { Layout, theme } from 'antd';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;


function App() {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
          <Header />
          <Content style={{ margin: '0 16px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Item>User</Item>
              <Item>Bill</Item>
            </Breadcrumb> */}
            <div
              className='p-6 h-[calc(100vh-173px)] bg-gray-50 !rounded'
            // style={{
            //   padding: 24,
            //   minHeight: 'calc(100vh - 173px)',
            //   background: colorBgContainer,
            //   borderRadius: borderRadiusLG,
            // }}
            >
              {<Outlet />}
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
      <ToastContainer />
    </>
  )
}

export default App
