import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from "react-router-dom";
import Home from './modules/home/home';
import NavBar from './shared/navBar/navBar';
import Footer from './shared/footer/footer';

const router = createBrowserRouter(createRoutesFromElements(
  <Route >
    <Route index element={<Home/>}/>
  </Route>
));

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <RouterProvider router={router} />
      <Footer/>
    </div>
  );
}

export default App;
