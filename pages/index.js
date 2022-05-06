import style from "../styles/trillo.module.scss";
import Header from "../components/Header";
const Trillo = () => {
  return (
    <div className={`${style.body}`}>
      <div className={`${style.container}`}>
        <Header />
        <div className={`${style.content}`}>
          <nav className={style["sidebar"]}>navigation</nav>
          <main className={`${style["hotel-view"]}`}>hotel view test</main>
        </div>
      </div>
    </div>
  );
};
export default Trillo;
