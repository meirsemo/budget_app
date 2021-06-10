import React from 'react';

const budgetExpenses = ({totalExpenses = 0, percentage = 0}) => {
    return(
    <div className="budget__expenses clearfix">
        <div className="budget__expenses--text">Expenses</div>
        <div className="right clearfix">
            <div className="budget__expenses--value">-{totalExpenses}</div>
            <div className="budget__expenses--percentage">{percentage === Infinity || isNaN(percentage) ? 
                '--' : percentage.toFixed(2)}%
            </div>
        </div>
    </div>
    );
}

export default budgetExpenses;
