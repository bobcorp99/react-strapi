import React, { useState } from "react";
import axios from 'axios'
const http = axios.create({
  baseURL: 'http://localhost:1337/api/upload/files/'
});

const Feedback = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        tel: '',
        text: '',
    })

    function handle(e) {
        const newData={...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData);
    }

    return (
        <section className='feedback'>
            <div className="container">
                <div className="feedback__title">
                    <h3>Обратная связь</h3>
                    <i className='feedback__next'></i>
                </div>
                <div className="feedback__main">

                    <form className="feedback__right">
                        <div className="feedback__box">
                            <p className="feedback__text">Ф.И.О</p>
                            <input type='text' className="feedback__contact" placeholder='Фамилия Имя Отчество' onChange={(e) => handle(e)} id='name' value={data.name}></input>
                        </div>
                        <div className="feedback__box">
                            <p className="feedback__text"></p>
                            <input className="feedback__contact" placeholder='example@gmail.com' type='email' onChange={(e) => handle(e)} id='email' value={data.email}></input>
                        </div>
                        <div className="feedback__box">
                            <p className="feedback__text"></p>
                            <input className="feedback__contact" placeholder='+99898 765-43-21' type='tel' onChange={(e) => handle(e)} id='tel' value={data.tel}></input>
                        </div>
                        <div className="feedback__box">
                            <textarea name="contact" placeholder='Письмо' cols="30" rows="10" onChange={(e) => handle(e)} id='text' value={data.text}></textarea>
                        </div>
                        <div className="feedback__button" onClick={console.log('click')}>
                            <a>Отправить</a>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    )
}

function Feed() {
    return (
        <div className="Feed">
            <Feedback />
        </div>
    )
}

export default Feed;