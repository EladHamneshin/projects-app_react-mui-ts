import React, { createContext, useState } from 'react';
import Project from '../types/Project';

interface ProjectContext {
    project: Project | null;
    setProject: React.Dispatch<React.SetStateAction<Project | null>>;
}

interface ProjectContextProviderProps {
    children: React.ReactNode;
}

export const ProjectContext = createContext<ProjectContext | null>(null);

const ProjectContextProvider: React.FC<ProjectContextProviderProps> = (props) => {
    const [project, setProject] = useState<Project | null>(null);
    return (
        <ProjectContext.Provider value={ {project, setProject}}>
            {props.children}
        </ProjectContext.Provider>
    );
};

export default ProjectContextProvider;