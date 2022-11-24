import "./App.css";

// Package imports
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

// Component imports
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Post from "./pages/Post";

function App() {
	const user = true;
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar isUser={user} />
				<div className="Content">
					<Routes>
						<Route
							path="/"
							element={user ? <Home /> : <Navigate to="/login" />}
						/>
						<Route
							path="/login"
							element={user ? <Navigate to="/" /> : <Login />}
						/>
						<Route
							path="/post/:id"
							element={user ? <Post /> : <Navigate to="/login" />}
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
