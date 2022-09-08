import React, { createContext, FC, useState  } from 'react';

type SectionType = {
    currentSection: string;
    setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
};

type Props = {
    children?: JSX.Element;
}

export const ActiveSectionContext = createContext<SectionType >({} as SectionType );


const ActiveSectionContextProvider: FC<Props> = ({ children, ...props }) => {
    
    const [currentSection, setCurrentSection] = useState('home');
    
    return (
        <ActiveSectionContext.Provider value={{currentSection, setCurrentSection}}>
            {children}
        </ActiveSectionContext.Provider>
    );
 }
 export default ActiveSectionContextProvider;
