/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
import React, { useState } from 'react'
// import postFeedback from '../api'
const http2 = axios.create({
    baseURL: 'http://localhost:1337//api/feedbacks'
})
    

function PostRequest() {
    const [data, setData] = useState({
        name: '',
        email: '',
        tel: '',
        text: '',
    });

    function handle(e) {
        const newData={...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData);

    }
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const resp = await axios.post(http2, { name: name, email: email, tel: tel, text: text });
    //         console.log(resp.data);
    //     } catch (error) {
    //         console.log(error.responce);
    //     }
    // }

    // useEffect(() => {
    //     postFeedback().then(data => {
    //         setFeedbacks(data)
    //     })
    // }, [])

    return (
        <section className='feedback'>
            <div className="container">
                <div className="feedback__title">
                    <h3>Обратная связь</h3>
                    <i className='feedback__next'></i>
                </div>
                <form className="feedback__main">

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
                            <imput name="contact" placeholder='Письмо' cols="30" rows="10" onChange={(e) => handle(e)} id='text' value={data.text}></imput>
                        </div>
                        <div className="feedback__button">
                            <a onClick>Отправить</a>
                        </div>
                    </form>

                </form>
            </div>
        </section>
    )
}

export default PostRequest();

// const Feed = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [tel, setTel] = useState('');
//     const [text, setText] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         addPosts(name, email, tel, text)
//     };

//     const addPosts = (name, email, tel, text) => {
//         http2.post('', {
//                 name: name,
//                 email: email,
//                 tel: tel,
//                 text: text,
//             })
//     }
// }

// export default Feed;