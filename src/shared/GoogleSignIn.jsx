import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';

const GoogleSignIn = () => {
    const {signInWithGoogle}= useContext(AuthContext)

    const handleSignInWithGoogle =()=>{
        signInWithGoogle()
        .then(result => {
            // console.log(result.user)
        })
        .catch(error =>{
            // console.log(error.message)
        })
    }
    return (
        <div>
            <button onClick={handleSignInWithGoogle} className='btn btn-primary'>Google</button>
        </div>
    );
};

export default GoogleSignIn;