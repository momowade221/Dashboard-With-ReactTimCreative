import React from "react";
import { useState } from "react";
import '../assets/css/dashboard-tailwind.css'
import '../assets/css/tooltips.css'
import '../assets/css/styles.css'
import '../assets/css/perfect-scrollbar.css'
import '../assets/css/nucleo-svg.css'
import '../assets/css/nucleo-icons.css'
import Sidenav from "./sidenav";

const miniEcran="max-w-62.5 ease-nav-brand z-990 fixed inset-y-0 my-4 ml-4 block w-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent"
const megaEcran="max-w-62.5 ease-nav-brand z-990 fixed inset-y-0 my-4 ml-4 block w-full -translate-x-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-200 "

export default  function NavBar()
{
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);
   
  };


 return(
  <header>
   {isShown && <Sidenav ecran={miniEcran}/>}
   <Sidenav  ecran={megaEcran}/> 
    <nav className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start" navbar-main navbar-scroll="true">
    <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
      <nav>
        {/* breadcrumb */}
        <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
          <li className="leading-normal text-sm">
            <a className="opacity-50 text-slate-700" href="javascript:;">Pages</a>
          </li>
          <li className="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/']" aria-current="page">Dashboard</li>
        </ol>
        <h6 className="mb-0 font-bold capitalize"><a href="/">Dashboard</a></h6>
      </nav>

      <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
        <div className="flex items-center md:ml-auto md:pr-4">
          <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
            <span className="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
              <i className="fas fa-search"></i>
            </span>
            <input type="text" className="pl-8.75 text-sm focus:shadow-soft-primary-outline ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow" placeholder="Type here..." />
          </div>
        </div>
        <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
          {/* online builder btn  */}
           <li className="flex items-center">
            <a className="inline-block px-8 py-2 mb-0 mr-4 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro border-fuchsia-500 ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs text-fuchsia-500 hover:border-fuchsia-500 active:bg-fuchsia-500 active:hover:text-fuchsia-500 hover:text-fuchsia-500 tracking-tight-soft hover:bg-transparent hover:opacity-75 hover:shadow-none active:text-white active:hover:bg-transparent" target="_blank" href="https://www.creative-tim.com/builder/soft-ui?ref=navbar-dashboard&amp;_ga=2.76518741.1192788655.1647724933-1242940210.1644448053">Online Builder</a>
          </li> 
          <li className="flex items-center">
            <a href="./pages/sign-in.html" className="block px-0 py-2 font-semibold transition-all ease-nav-brand text-sm text-slate-500">
              <i className="fa fa-user sm:mr-1"></i>
              <span className="hidden sm:inline">Sign In</span>
            </a>
          </li>
          <li className="flex items-center pl-4 xl:hidden">
            <button id="dropSidenav"  onClick={handleClick} className="block p-0 transition-all ease-nav-brand text-sm text-slate-500">
              <div className="w-4.5 overflow-hidden">
                <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                <i className="ease-soft relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
              </div>
            </button>
    
          </li>
          <li className="flex items-center px-4">
            <a href="javascript:;" className="p-0 transition-all text-sm ease-nav-brand text-slate-500">
              <i fixed-plugin-button-nav className="cursor-pointer fa fa-cog"></i>
              {/* fixed-plugin-button-nav  */}
            </a>
          </li>
{/* notifications */}

          <li className="relative flex items-center pr-2">
            <p className="hidden transform-dropdown-show"></p>
            <a  className="block p-0 transition-all text-sm ease-nav-brand text-slate-500" dropdown-trigger aria-expanded="false">
              <i className="cursor-pointer fa fa-bell"></i>
            </a>
            
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
  );

}
