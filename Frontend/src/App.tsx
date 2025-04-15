import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Breadcrumb, Layout, theme } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';

const { Content} = Layout;

function App() {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Layout>
        <Header />
        <Content style={{ padding: '0 48px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              background: colorBgContainer,
              minHeight: 280,
              padding: 24,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer />
      </Layout>
      <ToastContainer />

    </>
  )
}

export default App
