import { useDispatch } from "react-redux"
import {add}from './actions'

export default function App(){
  const dispatch=useDispatch()
  return <button 
   onClick={
     ()=>{
       dispatch(add("some text"))
     }
   }
   >click</button>
}