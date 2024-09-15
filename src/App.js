import React, { useEffect ,useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import About from "./Components/About";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./Cart/appStore";
import Itemcart from "./Components/Itemcart";
const AppLayout = () => {
  const [userName,setUserName]=useState(null);

  useEffect(()=>{
    const data={
    name:"YANNAM HEMA"
    }
    setUserName(data.name);
  },[])
  return (
    <Provider store={appStore}>
    <userContext.Provider value={{loggedInUser:userName}}>
    <div>
      <Header  />
      <Outlet />
    </div>
    </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
       path:"/cart",
       element:<Itemcart/>
      },
    ],
    errorElement:<Error/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("div1"));
root.render(<RouterProvider router={appRouter} />);