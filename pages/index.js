import style from "../styles/trillo.module.scss";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
const Trillo = () => {
  return (
    <div className={`${style.body}`}>
      <div className={`${style.container}`}>
        <Header />
        <div className={`${style.content}`}>
          <Navigation/>
          <main className={`${style["hotel-view"]}`}>hotel view test</main>
        </div>
      </div>
    </div>
  );
};
export default Trillo;
