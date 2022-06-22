import { Navbar } from "../components/ul/Navbar";
import { Route, Routes } from "react-router-dom";


import { DcScreen } from "../components/dc/DcScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/Search/SearchScreen";
import { HeroScreen } from "../components/HERO/HeroScreen";
import { Universes } from "../components/universes/Universes";

export const DashboardRoutes = () => {
  return (
    <>
    <Navbar/> 
    <div className="container">
    

    <Routes>
        <Route path="/marvel" element={<MarvelScreen/>} />
        <Route path="/dc" element={<DcScreen/>} />

        <Route path="/search" element={<SearchScreen/>} />
        <Route path="/hero/:heroeId" element={<HeroScreen/>}/>
        
        <Route path="/" element={<Universes/>} />


      </Routes>
    </div>

    </>
  )
}
