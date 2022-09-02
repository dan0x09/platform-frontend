import { BrowserRouter, Routes, Route } from "react-router-dom"

import { ErrorPage } from "sgcomponents"

import Login from "./pages/Login"
import Silos from "./pages/Silos"
import Silo from "./pages/Silo"

export default function Router() {
	return (
	  <BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Login />} />
					<Route path="silos" element={<Silos />} />
					<Route path="silo/:id" element={<Silo />} />
					<Route path="*" element={<ErrorPage />} />
				</Route>
			</Routes>
	  </BrowserRouter>
	)
  }