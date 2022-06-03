import React, { Component, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { MainVar } from './components/common/MainVar';
import { DetalleProduct } from './components/DetalleProduct';
import { Menu } from './components/Menu';
import PanelProducts from './PanelProducts';


class AppRouter extends Component{

    render(){
      return (
        <>
            <MainVar></MainVar>
            <Routes>
              <Route path="/" element={<Menu/>}/>
              <Route path="/products" element={<PanelProducts/>}/>
              <Route path="/detalle">
                <Route path=":idProduct" element={<DetalleProduct />} />
              </Route>
              <Route path="*" element={<Menu/>}/>
            </Routes>
        </>
      );
    }
  }
  
  export default AppRouter;
  