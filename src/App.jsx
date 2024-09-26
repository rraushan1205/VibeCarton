import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import ProductPage from './components/ProductPage';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Categories from './components/Categories';
import Contact from './components/Contact';

// Layout component to wrap Navbar and Footer
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This renders the matched child route component */}
      <Footer />
    </>
  );
}

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Dashboard />,
          },
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "signup",
            element: <Signup />,
          },
          {
            path: "product",
            element: <ProductPage />,
          },
          {
            path: "categories",
            element: <Categories /> ,
          },
          {
            path: "contact",
            element: <Contact />,
          },
        ],
      },
    ],
    {
      basename: "/VibeCarton",  // Set the base URL here
    }
  );

  return <RouterProvider router={router} />;
}

export default App;
