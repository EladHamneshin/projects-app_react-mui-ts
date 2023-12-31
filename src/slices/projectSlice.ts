import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import Project from "../types/Project"
import projects from "../utils/generateSampleData";

interface ProjectState{
    projects: Project[]
    selected: false |  number;
}

const initialState : ProjectState = {
    projects: projects,
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