import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import Project from "../types/Project"

interface ProjectState{
    project: Project | null
}

const initialState : ProjectState = {
    project: null
}

export const proectSlice = createSlice({
    name: 'project',
    initialState,
    reducers:{
        setProject: (state, action: PayloadAction<Project>) => {
            state.project = action.payload;
        }
    }
})


export const {setProject} = proectSlice.actions;
export default proectSlice.reducer;