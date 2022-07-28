import { BrowserRouter, Routes, Route } from "react-router-dom"

import App from "./App";

export default function Router() {
	return (
	  <BrowserRouter>
		<Routes>
		  <Route path="/">
			<Route index element={<App />} />
			{
				//<Route path="blogs" element={<Blogs />} />
			}
			{
				//<Route path="*" element={<NoPage />} />
			}
		  </Route>
		</Routes>
	  </BrowserRouter>
	);
  }