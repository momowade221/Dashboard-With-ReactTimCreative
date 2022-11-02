import './assets/css/dashboard-tailwind.css'
import './assets/css/tooltips.css'
import './assets/css/styles.css'
import './assets/css/perfect-scrollbar.css'
import './assets/css/nucleo-svg.css'
import './assets/css/nucleo-icons.css'
import { useState } from 'react'
import Sidenav from './components/sidenav'
import NavBar from './components/navbar'
import CardRow1 from './components/cardRows/cardRow1'
import CardRow2 from './components/cardRows/cardRow2'
import CardRow3 from './components/cardRows/cardRow3'
import CardRow4 from './components/cardRows/cardRow4'
import CardRow5 from './components/cardRows/cardRow5'
import Footer from './components/footer'
import Configurator from './components/configurator'

export default function App() {

  
  return (
   
  <div id="MAIN-APP" className="m-0 font-sans antialiased font-normal text-base leading-default bg-gray-50 text-slate-500">
 
  <main className="ease-soft-in-out xl:ml-68.5 relative h-full  rounded-xl transition-all duration-200">
     {/*  <!-- sidenav  */}
   
     
    {/* Navbar */}
    <NavBar/>

   {/* BODY */}
   <div className="w-full px-6 py-6 mx-auto">
    
    {/* cards */}
    <div>

    {/* row 1 (moneey) */}
    <CardRow1/>
   
    {/* cards row 2 and 3 (built developpers+rockets)*/}
    <div className="flex flex-wrap mt-6 -mx-3">
    <CardRow2/>
    <CardRow3/>
</div>
    {/* cards row 4 (Active Users)+(stats)*/}
<CardRow4/>
    {/* CardRow SALES OVERVIEW*/}

    {/* cardRow 5(Projects) +(Orders) */}
 <CardRow5/>
  </div>

   
    {/* end cards */}
     {/* Footer*/}
     <Footer/>
</div>
{/* END BODY*/}
  </main>
  <Configurator/>
</div>
  );
}
