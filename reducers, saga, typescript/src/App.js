import React from "react"
import { useDispatch } from "react-redux"
import { Route, Routes } from "react-router-dom"
import {add}from './actions'
import ComponentA from "./componentA"
import ComponentB from "./componentB"
   
export default function App(){
  const dispatch=useDispatch()
   return  (
     <div>
    <header>hii</header>
    <main>
   <Routes>
     {/* <React.Fragment>
    <button 
   onClick={
     ()=>{
       dispatch(add("some text"))
     }
   }
   >click</button>
   </React.Fragment> */}
   
    <Route path='/' element={<ComponentA/>}></Route>
    <Route path="path1" element={<ComponentB/>}></Route>
  </Routes>
  </main>
  </div>)
}