/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from './logos/png__logo.png';
import tg from './logos/telegram_l.png';
import inst from './logos/instagram_l.png';
import fb from './logos/facebook_l.png';
import './styles/index.css';

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="footer__main">
                    <div className="main__left">
                        <a href="" className="header__logo">
                            <img src={logo} width={75} height={52} alt="logo" />
                        </a>
                        <p class="main__text">RBC Group - компания, предоставляющая комплексные программные решения по
                            автоматизации и усовершенствованию бизнес-процессов предприятий и банков на основе
                            информационных систем управления предприятием от лучших мировых производителей.</p>
                        <p class="">
                            OОО «RBC Group Solutions» 100050 Узбекистан г.Ташкент Мирзо-Улугбекский р-н проспект
                            Мирзо-Улугбек 56Б, БЦ Бастион
                        </p>
                        <div className="main__link">
                            <a href="tel:+998 97 734-64-61">+998 97 734-64-61</a>
                            <a href="mailto:info@rbc-group.uz">info@rbc-group.uz</a>
                        </div>
                        <div className="main__social">
                            <a href="" className="social__icon"><img src={fb} alt="logo" /></a>
                            <a href="" className="social__icon"><img src={inst} alt="logo" /></a>
                            <a href="" className="social__icon"><img src={tg} alt="logo" /></a>
                        </div>
                    </div>
                    <div className="main__right">
                        <iframe src="https://yandex.uz/map-widget/v1/-/CCURuDR-hC" width={500} height={350} frameBorder={1} allowFullScreen="true" style={{ position: 'relative' }} />
                    </div>
                </div>
                <div className="footer__tel">
                    <p className="footer_title">Офисы в других городах</p>
                    <ul className="footer__ul">
                        <li className="footer__link"><a href="tel:+7 495 505-6365"> +7 495 505-6365 (Москва)</a></li>
                        <li className="footer__link"><a href="tel:+7 812 714-3770">+7 812 714-3770 (Петербург)</a></li>
                        <li className="footer__link"><a href="tel:+7 727 258-1712">+7 727 258-1712 (Алматы)</a></li>
                        <li className="footer__link"><a href="tel:+38 044 383-1955">+38 044 383-1955 (Киев)</a></li>
                        <li className="footer__link"><a href="tel:+99 412 555-6070">+99 412 555-6070 (Баку)</a></li>
                    </ul>
                    <hr />
                    <p className="footer__last">
                        © 2023 RBC Group Solutions. Все права защищены.
                    </p>
                </div>
            </div>
        </section>
    )
}

function Foot() {
    return (
        <div className="Foot">
            <Footer />
        </div>
    )
}

export default Foot;