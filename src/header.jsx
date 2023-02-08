/* eslint-disable jsx-a11y/anchor-is-valid */
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/index.css'
import logo from './logos/png__logo.png'
import menu from './logos/menu.png'

const Header = () => {
  return (
    <section className='Header'>
      <div className="container">
        <a className='header__logo'><img src={logo} alt="logo" width={75} height={52} /></a>
        <nav className='header__menu'>
          <ul className='menu__list'>
            <li className='menu__item'><a href="" className='menu__link'>Главная</a></li>
            <li className='menu__item'><a href="" className='menu__link'>Услуги</a></li>
            <li className='menu__item'><a href="" className='menu__link'>Продукты</a></li>
            <li className='menu__item'><a href="" className='menu__link'>Проекты</a></li>
            <li className='menu__item'><a href="" className='menu__link'>Клиенты</a></li>
            <li className='menu__item'><a href="" className='menu__link'>Контакты</a></li>
          </ul>
          <button className='menu__nav-button'>
            <img src={menu} alt="logo" />
          </button>
        </nav>
      </div>
    </section>
  );
}

function Head() {
  return (
    <div className="Head">
      <Header />
    </div>
  )
}
export default Head;
