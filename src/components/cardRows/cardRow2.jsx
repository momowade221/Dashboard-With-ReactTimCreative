import React from "react";
import image_rocket from '../../assets/img/illustrations/rocket-white.png'
import wave_white from '../../assets/img/shapes/waves-white.svg'

export default  function CardRow2()
{
  return(

      <div className="w-full px-3 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
          <div className="flex-auto p-4">
            <div className="flex flex-wrap -mx-3">
              <div className="max-w-full px-3 lg:w-1/2 lg:flex-none">
                <div className="flex flex-col h-full">
                  <p className="pt-2 mb-1 font-semibold">Built by developers</p>
                  <h5 className="font-bold">Soft UI Dashboard</h5>
                  <p className="mb-12">From colors, cards, typography to complex elements, you will find the full documentation.</p>
                  <a className="mt-auto mb-0 font-semibold leading-normal text-sm group text-slate-500" href="javascript:;">
                    Read More
                    <i className="fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"></i>
                  </a>
                </div>
              </div>
              <div className="max-w-full px-3 mt-12 ml-auto text-center lg:mt-0 lg:w-5/12 lg:flex-none">
                <div className="h-full bg-gradient-to-tl from-purple-700 to-pink-500 rounded-xl">
                  <img src={wave_white} className="absolute top-0 hidden w-1/2 h-full lg:block" alt="waves" />
                  <div className="relative flex items-center justify-center h-full">
                    <img className="relative z-20 w-full pt-6" src={image_rocket} alt="rocket" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  
   
  );

}