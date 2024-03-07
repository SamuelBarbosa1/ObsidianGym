import React from 'react'
import "./Hero.css"
import hero_image from "../../assets/hero_image.png"
import hero_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"
import { motion } from "framer-motion"
import NumberCounter from "number-counter";
import Header from '../Header/Header'
import { Link } from "react-scroll";

const Hero = () => {
  const transition = { duration: 3, type: "spring" };
  const mobile = window.innerWidth<=768? true:false;
  return (
    <div className="hero" id='home'>
      <div className="blur hero-blur"></div>

      <div className="left-h">
        <Header/>
        {/* the best ad */}
        <div className="the-best">
          <motion.div
            initial={{left: mobile? "178px": '238px' }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>O MELHOR CLUBE DE FITNESS DA CIDADE</span>
        </div>
        {/* Hero text */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Forma </span>
            <span>Seu</span>
          </div>
          <div>
            <span>Shape Ideal</span>
          </div>
          <div>
            <span>
            Aqui vamos ajudá-lo a moldar e construir seu corpo ideal e
               viva sua vida ao máximo
            </span>
          </div>
        </div>

        {/* experience figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={250} start={100} delay={6} preFix="+" />
            </span>
            <span>treinadores especializados</span>
          </div>
          <div>
            <span>
              <NumberCounter end={3000} start={1000} delay={2} preFix="+" />
            </span>
            <span>Membros aderiram</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} delay={2} preFix="+" />
            </span>
            <span>programas de fitness</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-btns">
          <button className="btn">Iniciar</button>
          <button className="btn">Saber mais</button>
        </div>
      </div>

      {/* Right Side */}
      <div className="right-h">
      <Link className="btn"
              to="contact"
              spy={true}
              smooth={true}
            >
              Junte-se agora
            </Link>

        {/* heart rate */}
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={heart} alt="" />
          <span>Freng Cardíaca</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img className="hero-img" src={hero_image} alt="" />
        <motion.img
            initial={{right: mobile? "11rem": '11rem' }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          className="hero-back"
          src={hero_back}
          alt=""
        />

        {/* calories */}
        <motion.div
          initial={{ right: "32rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={calories} alt="" />
          <div>
            <span>Calorias queimadas</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
