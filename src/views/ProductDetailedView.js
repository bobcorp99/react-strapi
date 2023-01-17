/* eslint-disable jsx-a11y/anchor-is-valid */
import ReactMarkdown from 'react-markdown';
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { getProduct } from '../api'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { id } = useParams()

  const [productDetail, setProductDetail] = useState({
    id: null,
    attributes: {}
  })

  const back = () => {
    window.history.back()
  }

  useEffect(() => {
    getProduct(id).then(data => {
      setProductDetail(data)
    })
  }, [id])

  return (
    <>
      <div className='container'>
        <h4 className='product__main-title'>{productDetail.attributes.title}</h4>
        <p className='product__main-text'>
          <ReactMarkdown children={productDetail.attributes.description} />
        </p>
        {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <div className='product__main-link'>
          <a href="#" onClick={back}>&larr; Back</a>
        </div>
      </div>
    </>
  )
}