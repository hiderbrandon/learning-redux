import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import '../App.css';
import HiderApp from '../hiderProject/hiderApp';
import ErrorPage from "./errorPage";
import Root from "./root";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage />,

  },
  {
    path:"/hider",
    element: <HiderApp></HiderApp>,
    errorElement:<ErrorPage />
  }
]);

function Router() {
  return (
    <div className="App">
      <header className="App-header">
      <RouterProvider router={routes} /> 
      </header>
    </div>
  );
}

export default Router;
