import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';

function MainPage() {
	return (
		<>
			<Section1 />
			<Section2 />
			<Section3 />
			<section className="Section4"></section>
			<section className="Section5"></section>
		</>
	);
}

export default MainPage;
