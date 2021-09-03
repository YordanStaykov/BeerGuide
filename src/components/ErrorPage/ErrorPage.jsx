import style from "./ErrorPage.module.scss";
import { Link } from "react-router-dom";

export default function ErrorPage() {
	return (
		<div className={style.mainbox}>
			<div className={style.header}>404</div>
			<div className={style.msg}>
				<p>
					Maybe this page moved? Got deleted? Is hiding out in
					quarantine? Never existed in the first place?
				</p>
				<p>
					Let's go{" "}
					<Link className={style.link} to="/">
						home
					</Link>{" "}
					and try from there.
				</p>
			</div>
		</div>
	);
}
