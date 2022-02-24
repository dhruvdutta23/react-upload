import { take, fork, call, put } from 'redux-saga/effects';
// watch for actions and coordinate worker tasks
// function* watchGetDataRequests(data) {
//     console.log("bye")
//   while(true) {
//       console.log('first line')
//     const action = yield take('GET_DATA');
//     console.log("inside watchget")
//     yield fork(getData, action.id);
//   }
// }
// function* getData(id) {
// //   const data = yield call(fetch, id);
// //   yield put({
// //     type: 'GET_SUCCESS',
// //     data
// //   });
// console.log('getfork called')
// }

// function* someAp(){
//     console.log("inside someap")
//     const res=yield call(watchGetDataRequests,"data")
//     console.log("hi")
//  console.log(res)   //   yield put({type:'GET_DATA',id:'1996061'})
// }

// var a=someAp()
// a.next()
export default function* aSagaFunc(){
  console.log("hi")
yield take("add")
//so 2nd console log should not excute
//type add is defined , i will click button and dispatch will call action type add
console.log("hi second timme")
}