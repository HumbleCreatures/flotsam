import React, { useState } from 'react';
import { getCatFact } from '@flotsam/flotsam-shared';

const LoginForm = () => {

    const [ loginMessage, setLoginMessage ] = useState('');

    type FormStateType = {
        username: {
            value: string,
            isValid: boolean,
            isTouched: boolean
        },
        password: {
            value: string,
            isValid: boolean,
            isTouched: boolean
        }
    }

    const [formState, setFormState] = useState<FormStateType>({
        username: {
            value: '',
            isValid: false,
            isTouched: false
        },
        password: {
            value: '',
            isValid: false,
            isTouched: false
        },
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormState({ ...formState, [name]: { ...formState[name as keyof FormStateType], value: value, isValid: value.length > 3 } });
    }

    const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;

        setFormState({ ...formState, [name]: { ...formState[name as keyof FormStateType], isTouched: true } });
    }
    const isFormValid = (formData: FormStateType) => Object.keys(formData).reduce((prev, curr) => prev && formData[curr as keyof FormStateType].isValid, true);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        if (isFormValid(formState)) {
            //fetch('www.hej.com', { method: 'POST', body: JSON.stringify(formState) })
            const catFact = await getCatFact();
            setLoginMessage(catFact.fact);
        } else {
            const newFormState = { ...formState };
            Object.keys(formState).forEach(key => newFormState[key as keyof FormStateType].isTouched = true);
            setFormState(newFormState);
        }
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <label>Anv??ndarnamn:</label><br />
            {formState.username.isTouched && !formState.username.isValid && <><span>Du har inte fyllt i anv??ndarnamn!</span><br /></>}
            <input type="text" placeholder="Anv??ndarnamn" onBlur={handleBlur} onChange={handleChange} name="username" data-test-id="username" />
        </div>
        <div>
            <label>Password</label>
            {formState.password.isTouched && !formState.password.isValid && <span>Du har inte fyllt i l??senord!</span>}
            <input type="password" placeholder="L??senord" onBlur={handleBlur} onChange={handleChange} name="password" data-test-id="password" />
        </div>
        <button data-test-id="login-form-button" type="submit">Logga in</button>
        <div data-test-id="login-form-message">{loginMessage}</div>
    </form>
}

export default LoginForm;