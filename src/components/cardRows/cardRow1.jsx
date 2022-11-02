import React from "react";

 function Card1Item(props)
{
  return(
    <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
      <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
        <div className="flex-auto p-4">
          <div className="flex flex-row -mx-3">
            <div className="flex-none w-2/3 max-w-full px-3">
              <div>
                <p className="mb-0 font-sans font-semibold leading-normal text-sm">{props.title}</p>
                <h5 className="mb-0 font-bold">
                  {props.money}
                  <span className={`leading-normal text-sm font-weight-bolder ${props.color}`}>{props.percent}</span>
                </h5>
              </div>
            </div>
            <div className="px-3 text-right basis-1/3">
              <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                <i className={props.icon}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
);

}

export default  function CardRow1()
{
  return(

    <div className="flex flex-wrap -mx-3">
    {/* card1 */}
    
    <Card1Item color=" text-lime-500" money="$55,000" percent=" 55%" title="That's Money" icon="ni leading-none ni-money-coins text-lg relative top-3.5 text-white"/>

    {/* card2 */}
    <Card1Item color=" text-lime-500" money="$2,300" percent=" 53%" title="That's Users" icon="ni leading-none ni-world text-lg relative top-3.5 text-white"/>

    {/* card3 */}
    <Card1Item color="text-red-600" money="+$3,462" percent=" -2%" title="New Clients" icon="ni leading-none ni-paper-diploma text-lg relative top-3.5 text-white"/>

    {/* card4 */}
    <Card1Item  color="text-lime-500" money="$103,430" percent=" 5%" title="Sales" icon="ni leading-none ni-cart text-lg relative top-3.5 text-white"/>
  </div>
    
  );

}