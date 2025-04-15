import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <div>
        {/* <Header /> */}
        <main className='py-3'>
          {/* <Container> */}
          <Outlet />
          {/* </Container> */}
        </main>
        {/* <Footer /> */}
        <ToastContainer />
      </div>
    </>
  )
}

export default App
