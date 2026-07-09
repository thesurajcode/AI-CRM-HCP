import { createSlice } from "@reduxjs/toolkit";


const interactionSlice = createSlice({

    name:"interactions",

    initialState:{

        list:[]

    },


    reducers:{


        setInteractions:(state,action)=>{

            state.list = action.payload;

        },


        addInteraction:(state,action)=>{

            state.list.push(
                action.payload
            );

        }

    }

});


export const {
    setInteractions,
    addInteraction
}=interactionSlice.actions;


export default interactionSlice.reducer;