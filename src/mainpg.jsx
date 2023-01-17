import './styles/index.css'
// import next from './logos/next'
import herobg from './logos/header__page.jpg'

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__main">
                    <h1 className="hero__main-title">Системы управления<span className="hero__main-span">бизнесом</span></h1>
                    <p className='hero__main-miniTitle'>Разработка <i className="hero__span"/> Внедрение <i
                        className="hero__span"/> Консалтинг <i className="hero__span"/> Сопровождение</p>
                </div>
                <i class="hero__next"/>
                <div class="hero__page">
                    <img src={herobg} alt="logo"/>
                </div>
            </div>
        </section>
    )
}

function Her() {
    return (
        <div className="Her">
            <Hero />
        </div>
    )
}

export default Her;