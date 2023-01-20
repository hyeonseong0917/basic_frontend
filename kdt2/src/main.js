// const data=[
//     {
//         text: "javacript study"
//     },
//     {
//         text: "javacript review"
//     }
// ]
// const data1=[
//     {
//         text: "베이스 연습하기"
//     },
//     {
//         text: "턱걸이 하기"
//     },
//     {
//         text: "공부하기"
//     }
// ]
// const data2=[
//     {
//         text: "이디어츠 공연 보기"
//     },
//     {
//         text: "로토 팔로우 하기"
//     }
    
// ]
const initialState=localStorage.getItem('todos') || []
const $app=document.querySelector('.app')

// new TodoList({
//     $target: $app,
//     initialState: data
// })
// const todoList=new TodoList({
//     $target: $app,
//     // intialState: data
// })
new App({
    $target: $app,
    initialState,
})
// new TodoForm({
//     $target: $app,
//     onSubmit: (text)=>{
//         // alert(text)
//         // console.log(text)
//         const nextState=[...todoList.state, {
//             text
//         }]
//         todoList.setState(nextState)
//     }
// })


// setTimeout(()=>{
//     todoList.setState([
//         {
//             text: 'Happy JS!!!'
//         }
//     ])
// }, 5000)

// new TodoList({
//     $target: $app,
//     initialState: data
// })
// new TodoList({
//     $target: $app,
//     initialState: data1
// })
// new TodoList({
//     $target: $app,
//     initialState: data2
// })