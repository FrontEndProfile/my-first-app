// import Router
import {BrowserRouter as Router ,Route, Routes} from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";

const AppComponent = () => {
    return (
        <>
        <Router>
            <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            </Routes>
        </Router>

        </>
        
    )
}





// function AppComponent() {
//     return (
//         <>
//         <h1>fazal</h1>
//         <p>lorem qwer eqwr ewr</p>
//         </>
//     )
// }

export default AppComponent;