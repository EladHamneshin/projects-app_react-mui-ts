import React, { createContext, useState } from 'react';

interface TabValueContext {
    tabsValue: number;
    setTabsValue: React.Dispatch<React.SetStateAction<number>>;
}

interface TabValueContextProviderProps {
    children: React.ReactNode;
}

export const TabValueContext = createContext<TabValueContext | null>(null);

const TabValueContextProvider: React.FC<TabValueContextProviderProps> = (props) => {
    const [tabsValue, setTabsValue] = useState<number>(0);
    return (
        <TabValueContext.Provider value={ {tabsValue, setTabsValue}}>
            {props.children}
        </TabValueContext.Provider>
    );
};

export default TabValueContextProvider;