/* eslint-disable jsx-a11y/anchor-is-valid */
import ReactMarkdown from 'react-markdown';
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { getService } from '../api'
// import { getProduct } from '../api'


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { id } = useParams()

  const [serviceDetail, setServiceDetail] = useState({
    id: null,
    attributes: {}
  })

  // const [productDetail, setProductDetail] = useState({
  //   id: null,
  //   attributes: {}
  // })
  
  const back = () => {
    window.history.back()
  }

  useEffect(() => {
    getService(id).then(data => {
      setServiceDetail(data)
    })
  }, [id])

  // useEffect(() => {
  //   getProduct(id).then(data => {
  //     setProductDetail(data)
  //   })
  // }, [id])

  return (
    <>
      <div className='container'>
        <h4 className='service__main-title'>{serviceDetail.attributes.title}</h4>
        <p className='service__main-text'>
          <ReactMarkdown children={serviceDetail.attributes.description} />
        </p>
        {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <div className='feedback__button back__button' onClick={back}>
          <a href="#" >Назад</a>
        </div>

        {/* <h4 className='product__main-title'>{productDetail.attributes.title}</h4>
        <p className='product__main-text'>
          <ReactMarkdown children={productDetail.attributes.description} />
        </p>
        {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <div className='product__main-link'>
          <a href="#" onClick={back}>&larr; Back</a>
        </div> */}

      </div>
    </>
  )
}