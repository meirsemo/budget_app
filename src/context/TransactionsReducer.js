export default (transactions , action) => {
    switch(action.type) {
        case 'SET': return {
            ...transactions, 
            incomes: action.transactions.loadTransIncomes,
            expenses: action.transactions.loadTransExpenses
        }
        case 'ADD': 
            if(action.item.type === 'inc'){ 
                return {            
                    ...transactions,
                    incomes: transactions.incomes.concat(action.item)
                }
            }
            else if(action.item.type === 'exp') {
                return {
                    ...transactions,
                    expenses: transactions.expenses.concat(action.item)
                }
            }
            break;
        case 'DELETE':
            return {
                    ...transactions,
                    expenses: transactions.expenses.filter(exp => exp.id !== action.id),
                    incomes: transactions.incomes.filter(exp => exp.id !== action.id), 
            }
        default: 
            return transactions;
    }
};