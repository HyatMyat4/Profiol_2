import { createSlice } from '@reduxjs/toolkit'


const initialState = { 
    darkmode : true ,
    starmode : false
}
export const Actionslice = createSlice({
    name: 'actionslice',
    initialState,
    reducers:{      
        darkmodeEngin : (state , action) => {
            state.darkmode = action.payload
        },
        starmodeEngin : (state , action) => {
            state.starmode = action.payload
        }
    } 
})

export const  {    
    darkmodeEngin,
    starmodeEngin
} = Actionslice.actions

export const  darkmodeC = ( state ) => state.actionslice.darkmode
export const  starmodeC = ( state ) => state.actionslice.starmode

export default Actionslice.reducer;