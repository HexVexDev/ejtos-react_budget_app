import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyChange = () => {
    const {dispatch} = useContext(AppContext);
    const handleCurrencyChange = (e) => {
        const selectedCurrency = e.target.value;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedCurrency,
          });  
      };
    return (
      <div> 
        <select 
        name="currency" 
        id="currency" 
        className='form-select alert alert-success'
        onChange={handleCurrencyChange}> 
        <option value="$" id="$">$ Dollar</option> 
        <option value="£" id="£" selected>£ Pound</option> 
        <option value="€" id="€">€ Euro</option> 
        <option value="₹" id="₹">₹ Ruppee</option> 
        </select>
      </div>
    );
  };
  
  export default CurrencyChange;