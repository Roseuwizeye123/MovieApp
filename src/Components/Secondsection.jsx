import React from 'react'
import { ImFire } from "react-icons/im";
import { SlFire } from "react-icons/sl";
import Tvshow from './Tvshow'
const Secondsection = () => {
  return (
    <div class="bg-black">
   
    <div class="flex  mr-32 items-center justify-center">
    <span class="text-xl flex mr-2 gap-2 font-bold ml-32  text-white"> <SlFire className="text-yellow-300 text-2xlg mt-1" />Trending</span>
  <hr class="border-t border-gray-400 flex-grow"/>
  <span class="text-white ml-2">see more</span>
</div>
<Tvshow/>
</div>

  )
}

export default Secondsection
