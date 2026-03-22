import {BrowserRouter, Routes , Route} from "react-router-dom";
import { Home } from "../Home/Home";

export const RootRouter = ()=>{

    return <BrowserRouter>
    
        <Routes>
            <Route path="/" element={<Home/>}></Route>
        </Routes>

    </BrowserRouter>

}