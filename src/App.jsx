import "./App.css";
import { Header } from "./components/Header/Header";
import { Body } from "./views/Body/Body";

function App() {

	return (
		<>
			<Header />
			{/* <ContextProvider> */}
				<Body />
			{/* <ContextProvider/> */}

		</>
	);
}

export default App;