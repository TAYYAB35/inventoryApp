import { Layout } from 'antd';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { ToastContainer } from 'react-toastify';
import { Outlet, Route, Routes } from 'react-router-dom';
import { DashboardScreen, ProductsListScreen, StockScreen, ReportScreen, SalesScreen, OrdersScreen, ExpensScreen, BudgetScreen,AddProductScreen } from './screens/index';

const { Content } = Layout;

function App() {
  return (
    <>
      <div>
        <Header />
        <div>
          <Sidebar />
          <div className="w-full xl:ps-64 ">
            <div className="p-4 sm:p-0 space-y-4 sm:space-y-6 bg-slate-100 min-h-[calc(100vh-74px)] xl:min-h-[calc(100vh-60px)]">
              <Routes>
                {/* Now define layout routes here */}
                <Route path="" element={<DashboardScreen />} />
                <Route path="products" element={<ProductsListScreen />} />
                <Route path="products/add" element={<AddProductScreen />} />
                <Route path="stock" element={<StockScreen />} />
                <Route path="orders" element={<OrdersScreen />} />
                <Route path="sales" element={<SalesScreen />} />
                <Route path="expense" element={<ExpensScreen />} />
                <Route path="budget" element={<BudgetScreen />} />
                <Route path="reports" element={<BudgetScreen />} />
                {/* Add more here */}
              </Routes>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
