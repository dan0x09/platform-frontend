import { BrowserRouter, Routes, Route } from "react-router-dom"

import { ErrorPage } from "sgcomponents"

import TestPage from "./pages/TestPage"

export default function Router() {
	return (
	  <BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<TestPage />} />
					<Route path="*" element={<ErrorPage />} />
				</Route>
			</Routes>
	  </BrowserRouter>
	)
  }