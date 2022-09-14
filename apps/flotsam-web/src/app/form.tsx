import { useState } from "react";
import { EmilCheckInputField } from "./emilInputField";

export const MyForm = () => {
  const [formState, setFormState] = useState<{emilValue: string, inputValue: string}>({ inputValue: 'input', emilValue: 'emil default value' });

  const validator =  (value: string):boolean => {
    return value.length > 0;
  }
  return <div>
    <EmilCheckInputField
    errorMessage="Något gick fel på servern"
    propValue={formState.emilValue}
    onInputFilled={() => alert('Input är fullt')}
    onChange={(dataInput) => {
      setFormState({...formState, emilValue: dataInput})
    }}></EmilCheckInputField>


    <input type="text" value={formState.inputValue} onChange={(event) => {
      const inputValue = event.target.value;

      if(validator(inputValue)) {
        alert('emil');
      } else {
        setFormState({...formState, inputValue: event.target.value})
      }

      }}></input>
    <button onClick={() => {
      alert(formState.emilValue);
      setFormState({...formState, inputValue: 'newInput'})}}>click me</button>
  </div>
};
