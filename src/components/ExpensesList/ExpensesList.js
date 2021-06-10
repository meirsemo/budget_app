import React from 'react';
import ExpensesItem from '../Items/ExpensesItem';
import {v4 as uuidv4} from 'uuid';

import './ExpensesList.css';

const expensesList = ({expenses = []}) => {
    return(
    <div className="expenses">
        <h2 className="expenses__title">expenses</h2> 
        <hr/>
        <div className="expenses__list">
            <ul>
                {expenses.map(exp => (
                        <ExpensesItem key={uuidv4()}
                                    id={exp.id}
                                    description={exp.description}
                                    value={exp.value}/> 
                ))}
            </ul>
        </div>
    </div>
    );
}

export default expensesList;
