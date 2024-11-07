import React,{useId} from 'react'


function InputBox({
    //these are input we want from user and here we have set some default values of input so that if no value passed it will have it's default value.
    label,                          //label is for displaying that whether user is passing from or To .
    amount,                         //for displaying amount
    onAmountChange,                 //when this component will be called , The amount change has to be updated using usestate therefore we will use usestate hook to update amount and onAmountChange.
    onCurrencyChange,               //for currency change in drop down menu.
    currencyOptions = [],           //for options using array for currency.By default we have empty array 
    selectCurrency = "usd",         //for selecting currency.
    amountDisable = false,          
    currencyDisable = false,

    className = "",
}) {
    const amountInputId = useId()

    return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2">
            <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block"> {label} </label>
            <input
                id={amountInputId}
                className="outline-none w-full bg-transparent py-1.5"
                type="number"
                placeholder="Amount"
                disabled={amountDisable}
                value={amount}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="text-black/40 mb-2 w-full">Currency Type</p>
            <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            value={selectCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisable}
            >
                {currencyOptions.map((currency) => (
                    //remeber the key in loops in react
                    <option key={currency} value={currency}> 
                    {currency} 
                    </option>
                ))}
            </select>
        </div>
    </div>
    );
}

export default InputBox;

