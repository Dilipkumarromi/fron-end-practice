import React from 'react'
import './styles.css'
import logo from'../../assets/img/logo.png'
export default function ButtonMenu() {
const list = document.querySelectorAll(".list");
 
function activeLink() {
  list.forEach((item) => item.classNameList.remove("active"));
  this.classNameList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));

  return (
    <>
      <div className="navigation">
        <ul>
           <li>
            <img src={logo} className='logo'></img>
           </li>
          <li className="list active">
            <a href="/#">
              <span className="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span className="text">Home</span>
            </a>
          </li>
          <li className="list">
            <a href="/#">
              <span className="icon">
              <ion-icon name="school-outline"></ion-icon>
              </span>
              <span className="text">certificate</span>
            </a>
          </li>
          <li className="list">
            <a href="/#">
              <span className="icon">
                <ion-icon name="chatbubble-outline"></ion-icon>
              </span>
              <span className="text">Message</span>
            </a>
          </li>
          <li className="list">
            <a href="/#">
              <span className="icon">
              <ion-icon name="call-outline"></ion-icon>
              </span>
              <span className="text">Contact</span>
            </a>
          </li>
          <li className="list">
            <a href="/#">
              <span className="icon">
              <ion-icon name="finger-print-outline"></ion-icon>
              </span>
              <span className="text">Login</span>
            </a>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
      
    </>
  )
}
