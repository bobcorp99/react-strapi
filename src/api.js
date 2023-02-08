import axios from 'axios'
const http = axios.create({
  baseURL: 'http://localhost:1337/api/'
});

export function getServices() {
  return new Promise((resolve, reject) => {
    http.get('articles', {
      params: {
        fields: ['title', 'miniDescr']
      }
    }).then(response => {
      resolve(response.data.data)
    }).catch(error => reject(error))
  })
}

export function getService(serviceId) {
  return new Promise((resolve, reject) => {
    http.get(`articles/${serviceId}`).then(response => {
      resolve(response.data.data)
    }).catch(error => reject(error))
  })
}

//Img ------------------------------------------------------------>

export function getImages(imagesId) {
  return new Promise((resolve, reject) => {
    http.get(`upload/files/${imagesId}`, {
      params: {
        fields: ['url']
      }
    }).then(responce => {
      resolve(responce.data.daata)
    }).catch(error => reject(error))
  })
}

// export function getImage(imageId) {
//   return new Promise((resolve, reject) =>{
//     http.get(`upload/files/${imageId}`).then(responce => {
//       resolve(responce.data.data)
//     }).catch(error => reject(error))
//   })
// }

//Feedbacks ------------------------------------------------->

export function postFeedback(feedback) {
  return new Promise((resolve, reject) => {
    http.post(`feedbacks`, { data: feedback }).then(response => {
      resolve(response.data.data)
    }).catch(error => reject(error))
  })
}

// Products -------------------------------------------------------->
export function getProducts() {
  return new Promise((resolve, reject) => {
    http.get(`products`, {
      params: {
        fields: ['title', 'miniDescr',]
      }
    }).then(responce => {
      resolve(responce.data.data)
    }).catch(error => reject(error))
  })
}

export function getProduct(productId) {
  return new Promise((resolve, reject) => {
    http.get(`products/${productId}`).then(responce => {
      resolve(responce.data.data)
    }).catch(error => reject(error))
  })
}

//Projects --------------------------------------------------------------->
export function getProjects() {
  return new Promise((resolve, reject) => {
    http.get(`project-works`, {
      params: {
        fields: ['miniDescr', 'title']
      }
    }).then(responce => {
      resolve(responce.data.data)
    }).catch(error => reject(error))
  })
}