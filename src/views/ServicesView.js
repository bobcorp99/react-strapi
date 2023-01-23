import React, { useState, useEffect } from 'react'
import { getServices } from '../api'
import { getProducts } from '../api'
import { getProjects } from '../api'
// import { postFeedback } from '../api'
import { getImages } from '../api'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [servicesList, setServices] = useState([])

  useEffect(() => {
    getServices().then(data1 => {
      setServices(data1)
    })
  }, [])

  // const [imageList, setImages] = useState([])
  
  // useEffect(() => {
  //   getImages().then(data => {
  //     setImages(data)
  //   })
  // }, [])

  const [productsList, setProducts] = useState([])

  useEffect(() => {
    getProducts().then(data2 => {
      setProducts(data2)
    })
  }, [])

  const [projectsList, setProjects] = useState([])

  useEffect(() => {
    getProjects().then(data3 => {
      setProjects(data3)
    })
  }, [])

  // const [feedbacksList, setFeedbacks] = useState([])

  // useEffect(() => {
  //   postFeedback().then(data4 => {
  //     setFeedbacks(data4)
  //   })
  // }, [])

  return (
    <div>
      <div className='container'>
        <h3>Услуги</h3>

        <div className='service'>
          {
            servicesList.map(service => (
              // imageList.map(image => (
              <div className='service__main'>
                <h4 className='service__main-title'>{service.attributes.title}</h4>
                {/* <img src={image.small.url} alt="photo" /> */}
                <div className='service__main-descr'>{service.attributes.miniDescr}</div>
                <a className='service__main-link' href={`/detailed/${service.id}`}>Подробнее &rarr;</a>
              </div>
            ))

            // ))
          }
        </div>

        <h3>Продукты</h3>

        <div className='product'>
          {
            productsList.map(product => (
              <div className='product__main'>
                <h4 className='product__main-title'>{product.attributes.title}</h4>
                <div className='product__main-descr'>{product.attributes.miniDescr}</div>
                <a className='product__main-link' href={`/detailed/${product.id}`}>Подробнее &rarr;</a>
              </div>
            ))
          }
        </div>
      </div>

      <div className="projects">
        <div className="container container__projects">
          <div className="projects__title">
            <h3>Проекты / Работы</h3>
          </div>
          <div className="projects__main">
            {
              projectsList.map(project => (
                <div className="projects__content">
                  <div className="projects__text">
                    {project.attributes.miniDescr}
                    <span> {project.attributes.title}</span>
                  </div>
                  <div className="feedback__button projects__span">
                    <a href={`/detailed/${project.id}`}>Подробнее{/* &rarr; */}</a>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      {/* <section className='feedback'>
        <div className="container">
          <div className="feedback__title">
            <h3>Обратная связь</h3>
            <i className='feedback__next'></i>
          </div>
          <div className="feedback__main">
            {
              feedbacksList.map(feedback => (
                <div className="feedback__right">
                  <div className="feedback__box">
                    <p className="feedback__text">Ф.И.О</p>
                    <input className="feedback__contact" placeholder='Фамилия Имя Отчество' type='text'></input>
                  </div>
                  <div className="feedback__box">
                    <p className="feedback__text"></p>
                    <input className="feedback__contact" placeholder='example@gmail.com' type='email'></input>
                  </div>
                  <div className="feedback__box">
                    <p className="feedback__text"></p>
                    <input className="feedback__contact" placeholder='+99898 765-43-21' type='tel'></input>
                  </div>
                  <div className="feedback__box">
                    <textarea name="contact" placeholder='Письмо' id="" cols="30" rows="10"></textarea>
                  </div>
                  <div className="feedback__button">
                    <a>Отправить</a>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section> */}

    </div>
  )
}

