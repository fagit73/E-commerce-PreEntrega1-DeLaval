import './Footer.css';
import { RiWhatsappFill, RiInstagramFill, RiFacebookFill, RiTwitterFill } from 'react-icons/ri';

export default function Footer() {
    const socials = [
        {
            id: 1,
            name: 'Instagram',
            link: 'https://www.instagram.com/ro.less_/'
        },
        {
            id: 2,
            name: 'Facebook',
            link: 'https://www.facebook.com/'
        },
        {
            id: 3,
            name: 'Twitter',
            link: 'https://twitter.com/'
        }
    ];

    return (
        <footer className='footer' id='contact-us'>
            <div className='footer__container'>
                <img 
                    src='../src/assets/logo.jpg' 
                    alt='Ro.less' 
                    className='footer__logo' 
                />
                <section className='footer__newsletter'>
                    <p className='footer__newsletter__subtitle'>
                        ¡Obtén un 10% de descuento en tu próximo pedido!
                    </p>
                    <h4 className='footer__newsletter__title'>
                        Consultanos via Whatsapp por ventas Mayoristas
                    </h4>
                </section>
                <section className='footer__contact'>
                    <h4 className='footer__contact__title'>
                        Contáctenos
                    </h4>
                    <a href='/' className='footer__contact__phone'>
                        <RiWhatsappFill className='footer__contact__icon'/>
                        +54 15 64838386
                    </a>
                    <h4 className='footer__contact__title'>
                         Síganos
                    </h4>
                    <ul className='footer__contact__socials'>
                        {socials.map((social) => {
                            return (
                                <li className='footer__contact__social' key={social.id}>
                                    <a 
                                        href={social.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        {social.name === 'Instagram' ? <RiInstagramFill />
                                        : social.name === 'Facebook' ? <RiFacebookFill />
                                        : <RiTwitterFill />}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </section>
            </div>
            <section className='footer__credits'>
                <p className='footer__credits__copyright'>
                    © 2024 Ro.less. All rights reserved.
                </p>
            </section>
        </footer>
    );
}
