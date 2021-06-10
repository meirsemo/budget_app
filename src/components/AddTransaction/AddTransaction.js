import React, { useContext, useState } from 'react';
//import {v4 as uuidv4} from 'uuid';
import { GlobalContext } from '../../context/GlobalState';
import './AddTransaction.css';

const add = React.memo( () => {
    
    const {addTransaction} = useContext(GlobalContext);

    const [userDescription, setUserDescription] = useState('');
    const [userValue, setUserValue] = useState('');
    const [selectValue, setSelectValue] =  useState('inc');//when the state change the component will rerenderd

    const submitHandler = event => {
        event.preventDefault();
        if(userDescription  && userValue ){
            addTransaction({
                //id: uuidv4(),
                description: userDescription, 
                value: userValue * 1, 
                type: selectValue});
                setUserDescription('');
                setUserValue('');
        }
    }
    
    let inputRed = '';
    let buttonRed = '';
    if(selectValue === 'exp') {
        inputRed = ' red-focus';
        buttonRed = ' red';
    }
    
    return (
        <React.Fragment>           
            <h2 className='trans-headline'>add your transction</h2>
            <form className="add__container" onSubmit={submitHandler}>
                <select className={"add__type" + inputRed} 
                    onChange={e => setSelectValue(e.target.value)} 
                    value={selectValue}>
                    <option value="inc">+</option>
                    <option value="exp">-</option>
                </select>
                <input type="text" 
                    className={"add__description" + inputRed}
                    placeholder="Description..." 
                    onChange={e => {setUserDescription(e.target.value)}}
                    value={userDescription}/>
                <input type="number" 
                    className={"add__value" + inputRed} 
                    placeholder="Value..."
                    onChange={e => {setUserValue(e.target.value)}}
                    value={userValue}/>
                <button className={"add__btn" + buttonRed} type="submit">
                        <i className="ion-ios-checkmark-outline"></i>
                </button>
            </form>
        </React.Fragment>
 
    );
});

export default add;
// (selectValue === 'exp' ? ' red' : '')