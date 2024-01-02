import React from "react"
import img from "./img/about.jpg"
export const Div = () =>{
  return(
    <>
    <div className="all flex space-x-20 ml-24">
      <div className="card1">
      <div className="content mt-40">
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-[150px]" src={img} alt="img description" />
    </div>
    <div class="p-8">
      <div class="uppercase ml-20 tracking-wide text-mediam text-indigo-500 font-semibold">WMHS Studies</div>
      <a href="#" class="block mt-1 ml-16 text-xl leading-tight font-medium text-black hover:underline">We have Best Students</a>
      <p class="mt-2 ml-5 text-slate-500">Success means different things to different people. But no matter what Our Students Succeed in Nation examination. we’re here for you every step of the way.</p>
    </div>
  </div>
</div>
      </div>
      </div>

      <div className="card2">
      <div className="content mt-40">
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-[150px]" src={img} alt="img description" />
    </div>
    <div class="p-8">
      <div class="uppercase ml-20 tracking-wide text-mediam text-indigo-500 font-semibold">WMHS Studies</div>
      <a href="#" class="block mt-1 ml-16 text-xl leading-tight font-medium text-black hover:underline">We have Best Students</a>
      <p class="mt-2 ml-5 text-slate-500">Success means different things to different people. But no matter what Our Students Succeed in Nation examination. we’re here for you every step of the way.</p>
    </div>
  </div>
</div>
      </div>
      </div>
    </div>
    </>
  )
}
export default Div;