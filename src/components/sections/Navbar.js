import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const stylea = {
         color: '#FFF',
         textDecoration: 'none'
    }
    return (
        

              <>
                <div className="div">
                    <div className="navbar">
                        <ul className="Linksss">
                            <li><Link to="/" style={stylea}>Inicio</Link></li>
                            <li><Link to="/fechas" style={stylea}>Fotos</Link></li>
                            <img src="http://www.fiestabresh.com/img/classic.png" alt=""/>
                            <li><Link to="/events" style={stylea}>Eventos</Link></li>
                            <li><Link to="/about" style={stylea}>Sobre Nosotros</Link></li>
                        </ul>
                    </div>
                </div>
                <style jsx>{`
                  .div{
                      display:flex;
                      background-image: linear-gradient(
                        to left,
                        rgba(200, 78, 137, 1) 0%,
                        rgba(241, 95, 121, 1) 100%
                      );
                      justify-content: center;
                      text-decoration: none;
                  }
                  img{
                      width:100px;
                  }
                  .Linksss{
                      margin-top:10px;
                      gap:60px;
                      display:flex;
                      align-items: center;
                      list-style:none;
                      color: #FFFFFF;
                      font-size: 20px;
                  }
          
                `}</style>
              </>
            );
    
}

export default Navbar