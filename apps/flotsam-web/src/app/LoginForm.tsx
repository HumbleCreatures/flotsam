import React, { useState } from 'react';

const LoginForm = () => {

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

    console.log('formState', formState);

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

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (isFormValid(formState)) {
            fetch('www.hej.com', { method: 'POST', body: JSON.stringify(formState) })
        } else {
            const newFormState = { ...formState };
            Object.keys(formState).forEach(key => newFormState[key as keyof FormStateType].isTouched = true);
            setFormState(newFormState);
        }
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <label>Användarnamn:</label><br />
            {formState.username.isTouched && !formState.username.isValid && <><span>Du har inte fyllt i användarnamn!</span><br /></>}
            <input type="text" placeholder="Användarnamn" onBlur={handleBlur} onChange={handleChange} name="username" />
        </div>
        <div>
            <label>Password</label>
            {formState.password.isTouched && !formState.password.isValid && <span>Du har inte fyllt i lösenord!</span>}
            <input type="password" placeholder="Lösenord" onBlur={handleBlur} onChange={handleChange} name="password" />
        </div>
        <button type="submit">Logga in</button>
    </form>
}

export default LoginForm;