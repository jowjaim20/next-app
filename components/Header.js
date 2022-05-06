import style from "../styles/trillo.module.scss";
import Image from 'next/image';
import logo from '../public/20220506_150253_0000.png';
import MagnifyingGlass from '../public/img/SVG/magnifying-glass.svg';
import Chat from '../public/img/SVG/chat.svg'

const Header=()=>{
	return(
		<header className={`${style.header} flex items-center`}>
				<Image src={logo} alt="logo" className="logo" width={50} height={50}/>
				<form	action='#' className={`${style.search}`}>
					<input type="text" className={style.search__input} placeholder='search hotels'/>
					<button className={`{style.search__button}`}>
				<MagnifyingGlass className={style.icon}/>
					</button>
				</form>
		</header>
				);
}

export default Header;