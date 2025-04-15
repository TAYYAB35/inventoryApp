// import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Breadcrumb, Layout, theme } from 'antd';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

function App() {

  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Layout style={{ minHeight: '100vh' , background: '#f0f2f5' }}>
        <Sidebar />
        <Layout>
          <Header />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: '#fff',
                borderRadius: borderRadiusLG,
              }}
            >
              
              <Outlet />
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
