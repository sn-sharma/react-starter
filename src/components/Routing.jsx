import {BrowserRouter,Routes, Route} from "react-router-dom"
import Layout from "./Layout"
import Home from "../modules/Home"

const Routing = () => {
	return (
		<BrowserRouter>
            <Routes>
				<Route path="/" element={<Home />} />
                <Route path="/page" element={<Layout />}>
                    <Route path="2" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
	)
}

export default Routing