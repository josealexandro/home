import React from "react";


import styles from './index.module.css';

import  '../../styles/global.css';

import logo from '../../assets/logoSvg.svg';




export function SignUp() {
    return (
        <>
            <div className={styles.body}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <img src={logo} alt="" />
                        <a href="#"> Acesse sua conta</a>
                        <label>Email</label>
                        <input type="text" placeholder="Digite sua email" />
                        <label>Senha</label>
                        <input type="passWord" placeholder="******"/>
                        <button>Continuar</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;