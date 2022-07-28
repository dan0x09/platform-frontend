import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import App from "./App";

export default function Router() {
	return (
	  <BrowserRouter>
		<Routes>
		  <Route path="/">
			<Route index element={<Login />} />
			<Route path="test" element={<App />} />
			{
				//<Route path="*" element={<NoPage />} />
			}
		  </Route>
		</Routes>
	  </BrowserRouter>
	);
  }