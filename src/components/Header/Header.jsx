import './Header.css';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

export default function Header() {
    return (
        <>
        <header className='header' id='home'>
            <img 
                className='header__img' 
                src='https://i.postimg.cc/c1FwZ9fS/Carousel1.jpg' 
                alt='Indumentaria Femenina'
            />
            <section className='header__text'>
                <h1 className='header__title'>
                    Fashion Tips
                </h1>
                <p className='header__description'>
                    Productos <span className='bold'>que cada mujer</span>, deberia tener.!
                </p>
                <p className='header__description'>
                    Indumentaria deportiva femenina <span className='bold'>calzas seamless y más. Bienvenidos....</span>
                </p>
                
            </section>
        </header>
        
        </>
    )
}