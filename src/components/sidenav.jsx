import React from "react";
import { useRef, useState} from "react";
import mainLogo from '../assets/img/logo-ct.png'
import { iconDashboard, iconBilling, iconTable, IconReality, iconRTL, iconProfile, iconSignUp, iconSignIn } from "./icons";
import NavBar from "./navbar";


function SidenavItem(props)
{
  return(
  <li className="mt-0.5 w-full">
          <a className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors" href="./pages/dashboard.html">
            <div className=" mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
            {props.icon}
            </div>
            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">{props.name}</span>
          </a>
        </li>)
}


export default  function Sidenav(props)
{

  return(
    <aside className={props.ecran}>
    <div className="h-19.5">
    <button> 
         <i className="absolute top-0 right-0 p-4 opacity-50 cursor-pointer fas fa-times text-slate-400"></i></button>

      <a className="block px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700" href="javascript:;" target="_blank">
        <img src={mainLogo} className="inline h-full max-w-full transition-all duration-200 ease-nav-brand max-h-8" alt="main_logo" />
        <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand">Soft UI Dashboard</span>
      </a>
    </div>

    <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />

    <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
      <ul className="flex flex-col pl-0 mb-0">

      <li className="mt-0.5 w-full">
          <a className="py-2.7  text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors" href="./pages/dashboard.html">
            <div className="bg-gradient-to-tl from-purple-700 to-pink-500  mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
         {iconDashboard()}
            </div>
            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Dashboard</span>
          </a>
        </li>
        <SidenavItem name="Tables" icon={iconTable()}  />
        <SidenavItem name="Billing" icon={iconBilling()}/>
        <SidenavItem name="Virtual Reality" icon={IconReality()}/>
        <SidenavItem name="RTL" icon={iconRTL()}/>
        <li className="w-full mt-4">
          <h6 className="pl-6 ml-2 font-bold leading-tight uppercase text-xs opacity-60">Account pages</h6>
        </li>
      <SidenavItem name="Profile" icon={iconProfile()}/>
      <SidenavItem name="Sign In" icon={iconSignIn()}/>
      <SidenavItem name="Sign Up" icon={iconSignUp()}/>
       
      </ul>
    </div>

    <div className="mx-4">
     {/*  <!-- load phantom colors for card after: */}
      <p className="invisible hidden text-gray-800 text-red-500 text-red-600 after:bg-gradient-to-tl after:from-gray-900 after:to-slate-800 after:from-blue-600 after:to-cyan-400 after:from-red-500 after:to-yellow-400 after:from-green-600 after:to-lime-400 after:from-red-600 after:to-rose-400 after:from-slate-600 after:to-slate-300 text-lime-500 text-cyan-500 text-slate-400 text-fuchsia-500"></p>
      <div className="after:opacity-65 after:bg-gradient-to-tl after:from-slate-600 after:to-slate-300 relative flex min-w-0 flex-col items-center break-words rounded-2xl border-0 border-solid border-blue-900 bg-white bg-clip-border shadow-none after:absolute after:top-0 after:bottom-0 after:left-0 after:z-10 after:block after:h-full after:w-full after:rounded-2xl after:content-['']" sidenav-card>
        <div className="mb-7.5 absolute h-full w-full rounded-2xl bg-cover bg-center" id='card-phantom'></div>
        <div className="relative z-20 flex-auto w-full p-4 text-left text-white">
          <div className="flex items-center justify-center w-8 h-8 mb-4 text-center bg-white bg-center rounded-lg icon ">
            <i className="top-0 z-10 text-transparent ni leading-none ni-diamond text-lg bg-gradient-to-tl from-slate-600 to-slate-300 bg-clip-text opacity-80" sidenav-card-icon></i>
          </div>
          <div className="transition-all duration-200 ease-nav-brand">
            <h6 className="mb-0 text-white">Need help?</h6>
            <p className="mt-0 mb-4 font-semibold leading-tight text-xs">Please check our docs</p>
            <a href="https://www.creative-tim.com/learning-lab/tailwind/html/quick-start/soft-ui-dashboard/" target="_blank" className="inline-block w-full px-8 py-2 mb-0 font-bold text-center text-black uppercase transition-all ease-in bg-white border-0 border-white rounded-lg shadow-soft-md bg-150 leading-pro text-xs hover:shadow-soft-2xl hover:scale-102">Documentation</a>
          </div>
        </div>
      </div>
      {/* pro btn  */}
      <a className="inline-block w-full px-6 py-3 my-4 font-bold text-center text-white uppercase align-middle transition-all ease-in border-0 rounded-lg select-none shadow-soft-md bg-150 bg-x-25 leading-pro text-xs bg-gradient-to-tl from-purple-700 to-pink-500 hover:shadow-soft-2xl hover:scale-102" target="_blank" href="https://www.creative-tim.com/product/soft-ui-dashboard-pro-tailwind?ref=sidebarfree">Upgrade to pro</a>
    </div>
  </aside>
  );

}
