import React from "react";
import Gameplay from "./Gameplaypage";
import FrontPage from "./frontpage";
import { useState } from "react";

const Home = () => {
    const [started , setStarted] = useState(false);
    const start = () => {
        setStarted(!started);
    }
    return(
        <div>
           {started ? <Gameplay/> : <FrontPage play={start} />}
        </div>
    )
}

export default Home;