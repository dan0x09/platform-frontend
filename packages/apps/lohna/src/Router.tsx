import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import Data from "./pages/Data"
import { ErrorPage } from "sgcomponents"

export default function Router() {
	return (
	  <BrowserRouter>
		<Routes>
		  <Route path="/">
			<Route index element={<Login />} />
			<Route path="test" element={<Data />} />
			<Route path="*" element={<ErrorPage />} />
		  </Route>
		</Routes>
	  </BrowserRouter>
	)
  }