import React, { useRef, useState } from "react";
import axios from 'axios'
const http = axios.create({
    baseURL: 'http://localhost:1337/api/upload/files/'
});

const Feedback = () => {
    const inputRef = useRef();

    const [updated, setData] = useState([
        // name: '',
        // email: '',
        // tel: '',
        // text: '',
    ])

    const handleClick = () => {
        setData(inputRef.current.value)
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
                            <input
                                type="text"
                                id="name"
                                ref={inputRef}
                                className="feedback__contact"
                                placeholder='Фамилия Имя Отчество'
                            />
                        </div>
                        <div className="feedback__box">
                            <p className="feedback__text"></p>
                            <input
                                type="email"
                                id="email"
                                className="feedback__contact"
                                placeholder="example@mail.com"
                                ref={inputRef}
                            />
                        </div>
                        <div className="feedback__box">
                            <p className="feedback__text"></p>
                            <input
                                type="tel"
                                id="tel"
                                className="feedback__contact"
                                placeholder="+99898 765 43 21"
                                ref={inputRef}
                            />
                        </div>
                        <div className="feedback__box">
                            <textarea name="contact" placeholder='Письмо' cols="30" rows="10" id='text'></textarea>
                        </div>
                        <div className="feedback__button" onClick={handleClick}>
                            <a>Отправить</a>
                            {console.log(updated)}
                        </div>
                    </form>

                </div>
            </div>
        </section>
    )
}

// function Feed() {
//     return (
//         <div className="Feed">
//             <Feedback />
//         </div>
//     )
// }

export default Feedback;