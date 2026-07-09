import { useState } from "react";
import { useDispatch } from "react-redux";

import api from "../api/axios";

import { addInteraction } 
from "../redux/slices/interactionSlice";



function InteractionForm(){


const dispatch = useDispatch();


const [form,setForm]=useState({

    hcp_id:1,

    interaction_type:"Meeting",

    notes:""

});



const handleSubmit = async(e)=>{


    e.preventDefault();


    const res = await api.post(
        "/interactions/",
        form
    );


    dispatch(
        addInteraction(res.data)
    );


    setForm({

        ...form,

        notes:""

    });


};



return (

<div>


<h2 className="text-xl font-bold mb-4">

Log Interaction

</h2>



<form 
onSubmit={handleSubmit}
className="space-y-4"
>


<input

className="w-full border p-3 rounded"

value={form.interaction_type}

onChange={(e)=>

setForm({

...form,

interaction_type:e.target.value

})

}

/>



<textarea

className="w-full border p-3 rounded h-40"

placeholder="Meeting notes"

value={form.notes}

onChange={(e)=>

setForm({

...form,

notes:e.target.value

})

}

/>



<button

className="bg-blue-600 text-white px-5 py-2 rounded"

>

Save Interaction

</button>


</form>


</div>

);
}

export default InteractionForm;