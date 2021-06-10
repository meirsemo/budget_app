import React, { useContext } from 'react';

import BudgetIncome from './BudgetIncome/BudgetIncome';
import BudgetExpenses from './BudgetExpenses/BudgetExpenses';
import {GlobalContext} from '../../context/GlobalState';
import './Budget.css';

const budget = () => {
    const {totalIncomes, totalExpenses} = useContext(GlobalContext);

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = new Date().getMonth();
    const percentage = (totalExpenses / totalIncomes) * 100 ;
    let plusMiuns = (totalIncomes - totalExpenses) > 0 ? ' plus' : ' minus';
    return(<div className="budget">
                <div className="budget__title">
                    Budget in <span className="budget__title--month">{months[month]}</span> :
                </div>
                <div className={"budget__value" + plusMiuns}>{totalIncomes - totalExpenses}₪</div>{/**ctrl+alt+4 */}
                <BudgetIncome totalIncomes={totalIncomes}/>
                <BudgetExpenses totalExpenses={totalExpenses} percentage={percentage}/>
            </div>);
}

export default budget;