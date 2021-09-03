import { useEffect, useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import { auth } from "./config/firebase";
import { Header, Footer, Main } from "./components";

export default function App() {
	const [, setUser] = useContext(UserContext);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			user
				? setUser({ email: user.email, uid: user.uid })
				: setUser(null);
		});
	}, [setUser]);

	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	);
}
