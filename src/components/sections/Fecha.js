import React from 'react'
import s from '../styles/Fecha.module.css'
import { Link } from 'react-router-dom'


export default function Fecha(props) {
  return (
    <div className={s.root}>
        <h1 className={s.day}>{props.day}</h1>
        <Link to={`/imagenes/${props.id}`}><h2 className={s.date}>{props.date}</h2></Link>
    </div>
  )
}
