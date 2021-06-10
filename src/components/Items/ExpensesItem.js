import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './Items.css';

const ExpensesItem = ({id = 0, value = 0, description = ''}) => {
    const {deleteTransaction, totalIncomes} = useContext(GlobalContext);
    const percentage = totalIncomes > 0 ? ((value / totalIncomes) * 100).toFixed(2) : '--';
    return(
        <li className="item clearfix">
            <div className="item__description">{description}</div>
            <div className="right clearfix">
                <div className="item__value">-{value}</div>
                <div className="item__percentage">{percentage}%</div>
                    <div className="item__delete">
                        <button className="item__delete--btn" onClick={() => deleteTransaction(id)}>
                            <i className="ion-ios-trash-outline"></i>
                        </button>
                    </div>
            </div>
        </li>
    );
}

export default ExpensesItem;
//<ion-icon name="trash-outline"></ion-icon>
// <i className="ion-ios-close-outline"></i>