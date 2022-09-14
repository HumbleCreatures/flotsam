import { useState } from "react";

export const EmilCheckInputField = ({onChange, onInputFilled, propValue, errorMessage} : { errorMessage?: string, onChange?:(dataValue:string)=>void, onInputFilled?:()=>void, propValue: string }) => {
  const [inputState, setInputState] = useState<{inputValue: string}>({ inputValue: 'emil input' });

  return <div><input type="text" value={propValue} onChange={(event) => {
      const inputValue = event.target.value;

      if(inputValue.length > 3) {
        onInputFilled && onInputFilled();
      }

      if(inputValue.startsWith('emil')) {
        alert('emil');
      } else {
        setInputState({ inputValue: event.target.value})
        onChange && onChange(inputValue);
      }

      }}></input>
      <div>Lenght: {inputState.inputValue.length}</div>
      {inputState.inputValue.length <= 0 ? <div>Du måste fylla i mer</div>: <div>Allt är bra</div>} s
      {errorMessage ? <div>Nått har gått fel</div>: <div>Allt är bra</div>} s

      </div>
};
