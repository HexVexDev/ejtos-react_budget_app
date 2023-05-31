import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = (totalExpenses) => {
    const { budget,remaining, dispatch,currency} = useContext(AppContext);
    const expensest = budget-remaining;
    const handleInputChange = (e) => {
      const newBudget = parseInt(e.target.value);
      if(newBudget>20000){
        alert("Budget cannot be more than 20k");
          return;   
      }
      else{
        if(newBudget<expensest){
            alert("The value cannot be lower than spent funds  £"+ expensest);   
            return;
        }else{
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
              });  
      }
      
     }
    };
  
    return (
      <div className='alert alert-secondary'>
        <label htmlFor="budget"> Budget:{currency}</label>
        <input
          type="number"
          value={budget}
          step="10"
          onChange={handleInputChange}
          id="budget"
        />
      </div>
    );
  };
  
  export default Budget;
