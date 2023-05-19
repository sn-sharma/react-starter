import {BrowserRouter,Routes, Route} from "react-router-dom"
import Layout from "./Layout"
import Home from "../modules/Home"
import Page from "../modules/pages/Page"

const Routing = () => {
	return (
		<BrowserRouter>
            <Routes>
				<Route path="/" element={<Home />} />
                <Route path="/page" element={<Layout />}>
                    <Route path="1" element={<Page pageNumber="1" />} />
					<Route path="2" element={<Page pageNumber="2" />} />
                </Route>
            </Routes>
        </BrowserRouter>
	)
}

export default Routing