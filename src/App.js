import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Movie from "./pages/movie";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/:id" exact element={<Movie />} />
                <Route path="/category/acao" element={<Home category="28" />} />
                <Route path="/category/aventura" element={<Home category="12" />} />
                <Route path="/category/comedia" element={<Home category="35" />} />
                <Route path="/category/animacao" element={<Home category="16" />} />
                <Route path="/category/drama" element={<Home category="18" />} />
                <Route path="/category/romance" element={<Home category="10749" />} />
            </Routes>
        </div>
    );
};

export default App;
