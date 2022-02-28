import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPersonalInfo } from "../Actions/index"

export const PersonalInfo=()=>{
    const dispatch =useDispatch()
    dispatch(fetchPersonalInfo())
    let state=useSelector(state=>state)

    useEffect(
         ()=>{} , [state]
    )
    return <div>
        {state.personalInfo.map(i=><div key={i.id}>
           <br/>
           <br/>
           First Name : <span>{i.fname}</span>
           <br/>
           Last Name : <span>{i.lname}</span>
           <br/>
           Age : <span>{i.Age}</span>
            </div>)}
      
    </div>}