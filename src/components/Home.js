import React from 'react';
import { GlobalContextProvider } from '../context/GlobalState';
import BudgetContainer from '../containers/BudgetContainer';

const Home = () => {
    return (
    <GlobalContextProvider>        
        <BudgetContainer/> 
     </GlobalContextProvider>
    );
};

export default Home;
