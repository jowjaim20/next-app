import style from "../styles/trillo.module.scss";
const Trillo=()=>{
	return(
		<div className={`${style.body}`}>
			<div className={`${style.container}`}>
				<header className={`${style.header}`}>
				head
				</header>
				<div className={`${style.content}`}>
					<nav className={style["sidebar"]}>
						navigation
					</nav>
					<main className={`${style['hotel-view']}`}>
						hotel view test
					</main>
				</div>
			</div>
		</div>
		)
}
export default Trillo;