import style from "../styles/trillo.module.scss";
import Image from "next/image";
import Logo from "../public/20220506_150253_0000.png";
import MagnifyingGlass from "../public/img/SVG/magnifying-glass.svg";
import Chat from "../public/img/SVG/chat.svg";
import Bookmark from "../public/img/SVG/bookmark.svg";

const Header = () => {
  return (
    <header className={`${style.header}`}>
      <div className={style.logo__box}>
        <Image src={Logo} alt="logo" className="logo" width={40} height={40} />
      </div>
      <form action="#" className={`${style.search}`}>
        <input
          type="text"
          className={style.search__input}
          placeholder="search hotels"
        />
        <button className={`{style.search__button}`}>
          <MagnifyingGlass className={style.search__icon} />
        </button>
      </form>
      <nav className={style.userNav}>
        <div className={style.userNav__iconBox}>
          <Bookmark className={style.userNav__icon} />
          <span className={style.userNav__notification}>12</span>
        </div>
        <div className={style.userNav__iconBox}>
          <Chat className={style.userNav__icon} />
          <span className={style.userNav__notification}>11</span>
        </div>
        <div className={style.userNav__user}>
          <Image
            src={Logo}
            alt="user photo"
            className={style.userNav__user_photo}
            width={25}
            height={25}
          />
          <span className={style.userNav__userName}>Joel</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
