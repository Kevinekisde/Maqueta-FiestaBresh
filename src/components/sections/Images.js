import React from 'react'
import { useParams } from "react-router-dom";
import s from '../styles/Images.module.css'

export default function Images() {
    const { id } = useParams();
    let arrayej = [
        {
            id: 1,
            day: 'Viernes',
            date: '25/02/22',
            images: ['https://www.elperiodicousa.com/wp-content/uploads/2021/09/Esp-Fonseca_1.jpg', 'https://resizer.glanacion.com/resizer/5RefiU1i-4pY_tHsI1zckJnPidk=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/GGB3ANDOQZDP7FLQQ5GXCU5CBY.jpg', 'https://resizer.glanacion.com/resizer/MS9CjcwLl0lU3fWpkIEUx8MFNwE=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/EBU2NOR4CVH3DD3YUHO3COBJWU.JPG', 'https://www.tiempodesanjuan.com/u/fotografias/fotosnoticias/2021/9/14/675284.jpeg', 'https://media.cdnp.elobservador.com.uy/102021/1635261790211.jpg', 'https://www.ahoraargentina.com.ar/u/fotografias/m/2021/6/28/f768x1-20960_21087_52.jpg', 'https://www.tiempodesanjuan.com/u/fotografias/m/2021/9/16/f608x342-675577_705300_15.jpg', 'https://resizer.glanacion.com/resizer/ej-jjGWVtrNr5oQ5Nc1aBKpGd9o=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/R4GNB3NWCJGUFF72PQ2ZEWNFXA.jpg', 'https://www.ahoraargentina.com.ar/u/fotografias/m/2021/6/28/f768x1-20960_21087_52.jpg', 'https://resizer.glanacion.com/resizer/BALiBPg7iW_LEzpS3i-sBNPznt8=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/TBDSIWBCYRAOHIL4IFGPT3Y5H4.JPG']
        },
        {
            id: 2,
            day: 'Sabado',
            date: '18/02/22',
            images: ['https://www.elperiodicousa.com/wp-content/uploads/2021/09/Esp-Fonseca_1.jpg', 'https://resizer.glanacion.com/resizer/5RefiU1i-4pY_tHsI1zckJnPidk=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/GGB3ANDOQZDP7FLQQ5GXCU5CBY.jpg', 'https://resizer.glanacion.com/resizer/MS9CjcwLl0lU3fWpkIEUx8MFNwE=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/EBU2NOR4CVH3DD3YUHO3COBJWU.JPG', 'https://www.tiempodesanjuan.com/u/fotografias/fotosnoticias/2021/9/14/675284.jpeg', 'https://media.cdnp.elobservador.com.uy/102021/1635261790211.jpg', 'https://www.ahoraargentina.com.ar/u/fotografias/m/2021/6/28/f768x1-20960_21087_52.jpg', 'https://www.tiempodesanjuan.com/u/fotografias/m/2021/9/16/f608x342-675577_705300_15.jpg', 'https://resizer.glanacion.com/resizer/ej-jjGWVtrNr5oQ5Nc1aBKpGd9o=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/R4GNB3NWCJGUFF72PQ2ZEWNFXA.jpg', 'https://www.ahoraargentina.com.ar/u/fotografias/m/2021/6/28/f768x1-20960_21087_52.jpg', 'https://resizer.glanacion.com/resizer/BALiBPg7iW_LEzpS3i-sBNPznt8=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/TBDSIWBCYRAOHIL4IFGPT3Y5H4.JPG']
        },
        {
            id: 3,
            day: 'Domingo',
            date: '19/12/21',
            images: ['https://www.elperiodicousa.com/wp-content/uploads/2021/09/Esp-Fonseca_1.jpg', 'https://resizer.glanacion.com/resizer/5RefiU1i-4pY_tHsI1zckJnPidk=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/GGB3ANDOQZDP7FLQQ5GXCU5CBY.jpg', 'https://resizer.glanacion.com/resizer/MS9CjcwLl0lU3fWpkIEUx8MFNwE=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/EBU2NOR4CVH3DD3YUHO3COBJWU.JPG', 'https://www.tiempodesanjuan.com/u/fotografias/fotosnoticias/2021/9/14/675284.jpeg', 'https://media.cdnp.elobservador.com.uy/102021/1635261790211.jpg', 'https://www.ahoraargentina.com.ar/u/fotografias/m/2021/6/28/f768x1-20960_21087_52.jpg', 'https://www.tiempodesanjuan.com/u/fotografias/m/2021/9/16/f608x342-675577_705300_15.jpg', 'https://resizer.glanacion.com/resizer/ej-jjGWVtrNr5oQ5Nc1aBKpGd9o=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/R4GNB3NWCJGUFF72PQ2ZEWNFXA.jpg', 'https://www.ahoraargentina.com.ar/u/fotografias/m/2021/6/28/f768x1-20960_21087_52.jpg', 'https://resizer.glanacion.com/resizer/BALiBPg7iW_LEzpS3i-sBNPznt8=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/TBDSIWBCYRAOHIL4IFGPT3Y5H4.JPG']
        },
        {
            id: 4,
            day: 'Viernes',
            date: '17/12/21',
            images: ['https://www.elperiodicousa.com/wp-content/uploads/2021/09/Esp-Fonseca_1.jpg', 'https://resizer.glanacion.com/resizer/5RefiU1i-4pY_tHsI1zckJnPidk=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/GGB3ANDOQZDP7FLQQ5GXCU5CBY.jpg', 'https://resizer.glanacion.com/resizer/MS9CjcwLl0lU3fWpkIEUx8MFNwE=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/EBU2NOR4CVH3DD3YUHO3COBJWU.JPG', 'https://www.tiempodesanjuan.com/u/fotografias/fotosnoticias/2021/9/14/675284.jpeg', 'https://media.cdnp.elobservador.com.uy/102021/1635261790211.jpg', 'https://www.ahoraargentina.com.ar/u/fotografias/m/2021/6/28/f768x1-20960_21087_52.jpg', 'https://www.tiempodesanjuan.com/u/fotografias/m/2021/9/16/f608x342-675577_705300_15.jpg', 'https://resizer.glanacion.com/resizer/ej-jjGWVtrNr5oQ5Nc1aBKpGd9o=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/R4GNB3NWCJGUFF72PQ2ZEWNFXA.jpg', 'https://www.ahoraargentina.com.ar/u/fotografias/m/2021/6/28/f768x1-20960_21087_52.jpg', 'https://resizer.glanacion.com/resizer/BALiBPg7iW_LEzpS3i-sBNPznt8=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/TBDSIWBCYRAOHIL4IFGPT3Y5H4.JPG']
        },
        {
            id: 5,
            day: 'Sabado',
            date: '12/12/21',
            images: ['https://www.elperiodicousa.com/wp-content/uploads/2021/09/Esp-Fonseca_1.jpg', 'https://resizer.glanacion.com/resizer/5RefiU1i-4pY_tHsI1zckJnPidk=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/GGB3ANDOQZDP7FLQQ5GXCU5CBY.jpg', 'https://resizer.glanacion.com/resizer/MS9CjcwLl0lU3fWpkIEUx8MFNwE=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/EBU2NOR4CVH3DD3YUHO3COBJWU.JPG', 'https://www.tiempodesanjuan.com/u/fotografias/fotosnoticias/2021/9/14/675284.jpeg', 'https://media.cdnp.elobservador.com.uy/102021/1635261790211.jpg', 'https://www.ahoraargentina.com.ar/u/fotografias/m/2021/6/28/f768x1-20960_21087_52.jpg', 'https://www.tiempodesanjuan.com/u/fotografias/m/2021/9/16/f608x342-675577_705300_15.jpg', 'https://resizer.glanacion.com/resizer/ej-jjGWVtrNr5oQ5Nc1aBKpGd9o=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/R4GNB3NWCJGUFF72PQ2ZEWNFXA.jpg', 'https://www.ahoraargentina.com.ar/u/fotografias/m/2021/6/28/f768x1-20960_21087_52.jpg', 'https://resizer.glanacion.com/resizer/BALiBPg7iW_LEzpS3i-sBNPznt8=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/TBDSIWBCYRAOHIL4IFGPT3Y5H4.JPG']
        },
        {
            id: 6,
            day: 'Viernes',
            date: '11/12/21',
            images: ['https://www.elperiodicousa.com/wp-content/uploads/2021/09/Esp-Fonseca_1.jpg', 'https://resizer.glanacion.com/resizer/5RefiU1i-4pY_tHsI1zckJnPidk=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/GGB3ANDOQZDP7FLQQ5GXCU5CBY.jpg', 'https://resizer.glanacion.com/resizer/MS9CjcwLl0lU3fWpkIEUx8MFNwE=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/EBU2NOR4CVH3DD3YUHO3COBJWU.JPG', 'https://www.tiempodesanjuan.com/u/fotografias/fotosnoticias/2021/9/14/675284.jpeg', 'https://media.cdnp.elobservador.com.uy/102021/1635261790211.jpg', 'https://www.ahoraargentina.com.ar/u/fotografias/m/2021/6/28/f768x1-20960_21087_52.jpg', 'https://www.tiempodesanjuan.com/u/fotografias/m/2021/9/16/f608x342-675577_705300_15.jpg', 'https://resizer.glanacion.com/resizer/ej-jjGWVtrNr5oQ5Nc1aBKpGd9o=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/R4GNB3NWCJGUFF72PQ2ZEWNFXA.jpg', 'https://www.ahoraargentina.com.ar/u/fotografias/m/2021/6/28/f768x1-20960_21087_52.jpg', 'https://resizer.glanacion.com/resizer/BALiBPg7iW_LEzpS3i-sBNPznt8=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/TBDSIWBCYRAOHIL4IFGPT3Y5H4.JPG']
        }
    ]

   let filter = arrayej.filter((el) => el.id == id);
   let imagenes = filter[0].images
  return (
    <div className= {s.root}>
        <div className={s.imagesGroup}>
        {imagenes.map((el) => <img className={s.imgs} src={el} alt=''/>)}
        </div>
    </div>
  )
}

