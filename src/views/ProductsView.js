import React, { useState, useEffect } from 'react'
import { getProducts } from './api'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [productsList, setProducts] = useState([])

  useEffect(() => {
    getProducts().then(data => {
      setProducts(data)
    })
  }, [])

  return (
    <div className='container'>
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
  )
}