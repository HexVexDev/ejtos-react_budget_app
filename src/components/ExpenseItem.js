import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button class="btn btn-success btn-number" onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button class="btn btn-danger btn-number" size='1.5em' onClick={hevent=> decreaseAllocation(props.name)}>-</button></td>
        </tr>
    );
};
export default ExpenseItem;
