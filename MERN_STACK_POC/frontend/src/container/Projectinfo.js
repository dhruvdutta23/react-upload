import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchProjectInfo} from "../Actions/index"


export const ProjectInfo=()=> {
    const dispatch= useDispatch()
    dispatch(fetchProjectInfo())
    let state=useSelector(state=>state)
   
    useEffect(
        ()=>{} , [state]
     )
    return <div>
        {state.projectInfo.map(i=><div key={i.id}>
           <br/>
           <br/>
           Project Name : <span>{i.project}</span>
           <br/>
            </div>)}
    </div>}