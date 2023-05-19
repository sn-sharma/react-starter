import {BrowserRouter,Routes, Route} from "react-router-dom"
import Layout from "./Layout"

const Routing = () => {
	return (
		<BrowserRouter>
            <Routes>
                <Route path="/page" element={<Layout />}>
                    <Route path="2" element={<Layout />} />
                    <Route path="3" element={<Layout />} />
                </Route>
            </Routes>
        </BrowserRouter>
	)
}

export default Routing