import React from 'react';

const budgetIncome = ({totalIncomes = 0}) => {
    return(
        <div className="budget__income clearfix">
            <div className="budget__income--text">Incomes</div>
            <div className="right">
                <div className="budget__income--value">+{totalIncomes}</div>
                <div className="budget__income--percentage">&nbsp;</div>
            </div>
        </div>
    );
}

export default budgetIncome;