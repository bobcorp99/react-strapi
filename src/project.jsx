// import React, { useState, useEffect } from 'react'
// import './styles/project.css'
// import { getProjects } from './api'

// // eslint-disable-next-line import/no-anonymous-default-export
// export default () => {
//     const [projectsList, setProjects] = useState([])

//     useEffect(() => {
//         getProjects().then(data => {
//             setProjects(data)
//         })
//     }, [])

//     return (
//         <section className="projects">
//             {
//                 projectsList.map(project => (
//                     <div className="container container__projects">
//                         <div className="projects__title">
//                             <h3>Проекты / Работы</h3>
//                         </div>
//                         <div className="projects__main">
//                             <div className="projects__content">
//                                 <p className="projects__text">
//                                     {project.attributes.minidescr}
//                                     <span></span>
//                                 </p>
//                                 <a className='projects__span' href={`/detailed/${project.id}`}>Подробнее {/* &rarr; */}</a>
//                             </div>
//                         </div>
//                     </div>
//                 ))
//             }
//         </section>
//     )
// }


// function Project() {
//     return (
//         <div className="Projcect">
//             <Project />
//         </div>
//     )
// }

// // export Project;