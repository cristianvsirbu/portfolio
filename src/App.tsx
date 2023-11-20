import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import CTA from "./components/CTA";

const App = () => {
	return (
		<div className="top_level_container">
			<Hero />
			<About />
			<Projects />
			<CTA />
		</div>
	);
};

export default App;
