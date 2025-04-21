import { Layout } from 'antd';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

function App() {
  return (
    <>
      <div>
        <Header />
        <div>
          <Sidebar />
          <div className="w-full lg:ps-64">
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 bg-gray-50 h-full">
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
