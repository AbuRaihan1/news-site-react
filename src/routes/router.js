import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../layout/Pages/Home/Home";
import Category from "../layout/Pages/Category/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:categoryId",
        element: <Category></Category>,
      },
    ],
  },
]);

export default router;
