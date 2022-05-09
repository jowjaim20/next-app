import style from "../styles/sidebar.trillo.module.scss";
import Image from "next/image";
import Logo from "../public/20220506_150253_0000.png";

import Home from "../public/img/SVG/home.svg";
import Key from "../public/img/SVG/key.svg";
import Map from "../public/img/SVG/map.svg";
import Aircraft from "../public/img/SVG/aircraft-take-off.svg";

const Navigation = () => {
  return (
  <nav className={style.sidebar} >
  <ul className={style.sideNav}>
		<li className={style.sideNav__item}>
			<a href="#" className={style.sideNav__link}>
				<Home className={style.sideNav__icon}/>
				<span>Home</span>
			</a>
		</li>
		<li className={style.sideNav__item}>
			<a href="#" className={style.sideNav__link}>
				<Aircraft className={style.sideNav__icon}/>
				<span>Flight</span>
			</a>
		</li>
		<li className={style.sideNav__item}>
			<a href="#" className={style.sideNav__link}>
				<Key className={style.sideNav__icon}/>
				<span>Car Rental</span>
			</a>
		</li>
		<li className={style.sideNav__item}>
			<a href="#" className={style.sideNav__link}>
				<Map className={style.sideNav__icon}/>
				<span>Tours</span>
			</a>
		</li>
  </ul>
  <div className={style.legal}>
  &copy; by Joel Jaim
  </div>
  </nav>
  );
};

export default Navigation;
