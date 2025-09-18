import { Routes, Route } from "react-router-dom";

import Navigation from "/src/partials/Navigation/Navigation";
import Footer from "/src/partials/Footer/Footer";

import Home from "/src/pages//Home/Home";
import About from "/src/pages/About/About";
import Publications from "/src/pages/Publications/Publications";
import Media from "/src/pages/Media/Media";
import News from "/src/pages/News/News";
import Contact from "/src/pages/Contact/Contact";

import TermsOfUse from "/src/pages/legal/TermsOfUse";
import PrivacyPolicy from "/src/pages/legal/PrivacyPolicy";
import CookiePolicy from "/src/pages/legal/CookiePolicy";
import Accessibility from "/src/pages/legal/Accessibility";

import PageNotFound from "/src/pages/PageNotFound/PageNotFound";

function App() {
	const mainRoutes = [
		{ path: "/", label: "Home", page: <Home /> },
		{ path: "/about", label: "About", page: <About /> },
		{ path: "/publications", label: "Publications", page: <Publications /> },
		{ path: "/media", label: "Media", page: <Media /> },
		{ path: "/news", label: "News", page: <News /> },
		{ path: "/contact", label: "Contact", page: <Contact /> },
		{ path: "*", page: <PageNotFound /> },
	];

	const otherRoutes = [
		{
			path: "/terms-of-use",
			label: "Terms of use",
			page: <TermsOfUse siteName="Terence Allbright Composer" />,
		},
		{
			path: "/privacy-policy",
			label: "Privacy policy",
			page: <PrivacyPolicy siteName="Terence Allbright Composer" />,
		},
		{ path: "/cookies", label: "Cookie policy", page: <CookiePolicy /> },
		{ path: "/accessibility", label: "Accessibility", page: <Accessibility /> },
	];

	const allRoutes = [...mainRoutes, ...otherRoutes];

	return (
		<>
			<Navigation routes={mainRoutes} />
			<main>
				<Routes>
					{allRoutes.map(({ path, page }) => (
						<Route key={path} path={path} element={page} />
					))}
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
