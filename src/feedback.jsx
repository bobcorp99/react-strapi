// import './styles/feedback'

const Feedback = () => {
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
                            <input type='text' className="feedback__contact" placeholder='Фамилия Имя Отчество'></input>
                        </div>
                        <div className="feedback__box">
                            <p className="feedback__text"></p>
                            <input className="feedback__contact" placeholder='example@gmail.com' type='email'></input>
                        </div>
                        <div className="feedback__box">
                            <p className="feedback__text"></p>
                            <input className="feedback__contact" placeholder='+99898 765-43-21' type='tel' ></input>
                        </div>
                        <div className="feedback__box">
                            <textarea name="contact" placeholder='Письмо' id="" cols="30" rows="10" ></textarea>
                        </div>
                        <div className="feedback__button">
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