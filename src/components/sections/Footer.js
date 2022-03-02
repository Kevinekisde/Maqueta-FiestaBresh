
import React from 'react'
import s from "../styles/Footer.module.css"

const footer = () => {
  return (

    <div className={s.footer}>
      <footer class="">
        <div class="footer-copyright text-center py-3">
          © 2022 Fiesta Bresh
              
        </div>
        <div class="col-md-5 col-lg-4">
          <div class="text-center text-md center">
            <ul class={`list-unstyled list-inline ${s.flexxx}`}>
              <li class="list-inline list-unstyled">
                <a href="https://www.facebook.com/BRESHING/" class={`btn-floating btn-sm ${s.as}`}><i class="bi bi-facebook"></i></a>
              </li>
              <li class="list-inline list-unstyled">
                <a href="https://www.instagram.com/bresh/?hl=es" class={`btn-floating btn-sm ${s.as}`}><i class="bi bi-instagram"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
  )
}


export default footer

//  <a className="git" href="NUESTROGITHUB"> Made by: Hard Button Project</a>