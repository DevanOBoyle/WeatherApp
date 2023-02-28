/** @format */

import { useState } from "react";
import SearchBar from "./components/SearchBar/index";
import Weather from "./components/Weather/index";

function App() {
    return (
        <>
            <div className="bg-gray-800 -z-50 w-screen h-screen flex flex-col items-center">
                <SearchBar />
                <Weather />
            </div>
        </>
    );
}

export default App;
