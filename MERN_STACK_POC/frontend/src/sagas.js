import { call, fork,all, take, put } from "redux-saga/effects"
import axios from 'axios'

export function* personalsaga(){
    yield take("FETCH_PERSONALINFO")
    try{
    let response =yield call(axios, "http://localhost:3000/get/Personal_Info")
    yield put({type:"STORE_PERSONAINFO", payload:response.data})
    
    }
    catch(e){
        console.log(e)
    }
    
}

export function* projectsaga(){
    yield take("FETCH_PROJECTINFO")
    try{
        let response =yield call(axios, "http://localhost:3000/get/Project_info")
        yield put({type:"STORE_PROJECTINFO", payload:response.data})
        
        }
        catch(e){
            console.log(e)
        }
   
}

// export function* rootSaga(){
//     yield * [projectsaga(), personalsaga()]
// }

