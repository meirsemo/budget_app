import React from 'react';
import IncomeItem from '../Items/IncomeItem';
import {v4 as uuidv4} from 'uuid';

import './IncomesList.css';

const incomeList = ({incomes = []}) => {
  
    
    return(
    <div className="income">
        <h2 className="icome__title">incomes</h2>
        <hr/>
        <div className="income__list">
            <ul>
                {incomes.map(inc => {
                  return  <IncomeItem key = {uuidv4()}
                                id = {inc.id}
                                description = {inc.description}
                                value = {inc.value}/>   
                                
                })}
            </ul>      
        </div>
    </div>
    );
}

export default incomeList;