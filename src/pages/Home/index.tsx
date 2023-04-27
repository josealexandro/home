import React, { useState } from 'react';


import Select from 'react-select'

import '../../styles/global.css';


//import { Container, Text } from './styles';
import styles from './index.module.css';

import logo from '../../assets/logoSvg.svg';
import home from '../../assets/homeSvg.svg';
import logoFooter from '../../assets/logoFooter.svg';
import homeSlid from '../../assets/homeSlid.svg';



import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';


import Slider from "react-slick";
import Footer from '../../components/footer';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


export function Home() {

  const [sliderValue, setSliderValue] = useState<number>(50);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(event.target.value));
  };



    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        
      };
  

  return (

  <>  
    <div className={styles.container}> 
        <div className={styles.contentLeft}>
          <img src={logo} alt="" />
          <div className={styles.btnHeader}>
          <button className={styles.btnHeaderBtn}><a href="#">Área do próprietario</a></button> 
            <button className={styles.btnHeaderBtn}><a  href="#">Anunciar meu imóvel</a></button>
          </div>
        </div> 

          <div className={styles.sectionHome}>
            <div className={styles.sectionHomeImg}>
              <div className={styles.conteudo}>
                <h1>Encontre o imóvel ideal para você</h1>
                  <h3>Venda, compre ou alugue imóveis. 
                  Você é um proprietario? Então, faça seu cadastro de maneira rápida e anucie seus imóveis. 
                    Caso esteja à procura de um imóvel, digite o local e tenha um boa negociação!</h3>
                  <div className={styles.btnFind}>
                    <input type="text" placeholder='Procurar localização' />
                    <a href="#">Procurar</a> 
                  </div>
              </div>
              <div className={styles.contentright}>
                <img src={home} alt="" />
             </div>
            </div>
               

          </div> 
      

    </div>

    {/* Selects */}

    <div className={styles.containerTwo}>

      <h1 className={styles.h1Find}>Encontrar imóvel</h1>


      <div className={styles.boxSelect}>
            <div className={styles.sectionFindHomeOne}>
              <h4>O que você precisa?</h4>
              <Select placeholder='Comprar' options={options}/>
            </div>
            <div className={styles.sectionFindHomeTwo}>
              <h4>Onde?</h4>
              <Select placeholder='' options={options} />
            </div>
            <div className={styles.sectionFindHomeThree}>
              <h4>Tipo de imovel?</h4>
              <Select placeholder='' options={options} />
            </div>
          

          <div className={styles.containerThree}>
             <div className={styles.selectBtnTwo}>  
                <Select   placeholder='Min' options={options} />
                    <Select   placeholder='Max' options={options} />
                    
                    <div className={styles.range}>
                      <input
                      type="range"
                      min="100"
                      max="500"
                      value={sliderValue}
                      onChange={handleSliderChange}
                      />
                      <p>{sliderValue}</p>
                    </div>
                
                  <Select placeholder='Mais filtros' options={options} />
                  
                    <button> <a  href="#">Buscar</a> </button>  
              </div>
          </div>
        </div> 
    </div>

{/* Slider */}

    <div className={styles.container}>
      <div className={styles.sectionContainer}>
        
        <div className={styles.sectionSlider}>
          <h1>Imóveis populares</h1>
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

{/* slider2 */}

<div className={styles.container}>
      <div className={styles.sectionContainer}>
        
        <div className={styles.sectionSlider}>
          <h1>Apartamentos em alta</h1>
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

   

    <Footer/>
</>  
  );
}

export default Home;