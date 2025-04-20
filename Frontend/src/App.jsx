import { Outlet, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import { DashboardScreen } from './screens/index';

const { Content } = Layout;

function App() {
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
          <Header />
          <Content style={{ margin: '0 16px' }}>
            <div className='p-6 h-full bg-gray-200 rounded-xl'>
              <Routes>
                {/* Now define layout routes here */}
                <Route path="" element={<DashboardScreen />} />
                <Route path="profile" element={<div>Profile</div>} />
                {/* Add more here */}
              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>
      <ToastContainer />
    </>
  );
}

export default App;
