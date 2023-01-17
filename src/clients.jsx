import './styles/clients.css'
// import { getImages } from '../api'
import hilton from './logos/Hilton.png'
import petro from './logos/PetroChina.png'
import xtv from './logos/xtv.png'
import qai from './logos/qaimaq.png'
import ham from './logos/hamkorbank.png'
import sber from './logos/sberbank.png'
import air from './logos/air-astana.jpg'
import euro from './logos/euroasianbank.jpg'
import iiv from './logos/iiv.jpg'
import ipak from './logos/ipak-yoli.png'
import kcell from './logos/kcell.jpg'
import kar from './logos/karachaganak.jpg'
import fac from './logos/factoring.png'
import kz from './logos/kz.png'
import luk from './logos/lukoil.png'

const Clients = () => {
    return (
        <section classNameName="clients">
            <div classNameName="container">
                <h3 classNameName="clients__title">Наши клиенты</h3>
                <div className="slider">
                    <div className="slide-track">
                        <div className="slide">
                            <img src={hilton} height="100px" width="100px" alt="" />
                        </div>
                        <div className="slide">
                            <img src={fac} height="100px" width="100px" alt="" />
                        </div>
                        <div className="slide">
                            <img src={kz} height="100px" width="100px" alt="" />
                        </div>
                        <div className="slide">
                            <img src={luk} height="100px" width="100px" alt="" />
                        </div>
                        <div className="slide">
                            <img src={petro} height="100px" width="100px" alt="" />
                        </div>
                        <div className="slide">
                            <img src={xtv} height="100px" width="100px" alt="" />
                        </div>
                        <div className="slide">
                            <img src={qai} height="100px" width="100px" alt="" />
                        </div>
                        <div className="slide">
                            <img src={ham} height="100px" width="100px" alt="" />
                        </div>
                        <div className="slide">
                            <img src={sber} height="100px" width="100px" alt="" />
                        </div>
                        <div className="slide">
                            <img src={kar} height="100px" width="100px" alt="" />
                        </div>
                        <div className="slide">
                            <img src={air} height="100px" width="100px" alt="" />
                        </div>
                        <div className="slide">
                            <img src={euro} height="100px" width="100px" alt="" />
                        </div>
                        <div className="slide">
                            <img src={iiv} height="100px" width="100px" alt="" />
                        </div>
                        <div className="slide">
                            <img src={ipak} height="100px" width="100px" alt="" />
                        </div>
                        <div className="slide">
                            <img src={kcell} height="100px" width="100px" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Client() {
    return (
        <div classNameName="Client">
            <Clients />
        </div>
    )
}

export default Client;