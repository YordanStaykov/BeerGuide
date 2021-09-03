import style from "./Home.module.scss";

export default function Home() {
	return (
		<main className={style.main}>
			<h1 className={style.header}>Welcome to the beer brewers guide!</h1>
			<h1>
				Here you can find all kind of recipes for brewing your home made
				brew or share one of your own
			</h1>
			<img
				src="https://i.pinimg.com/originals/a7/17/4d/a7174d680d6cd631d358d8a706224e78.jpg"
				alt="beer-chicks-pic"
			/>
			<h1>Enjoy with caution!</h1>
		</main>
	);
}
