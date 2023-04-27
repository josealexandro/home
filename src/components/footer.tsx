import React, { useState } from 'react';


import Select from 'react-select'




//import { Container, Text } from './styles';
import styles from './footer.module.css';

import logo from '../../assets/logoSvg.svg';
import home from '../../assets/homeSvg.svg';
import logoFooter from '../assets/logoFooter.svg';
import homeSlid from '../../assets/homeSlid.svg';



export function Footer() {
    return (

<>
    <div className={styles.footer}>
        <div className={styles.titleFooter}>
          <h1>Faça dos seus sonhos uma <span>realidade</span> </h1>
          <button><a href="#">Procurar</a></button>
        </div>
        <div className={styles.borderFooter}></div>
          <div className={styles.contentFooterContainer}>
          
              <div className={styles.logoFooter}>
                <img src={logoFooter} alt="" />
              </div>
              
                    <div className={styles.listfooter}>
                      <div className={styles.listFooterOne}>
                        <ul>
                          <h2>teste de texto</h2>
                          <li><a href="#">Texto Aqui</a></li>
                          <li><a href="#">Texto Aqui</a></li>
                          <li><a href="#">Texto Aqui</a></li>
                          <li><a href="#">Texto Aqui</a></li>
                        </ul>
                      </div>

                      <div className={styles.listFooterOne}>
                        <ul>
                          <h2>teste de texto</h2>
                          <li><a href="#">Texto Aqui</a></li>
                          <li><a href="#">Texto Aqui</a></li>
                          <li><a href="#">Texto Aqui</a></li>
                          <li><a href="#">Texto Aqui</a></li>
                        </ul>
                      </div>
                      <div className={styles.listFooterOne}>
                        <ul>
                          <h2>teste de texto</h2>
                            <li><a href="#">Texto Aqui</a></li>
                            <li><a href="#">Texto Aqui</a></li>
                            <li><a href="#">Texto Aqui</a></li>
                            <li><a href="#">Texto Aqui</a></li>
                          </ul>
                    
                      </div>
                    </div>
        </div>
    </div>
</>  
  );
}

export default Footer;