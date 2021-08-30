import { useState } from 'react';
import { googleSignIn } from '../../firebase/firebase.utils';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';



import './sign-in.style.scss'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        setEmail('');
        setPassword('');
    }

    const handleChange = event => {
        const type = event.target.name;
        const value = event.target.value;

        type === 'email' ? setEmail(value) : setPassword(value);
    }


    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    label='email'
                    handleChange={handleChange}
                    value={email}
                    required
                />
                <FormInput
                    name='password'
                    value={password}
                    label='password'
                    type='password'
                    handleChange={handleChange}
                    required
                />
                <div className="buttons">
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton onClick={googleSignIn} isGoogleSignIn >Sign in with Google</CustomButton>
                </div>
            </form>
        </div>

    );
}

export default SignIn;