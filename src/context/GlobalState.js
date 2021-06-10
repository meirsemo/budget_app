import React, {createContext, useCallback, useEffect, useReducer} from 'react';  
import TransactionsReducer from './TransactionsReducer';

const initialState = {
    incomes: [],
    expenses: []
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = (props) => {

    const [transactions, dispatch] = useReducer(TransactionsReducer, initialState);

    const incomesAmount = transactions.incomes.map(item => item.value);
    const expensesAmount = transactions.expenses.map(item => item.value);
    const totalIncomes = incomesAmount.reduce((acc, item) => (acc+= item), 0).toFixed(2);
    const totalExpenses = expensesAmount.reduce((acc, item) => (acc+= item), 0).toFixed(2); 

    useEffect(() => {
        fetch('https://budgetapp-61f64.firebaseio.com/transactions.json')
        .then(response => response.json())
        .then(responseData => {
            const loadTransExpenses = [];
            const loadTransIncomes = [];
            for(const key in responseData){
                if(responseData[key].type === "inc"){
                    loadTransIncomes.push({
                        id: key,
                        description: responseData[key].description, 
                        value: responseData[key].value, 
                        type: responseData[key].type
                    });
                }else {
                    loadTransExpenses.push({
                        id: key,
                        description: responseData[key].description, 
                        value: responseData[key].value, 
                        type: responseData[key].type
                    });
                }
            }
            dispatch({type: 'SET', transactions: {loadTransIncomes, loadTransExpenses}});
        });
    }, []);

    const addTransactionHandler = useCallback(transaction => {
        fetch('https://budgetapp-61f64.firebaseio.com/transactions.json', {
            method: 'POST',
            body: JSON.stringify(transaction),
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            return response.json();
        }).then(responseData => {
            console.log(responseData, 'serverADD');
            transaction = {...transaction, id: responseData.name};
            dispatch({type: 'ADD', item: transaction});
        });
    });

    const deleteTransactionHandler = useCallback(transactionId => {
        console.log(transactionId, 'serverREMOVE');
        fetch(`https://budgetapp-61f64.firebaseio.com/transactions/${transactionId}.json`, {
            method:'DELETE'
        }).then(() => {
            console.log(transactionId); 
            dispatch({type: 'DELETE', id: transactionId});
        })
    });
    
    return(
        <GlobalContext.Provider value={{
                incomes: transactions.incomes,
                expenses: transactions.expenses,
                totalIncomes: totalIncomes,
                totalExpenses: totalExpenses,
                addTransaction: addTransactionHandler,
                deleteTransaction: deleteTransactionHandler}}>
                    {props.children}
        </GlobalContext.Provider>
    );
};
    