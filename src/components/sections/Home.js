import React from 'react'
import s from '../styles/Home.module.css'


const Home = () => {
return (
    <div className={`${s.root}`}>
        <div className={s.post}>
        <div className={`${s.titulo} display-5 fw-bold`}>
        La fiesta Bresh vuelve a Mendoza
        </div>
        <div className={`${s.desc} display-5`}>
        El evento que convoca a la juventud será el 26 de marzo en el Multiespacio Cultural Luján de Cuyo. Cómo sacar las entradas.
        </div>
        <div className={s.imagen}> 
        <img src="https://resizer.glanacion.com/resizer/U2Yew0kTxyun3bJxcfa57RAhF5M=/1920x1280/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/GSEJ6PUTJRCWZBM63L43IF6QBE.jpg" alt="Panorama" className={s.imagenimg}/>
        </div>
        </div>
    </div>
)
}

export default Home


/* <div>

//     <div className={`${s.logobresh}`}>
//     <img src= "http://www.fiestabresh.com/img/logomain.png" alt="logobresh" className={s.Home}/>
//     </div>
//     <div>
//     <h1 className='display-5 fw-bold  animate__animated animate__fadeInUp d-flex p-2 justify-content-center'>La fiesta Bresh vuelve a Mendoza</h1>
//     <h5 className='fs-3 animate__animated animate__fadeInUp d-flex p-2 justify-content-center text-center'>El evento que convoca a la juventud será el 26 de marzo en el Multiespacio Cultural Luján de Cuyo. Cómo sacar las entradas. </h5>
//     <img src="https://www.mendovoz.com/u/fotografias/m/2022/2/25/f800x450-163127_214573_5050.jpg" alt="Panorama" className={s.News}/>
//     <p className= 'fs-3 animate__animated animate__fadeInUp d-flex p-2 justify-content-center'>La Fiesta Bresh vuelve a la provincia con un evento que convoca a la juventud, esta vez, con una versión XL. Será el sábado 26 de marzo en el Multiespacio Cultural Luján de Cuyo.

// Las entradas están disponibles en tuentrada.com. Cabe aclarar que los tickets adquiridos para la fecha reprogramada del 7 de diciembre 2021 son válidos para el nuevo evento sin cambio alguno.</p>
// </div>
// <div>
//     <img src="https://www.mendovoz.com/u/fotografias/m/2022/2/25/f768x1-163126_163253_5050.jpg" alt="fiesta bresh mendoza" className={s.News}/>
//     <p className='fs-3 animate__animated animate__fadeInUp d-flex p-2 justify-content-center'>Desde los clásicos pop de los '80 hasta las nuevas tendencias en el hip hop, el trap y el género urbano, la Fiesta Bresh es uno de los encuentros más populares de Latinoamérica y en Argentina nunca paró de sonar. 
// Después de seis exitosas ediciones, la fiesta vuelve a la provincia y esta vez al aire libre. El Multiespacio Cultural Luján de Cuyo será el epicentro de un encuentro con la música, el baile y las ganas de divertirse.

// </p>
// </div>
// <div>
//     <img src="https://cdn.boletius.com/images/1645794072853-null-1920x720-5.3.jpg" alt="Futura fiesta bresh" className={s.News} />
//     Con ediciones en las principales ciudades del país, Miami, Nueva York y pronto en Europa, la Fiesta Bresh se convirtió en un evento multitudinario preferido de los jóvenes, con todos los condimentos necesarios para una noche de disfrute y puro ritmo.

// El evento es para mayores de 18 años y las entradas continúan a la venta en tuentrada.com.
//     </div> */