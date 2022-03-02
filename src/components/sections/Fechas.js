import React from 'react'
import Fecha from './Fecha'
import s from '../styles/Fechas.module.css'

export default function Fechas() {
    let array = [
        {
            id: 1,
            day: 'Viernes',
            date: '25/02/22',
            images: ['https://media.cdnp.elobservador.com.uy/102021/1635261790211.jpg', 'https://www.ahoraargentina.com.ar/u/fotografias/m/2021/6/28/f768x1-20960_21087_52.jpg', 'https://www.tiempodesanjuan.com/u/fotografias/m/2021/9/16/f608x342-675577_705300_15.jpg']
        },
        {
            id: 2,
            day: 'Sabado',
            date: '18/02/22',
            images: ['https://media.cdnp.elobservador.com.uy/102021/1635261790211.jpg', 'https://www.ahoraargentina.com.ar/u/fotografias/m/2021/6/28/f768x1-20960_21087_52.jpg', 'https://www.tiempodesanjuan.com/u/fotografias/m/2021/9/16/f608x342-675577_705300_15.jpg']
        },
        {
            id: 3,
            day: 'Domingo',
            date: '19/12/21',
            images: ['https://media.cdnp.elobservador.com.uy/102021/1635261790211.jpg', 'https://www.ahoraargentina.com.ar/u/fotografias/m/2021/6/28/f768x1-20960_21087_52.jpg', 'https://www.tiempodesanjuan.com/u/fotografias/m/2021/9/16/f608x342-675577_705300_15.jpg']
        }
    ]

  return (
    <div className={s.root}>
        {array.map((el) => <Fecha id={el.id} day={el.day} date={el.date} images={el.images}/>)}
    </div>
  )
}
