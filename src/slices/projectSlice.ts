import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import Project from "../types/Project"

interface ProjectState{
    projects: Project[]
    selected: false |  number;
}

const date = new Date()

const initialState : ProjectState = {
    projects: [{name:'p1', tasks:[{name:"p11",endDate:date , status:"In Progress", description:[{description:"sdf"}]},
    {name:"p12",endDate:date , status:"Pending", description:[{description:"sfg"}]},
    {name:"p12",endDate:date , status:"Aborted", description:[{description:"sfg"}]},
    {name:"p12",endDate:date , status:"Completed", description:[{description:"sfg"}]}]}],
    selected: false,
}

export const proectSlice = createSlice({
    name: 'project',
    initialState,
    reducers:{
        addProject: (state, action: PayloadAction<Project>) => {
            const alreadyExists = state.projects.some((p)=> p.name === action.payload.name)
            
            if(alreadyExists){
                console.log("already exists");
                return 
            }
            state.projects = [...state.projects, action.payload];
        },
        setSelected: (state, action: PayloadAction<false | number>) => {
            state.selected = action.payload;
        }
    }
})


export const {addProject, setSelected} = proectSlice.actions;
export default proectSlice.reducer;