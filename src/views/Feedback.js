/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
// import axios from 'axios'
// import React, { useState, useEffect } from 'react'
// import postFeedback from '../api'
// const http = 'http://localhost:1337/api/'

// const PostRequest = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [tel, setTel] = useState('');
//     const [text, setText] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const resp = await axios.post(http + 'feedbacks/data', { name: name, email: email, tel: tel, text: text });
//             console.log(resp.data);
//         } catch (error) {
//             console.log(error.responce);
//         }
//     }

//     // useEffect(() => {
//     //     postFeedback().then(data => {
//     //         setFeedbacks(data)
//     //     })
//     // }, [])

    // return (
    //     <section className='feedback'>
    //         <div className="container">
    //             <div className="feedback__title">
    //                 <h3>Обратная связь</h3>
    //                 <i className='feedback__next'></i>
    //             </div>
    //             <div className="feedback__main">

    //                 <form className="feedback__right">
    //                     <div className="feedback__box">
    //                         <p className="feedback__text">Ф.И.О</p>
    //                         <input type='text' className="feedback__contact" placeholder='Фамилия Имя Отчество' value={name} onChange={(e) => setName(e.target.value)}></input>
    //                     </div>
    //                     <div className="feedback__box">
    //                         <p className="feedback__text"></p>
    //                         <input className="feedback__contact" placeholder='example@gmail.com' type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
    //                     </div>
    //                     <div className="feedback__box">
    //                         <p className="feedback__text"></p>
    //                         <input className="feedback__contact" placeholder='+99898 765-43-21' type='tel' value={tel} onChange={(e) => setTel(e.target.value)}></input>
    //                     </div>
    //                     <div className="feedback__box">
    //                         <textarea name="contact" placeholder='Письмо' id="" cols="30" rows="10" value={text} onChange={(e) => setText(e.target.value)}></textarea>
    //                     </div>
    //                     <div className="feedback__button">
    //                         <a onClick={handleSubmit}>Отправить</a>
    //                     </div>
    //                 </form>

    //             </div>
    //         </div>
    //     </section>
    // )
// }

// export default PostRequest();