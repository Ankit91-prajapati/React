import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom";
import App from "./App";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Github from "./components/Github/Github";
import { githubInfoLoader } from "./components/Github/Github";
import User from "./components/User/User";
// const router = createBrowserRouter([
//   {
//     path : '/',
//     element:<App/>,
//     children:[
//       {
//         path:"",
//          element:<Home/>
//       },

//       {
//         path:"about",
//          element:<About/>
//       },

//       {
//         path:"contact",
//          element:<Contact/>
//       },

//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route 
        path="github" 
        element={<Github />} 
        loader={githubInfoLoader} 
      />
    </Route> 
  )
);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
