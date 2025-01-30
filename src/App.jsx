import { Routes, Route } from "react-router-dom";
import Navigation from "/src/components/Navigation/Navigation";
import Home from "/src/pages/Home";
import About from "/src/pages/About";
import Publications from "/src/pages/Publications";
import Media from "/src/pages/Media";
import Contact from "/src/pages/Contact";
import Footer from "/src//components/Footer/Footer";

function App() {
	const routes = [
		{ path: "/", label: "Home", page: <Home /> },
		{ path: "/about", label: "About", page: <About /> },
		{ path: "/publications", label: "Publications", page: <Publications /> },
		{ path: "/media", label: "Media", page: <Media /> },
		{ path: "/contact", label: "Contact", page: <Contact /> },
	];

	return (
		<>
			<Navigation routes={routes} />
			<main>
				<Routes>
					{routes.map(({ path, page }) => (
						<Route key={path} path={path} element={page} />
					))}
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
