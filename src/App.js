import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Root, {loader as ProductsLoader} from "./pages/Root";
import Shop from "./pages/Shop";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      loader: ProductsLoader,
      id: 'root',
      errorElement: <Error/>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "shop",
          element: <Shop />,
        },
        {
          path: "detail/:id",
          element: <Detail />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
