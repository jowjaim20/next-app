import style from "../styles/trillo.module.scss";
const Trillo=()=>{
	return(
		<div className={`${style.body}`}>
			<div className={`${style.container} flex flex-col`}>
				<header className="text-center">
				head
				</header>
				<div className="content flex">
					<nav className='basis-2/6 bg-black h-screen'>
						navigation
					</nav>
					<main className='flex-auto'>
						hotel view
					</main>
				</div>
			</div>
		</div>
		)
}
export default Trillo;