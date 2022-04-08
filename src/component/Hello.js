// export default function Hello(){

//     function showName(){
//         console.log("Mike")
//     }

//     function showAge(age){
//         console.log(age)
//     }

//     //  function showText(e){
//     //      console.log(e.target.value)
//     //  }

//     function showText(txt){
//         console.log(txt)
//     }

//     return (
//     <div>
//         <h1>Hello</h1>
//         <button onClick={showName}>Show name</button> 
//         <button onClick=
//            {() =>{
//                 showAge(10);
//             }}
//         >
//             Show age</button>
            
//             {/* <input type = "text" onChange={e => {
//                 console.log(e.target.value)
//             }} /> */}

//             <input type = "text" onChange={e =>{
//                 const txt = e.target.value;
//                 showText(txt);

//             }}
//         />
//     </div>
//     );
//         }

import { useState } from "react";
import UserName from "./UserName";

export default function Hello({age}){
    // let name = "Mike";
    //바뀌면 다시 랜더링 해줌 Hello()를
    const [name, setName] = useState('Mike');
    // const [age, setAge] = useState(props.age);
    const msg = age>19 ? "성인 입니다." : "미성년자 입니다.";

    function changeName(){
        const newName = name ==="Mike" ? "Jane" : "Mike";
        setName(newName)
    }

    return (
        <div>
            <h2 id = "name">
                {name} ({age}) : {msg}
            </h2>
            <UserName name = {name} />
            <button onClick={changeName}>Change</button>
        </div>
    )
}