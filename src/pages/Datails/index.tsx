import React, { useState } from 'react';


import Select from 'react-select'

import '../../styles/global.css';


//import { Container, Text } from './styles';
import styles from './index.module.css';

import logo from '../../assets/logoSvg.svg';
import home from '../../assets/homeSvg.svg';
import logoFooter from '../../assets/logoFooter.svg';
import homeSlid from '../../assets/homeSlid.svg';

// icones
import {Bed} from 'phosphor-react';


import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';


import Footer from '../../components/footer';

import Slider from "react-slick";

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


export function Datails() {

  const [sliderValue, setSliderValue] = useState<number>(50);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(event.target.value));
  };



    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
      };
  

  return (

    <>  
      <div className={styles.container}> 
        <div className={styles.contentLeft}>
          <img src={logo} alt="" />
          <div className={styles.btnHeader}>
            <button className={styles.btnHeaderBtn1}><a href="#">Área do próprietario</a></button> 
            <button className={styles.btnHeaderBtn}><a  href="#">Anunciar meu imóvel</a></button>
          </div>
        </div> 

       
        
{/* slider */}
      <div className={styles.containerSlider}>
        <div className={styles.sectionSlider}>
          <h1>Apartamento Alto padrão</h1>
            <Slider {...settings}>
              <div className={styles.boxSlider}>
                <img src={homeSlid} alt="" />
              </div>
              <div className={styles.boxSlider} >
                <img src={homeSlid} alt="" />
                
              </div>
              <div className={styles.boxSlider}>
                <img src={homeSlid} alt="" />
                
              </div>
              <div className={styles.boxSlider}>
                <img src={homeSlid} alt="" />
                
              </div>
              <div className={styles.boxSlider}>
                <img src={homeSlid} alt="" />
                
              </div>
              <div className={styles.boxSlider}>
                <img src={homeSlid} alt="" />
                
              </div>
            </Slider>
          </div>
        </div>
      </div>


      <div className={styles.content}>
        <span><a href="#"> Rua João Guilherme Menezes / Floresta - PE</a></span>
        <div className={styles.characteristics}>
            
              <div className={styles.miniBox}>
              <a href="#">
                  <Bed size= {28}/> <span>3</span> <div> <h3>Qartos</h3></div>
                </a>
              </div>
             
              <div className={styles.miniBox}>
                <a href="#">
                <Bed size= {28}/> 
                  <span>3</span> 
                  <div> <h3>Banheiros</h3></div>
                </a>
              </div>
              <div className={styles.miniBox}>
                <a href="#">
                  <Bed size= {28}/> 
                  <span>320m²</span> 
                  <div> <h3>Areas</h3></div>
                </a>
              </div>
              <div className={styles.miniBox}>
                <a href="#">
                  <Bed size= {28}/> <span>3</span> <div> <h3>Garagem</h3></div>
                </a>
              </div>
          <div className={styles.largeBox}>
            
              <a href="#">
                 <span>Preço</span> <div> <h3>R$ 1.200,00</h3></div>
                <button><a href="#">Negociar</a></button>
              </a>
            
          </div>
        </div>

        {/* ListCharacteristc */}
        <div className={styles.editH1}>
          <h1>Características</h1>
          <div className={styles.listCharacteristic}>
              <ul>
                <li><a href="#">Ar condicionado</a></li>
                <li><a href="#">Área de serviço</a></li>
                <li><a href="#">Armário área de serviço</a></li>
                <li><a href="#">Armário banheiro</a></li>
                <li><a href="#">Armário closet</a></li>
                <li><a href="#">Armário corredor</a></li>
                <li><a href="#">Armário quarto</a></li>
                <li><a href="#">Armário sala</a></li>
                
              </ul>
            </div>
        </div>
      </div>
    {/* ListCharacteristics */}

    {/* Slid@ */}

    <div className={styles.container}>
      <div className={styles.sectionContainer}>
        
        <div className={styles.sectionSlider}>
          <h1>Imóveis relacionados</h1>
            <Slider {...settings}>
              <div className={styles.boxSlider}>
                <img src={homeSlid} alt="" />
                <h3>teste teste teste</h3>
                <h3>teste</h3>
              </div>
              <div className={styles.boxSlider} >
                <img src={homeSlid} alt="" />
                <h3>teste teste teste</h3>
                <h3>teste</h3>
              </div>
              <div className={styles.boxSlider}>
                <img src={homeSlid} alt="" />
                <h3>teste teste teste</h3>
                <h3>teste</h3>
              </div>
              <div className={styles.boxSlider}>
                <img src={homeSlid} alt="" />
                <h3>teste teste teste</h3>
                <h3>teste</h3>
              </div>
              <div className={styles.boxSlider}>
                <img src={homeSlid} alt="" />
                <h3>teste teste teste</h3>
                <h3>teste</h3>
              </div>
              <div className={styles.boxSlider}>
                <img src={homeSlid} alt="" />
                <h3>teste teste</h3>
                <h3>teste teste</h3>
              </div>
            </Slider>
          </div>
        </div>
      <div >
    </div>
  </div>

      <div className={styles.paddingFooter}></div>
    
    <Footer/>
    </>

    );
}

export default Datails;

