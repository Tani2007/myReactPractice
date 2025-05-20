import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./component/Body";
import About from "./component/About";
import Header from "./component/Header";
import FunctionalComponent from "./component/FunctionalComponent";
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
export default function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/body",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <FunctionalComponent name="tanishq" sName="saxena" />,
        },
      ],
    },
  ]);
  return <RouterProvider router={appRouter} />;
}
