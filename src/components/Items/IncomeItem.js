import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './Items.css';

const IncomeItem = ({id = 0, description = '', value = 0}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    return(
        <li className="item clearfix">
            <div className="item__description">{description}</div>
            <div className="right clearfix">
                <div className="item__value">+{value}</div>
                <div className="item__percentage-inc">&nbsp;</div>
                <div className="item__delete">
                    <button className="item__delete--btn" onClick = {() => deleteTransaction(id)}>
                        <i className="ion-ios-trash-outline"></i>
                    </button>
                </div>
            </div>
        </li>
    );
}

export default IncomeItem;