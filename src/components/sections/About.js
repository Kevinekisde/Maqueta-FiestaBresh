// import React from "react";
// import 'animate.css';
// const About = () => {
//     return (
        
//         <>
//         <div class="p-5 mb-4 bg-light rounded-3">
//         <div class="container-fluid py-5">
//           <h1 class="display-5 fw-bold  animate__animated animate__backInUp">Cómo empezó esta locura</h1>
//               <p class="col-md-8 fs-4 animate__animated animate__fadeInDown  " >
//                  Comenzó como una iniciativa de un grupo de amigos que sentía que desentonaba en los boliches tradicionales; fue un éxito instantáneo que no paró de crecer.
//                  Se trasladó al interior y empezó a girar por el mundo: es furor en Miami, Nueva York y Milán.
//               </p>
       
//                 <a class="btn btn-primary btn-lg" href='https://www.lanacion.com.ar/espectaculos/musica/la-bresh-la-historia-desconocida-de-la-fiesta-que-obsesiona-a-los-jovenes-de-todo-el-pais-y-se-nid24122021/#:~:text=Comenz%C3%B3%20como%20una%20iniciativa%20de,Miami%2C%20Nueva%20York%20y%20Mil%C3%A1n"'>+ INFO</a>
//       </div>

     
//     </div>
  
//     </>
//     )
        
// }
// export default About

import React from "react";
import "animate.css";
import s from "../styles/About.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={s.root}>
      
      <div class="p-5 mb-4 bg-light rounded-1 d-flex p-2 flex-row d-flex justify-content-center">
      <div className={s.titular}>
        <div className={s.divlogo}>
      <img
            className={s.breshlogo}
            src="https://cp.peoplemedia.com/site/general/pmsp3036/hero.png"
            alt=""
          />
          </div>
          <div class="container-fluid py-2 d-flex p-2 justify-content-center">
          
            <div className={s.tituloydesc}>
            <h1 class="display-5 fw-bold  animate__animated animate__fadeInUp d-flex p-2 justify-content-center">
            ¿Cómo empezó esta locura?
            </h1>
            <p class="col-md-8 fs-3 animate__animated animate__fadeInUp d-flex p-2 justify-content-center">
              Comenzó como una iniciativa de un grupo de amigos que sentía que
              desentonaba en los boliches tradicionales; fue un éxito
              instantáneo que no paró de crecer. Se trasladó al interior y
              empezó a girar por el mundo: es furor en Miami, Nueva York y Milán.
            </p>
        </div>
            {/* <a
              class="btn btn-primary btn-lg"
              href='https://www.lanacion.com.ar/espectaculos/musica/la-bresh-la-historia-desconocida-de-la-fiesta-que-obsesiona-a-los-jovenes-de-todo-el-pais-y-se-nid24122021/#:~:text=Comenz%C3%B3%20como%20una%20iniciativa%20de,Miami%2C%20Nueva%20York%20y%20Mil%C3%A1n"'
            >
              + INFO
            </a> */}
          </div>

        </div>
      </div>
      <div className={s.medios}>
        <h1 className="display-5 fw-bold">BRESH en los medios</h1>
        <div className={s.diarios}>
          <Link to="https://www.lanacion.com.ar/espectaculos/musica/la-bresh-la-historia-desconocida-de-la-fiesta-que-obsesiona-a-los-jovenes-de-todo-el-pais-y-se-nid24122021/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/La-Naci%C3%B3n-Logo.svg/2560px-La-Naci%C3%B3n-Logo.svg.png"
              alt="" className={s.diario}
            />
          </Link>
          <Link to="https://www.clarin.com/espectaculos/musica/fenomeno-bresh-secretos-fiesta-nacio-palermo-exporta-mundo_0_ttocwQMw7.html">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Clar%C3%ADn_logo.svg/1280px-Clar%C3%ADn_logo.svg.png"
              alt=""
              className={s.diario}
            />
          </Link>
          <Link to="https://billboard.com.ar/bresh-la-fiesta-mas-linda-se-exporta-desde-argentina-al-mundo/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Billboard_logo.svg/280px-Billboard_logo.svg.png"
              alt="" className={s.diario}
            />
          </Link>
          <Link to="https://revistag7.com/bresh-la-fiesta-mas-linda-del-mundo/">
            <img
              src="https://i0.wp.com/revistag7.com/wp-content/uploads/2021/02/G7Logo-Facebook.jpg?fit=533%2C212&ssl=1"
              alt="" className={s.diario}
            />
          </Link>
          <Link to="https://www.infobae.com/tendencias/2021/09/11/de-argentina-para-el-mundo-la-fiesta-bresh-debuto-en-nueva-york-con-entradas-agotadas/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Infobae_logo.svg/2560px-Infobae_logo.svg.png"
              alt="" className={s.diario}
            />
          </Link>
          <Link to="https://www.filo.news/musica/Asi-es-una-noche-en-la-Bresh-la-fiesta-mas-lindo-del-mundo-20211121-0025.html">
            <img
              src="https://www.filo.news/export/sites/claro/arte/logo-20072018.png_451676282.png"
              alt="" className={s.diario}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default About;
