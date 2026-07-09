import { useEffect } from "react";

import {
  useDispatch,
  useSelector
} from "react-redux";


import api from "../api/axios";


import {
  setInteractions
} from "../redux/slices/interactionSlice";




function InteractionList(){


const dispatch = useDispatch();


const interactions = useSelector(

state => state.interactions.list

);



useEffect(()=>{


const fetchData = async()=>{


try{


const res = await api.get(

"/interactions/"

);


dispatch(

setInteractions(res.data)

);


}

catch(error){

console.log(error);

}


};



fetchData();



},[]);




return(

<div className="mt-8 bg-white p-6 rounded-xl shadow">


<h2 className="text-xl font-bold mb-4">

Recent Interactions

</h2>



<table className="w-full border">


<thead>


<tr className="bg-gray-100">


<th className="p-2 border">

Type

</th>


<th className="p-2 border">

Notes

</th>


</tr>


</thead>




<tbody>


{

interactions.map((item)=>(


<tr key={item.id}>


<td className="p-2 border">

{item.interaction_type}

</td>



<td className="p-2 border">

{item.notes}

</td>


</tr>


))

}


</tbody>


</table>


</div>

);


}



export default InteractionList;