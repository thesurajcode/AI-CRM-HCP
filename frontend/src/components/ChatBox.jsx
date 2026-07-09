import {useState} from "react";

import {useDispatch,useSelector} from "react-redux";

import api from "../api/axios";

import {addMessage} 
from "../redux/slices/chatSlice";



function ChatBox(){


const [text,setText]=useState("");


const dispatch=useDispatch();


const messages = useSelector(

state=>state.chat.messages

);



const sendMessage=async()=>{


dispatch(

addMessage({

role:"user",

text:text

})

);



const res = await api.post(

"/agent/chat",

{

message:text

}

);



dispatch(

addMessage({

role:"ai",

text:res.data.response

})

);



setText("");

};




return (

<div>


<h2 className="text-xl font-bold mb-4">

AI Assistant 🤖

</h2>



<div className="h-60 overflow-auto border rounded p-3 mb-4">


{

messages.map((m,i)=>(


<p 
key={i}
className="mb-2"
>


<b>

{m.role}:

</b>

{" "}

{m.text}


</p>


))

}


</div>



<div className="flex gap-2">


<input

className="border flex-1 p-3 rounded"

value={text}

onChange={(e)=>

setText(e.target.value)

}

/>



<button

className="bg-green-600 text-white px-5 rounded"

onClick={sendMessage}

>

Send

</button>



</div>


</div>

);
}
export default ChatBox;