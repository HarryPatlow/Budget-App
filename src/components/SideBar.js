import React from "react";
import { useState } from "react";


const SideBar = (props) => {
    var [SideBarActive,setSideBarActive] = useState(props.state)
    return (
        <div className={props.state}>
            <div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
  {/* <!--
    Background backdrop, show/hide based on slide-over state.

    Entering: "ease-in-out duration-500"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in-out duration-500"
      From: "opacity-100"
      To: "opacity-0"
  --> */}
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="fixed inset-0 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
        {/* <!--
          Slide-over panel, show/hide based on slide-over state.

          Entering: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-full"
            To: "translate-x-0"
          Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-0"
            To: "translate-x-full"
        --> */}
        <div class="pointer-events-auto relative w-screen max-w-md">
{/*           
            Close button, show/hide based on slide-over state.

            Entering: "ease-in-out duration-500"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "ease-in-out duration-500"
              From: "opacity-100"
              To: "opacity-0" */}
          
         

          <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
            <div class="px-4 sm:px-6">
              <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Panel title</h2>
            </div>
            <div class="relative mt-6 flex-1 px-4 sm:px-6">
              <div class="absolute inset-0 px-4 sm:px-6">
                <div class="h-full border-2 border-dashed border-gray-200" aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default SideBar;