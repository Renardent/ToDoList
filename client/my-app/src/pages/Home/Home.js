import React, {useState} from 'react';

import {useNavigate} from "react-router-dom";
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import styles from './Home.module.css';
import history from '../../browserHistory';

const Home = (props) => {
    const [state, setState] = useState(true);
    // const [data, setData] = useState();
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const buttonHandler = () => {
        setState(state => !state);
    }

    const getData = ({callback, values}) => {
        callback(values)
        .then(result => {
            props.sendUser(result.data);
            localStorage.setItem('token', result.tokens.token);
            navigate('/tasks')
        })
        .catch(err => {
            setError(err);
        })
    }

    const textButton = state ? "SignUp" : "SignIn";
    return (
        <div className={styles.container}>
        <header> <button onClick={buttonHandler}>{textButton}</button> </header>

         <main className={styles['form-wrapper']}> {state ? <SignIn sendData={getData}/> : <SignUp sendData={getData}/>}{error && <div className={styles['error-container']}>{error.message}</div>}
         </main>
        </div>
    );
}

export default Home;