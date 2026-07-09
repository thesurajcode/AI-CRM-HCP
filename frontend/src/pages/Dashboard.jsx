import InteractionForm 
from "../components/InteractionForm";


import ChatBox 
from "../components/ChatBox";

import InteractionList 
from "../components/InteractionList";
function Dashboard(){


return (

<div className="min-h-screen p-8">


<h1 className="text-3xl font-bold mb-8">

AI CRM HCP Dashboard

</h1>



<div className="grid grid-cols-2 gap-8">


<div className="bg-white p-6 rounded-xl shadow">

<InteractionForm/>

</div>



<div className="bg-white p-6 rounded-xl shadow">

<ChatBox/>

</div>


</div>



<InteractionList/>


</div>


);
}


export default Dashboard;