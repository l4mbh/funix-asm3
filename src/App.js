import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Root, {loader as ProductsLoader} from "./pages/Root";
import Shop from "./pages/Shop";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login, {action as LoginAction} from "./pages/Login";
import Register, {action as SignUpAction} from "./pages/Register";
import Error from "./pages/Error";
import Logout, {action as LogoutAction} from "./pages/Logout";
import { getAuthorization } from "./utils/auth";

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
          loader: getAuthorization
        },
        {
          path: "login",
          element: <Login />,
          action: LoginAction
        },
        {
          path: "register",
          element: <Register />,
          action: SignUpAction
        },
        {
          path: 'logout',
          element: <Logout/>,
          action: LogoutAction,
          loader: getAuthorization
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
