import React, { useContext } from 'react';

import Budget from '../components/Budget/Budget';
import AddTransaction from '../components/AddTransaction/AddTransaction';
import IncomesList from '../components/IncomesList/IncomesList';
import ExpensesList from '../components/ExpensesList/ExpensesList';
import Navbar from '../elements/Navbar/Navbar';
import Card from '../elements/Card/Card';
import './BudgetContainer.css';

import { GlobalContext } from '../context/GlobalState';

const budgetContainer = () => {
    const {incomes, expenses} = useContext(GlobalContext);
    return (
        <React.Fragment>  
            <Navbar/>
            <main>
                <div className="budget-section">
                    <Card>
                        <Budget/>
                    </Card>
                </div>
                <div className="add-section">
                    <AddTransaction/>
                </div>
                <div className="container clearfix">
                    <IncomesList incomes={incomes}/>
                    <ExpensesList expenses={expenses}/>
                </div>
            </main>
        </React.Fragment>   
    )
}

export default budgetContainer;
