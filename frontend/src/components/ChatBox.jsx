import { useState } from "react";

import {
  useDispatch,
  useSelector
} from "react-redux";

import api from "../api/axios";

import {
  addMessage
} from "../redux/slices/chatSlice";



function ChatBox(){


const [text,setText] = useState("");

const [loading,setLoading] = useState(false);


const dispatch = useDispatch();


const messages = useSelector(

state => state.chat.messages

);



const sendMessage = async()=>{


if(!text.trim()){
  return;
}



dispatch(

addMessage({

role:"You",

text:text

})

);



try{


setLoading(true);


const res = await api.post(

"/agent/chat",

{
message:text
}

);



dispatch(

addMessage({

role:"AI",

text:res.data.response

})

);


setText("");


}


catch(error){


dispatch(

addMessage({

role:"Error",

text:"AI service unavailable"

})

);


}


finally{

setLoading(false);

}


};




return(


<div>


<h2 className="text-xl font-bold mb-4">

AI Assistant 🤖

</h2>



<div className="h-60 overflow-auto border rounded p-4 mb-3">


{


messages.map((msg,index)=>(


<div 
key={index}
className="mb-3"
>


<b>

{msg.role}:

</b>


{" "}


{msg.text}



</div>


))


}



{

loading &&

<p>

🤖 AI is thinking...

</p>

}



</div>




<div className="flex gap-2">


<input

className="border rounded p-3 flex-1"

value={text}

placeholder="Ask AI..."

onChange={(e)=>setText(e.target.value)}

/>



<button

disabled={loading}

className="bg-green-600 text-white px-5 rounded"

onClick={sendMessage}

>


{
loading
?
"Wait..."
:
"Send"
}


</button>



</div>



</div>


);


}



export default ChatBox;