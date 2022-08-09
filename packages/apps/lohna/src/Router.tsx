import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import Silos from "./pages/Silos"
import Data from "./pages/Data"
import { ErrorPage } from "sgcomponents"

export default function Router() {
	return (
	  <BrowserRouter>
		<Routes>
		  <Route path="/">
			<Route index element={<Login />} />
			<Route path="silos" element={<Silos />} />
			<Route path="silo" element={<Data />} />
			<Route path="*" element={<ErrorPage />} />
		  </Route>
		</Routes>
	  </BrowserRouter>
	)
  }