import './App.css';
import React, {useState} from 'react'
import Dashboard from './components/Dashboard';
import NewBudgets from './components/NewBudget';
import AllBudgets from './components/AllBudgets';
import SideBar from './components/SideBar';

function App() {
  // var dashmob = document.querySelector("#dash-mob");
  // var allmob = document.querySelector("#all-mob");
  // var newbudmob = document.querySelector("#new-mob");

  var [content, setContent] = useState(<NewBudgets/>)

  var [DashActive, setDashActive] = useState("inactive")
  var [NewActive, setNewActive] = useState("active")
  var [AllActive, setAllActive] = useState("inactive")
  var [SideBarActive, setSideBarActive] = useState('hidden')
  return(
    <>
    <div className="min-h-full">
      <SideBar state={SideBarActive}/>
  <nav className="bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"></img>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-stretch space-x-4">
              
              <button onClick={()=>{
                setContent(<Dashboard/>)
                setDashActive('active')
                setNewActive('inactive')
                setAllActive('inactive')
                }
              } className={DashActive==='active'? "mx-1 bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"} aria-current="page">Dashboard</button>

              <button onClick={()=>{
                setContent(<NewBudgets/>)
                setDashActive('inactive')
                setNewActive('active')
                setAllActive('inactive')
                }
              } className={NewActive==='active'? "mx-1 bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"} >New Entry</button>

              <button onClick={()=>{
                setContent(<AllBudgets/>)
                setDashActive('inactive')
                setNewActive('inactive')
                setAllActive('active')
                }
              } className={AllActive==='active'? "mx-1 bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>All Budgets</button>
            </div>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">

          <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg onClick={()=>{setSideBarActive('inline')}} className="block h-6 w-6" id="dropdown" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
            <button type="button" class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
              <span class="sr-only">Close panel</span>
              <svg onClick={()=>{setSideBarActive('hidden')}} class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

    
    <div id="mobile-menu" className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" id="menu">
      <button onClick={()=>{
        setContent(<Dashboard/>)
        setDashActive('active')
        setNewActive('inactive')
        setAllActive('inactive')
        }
      } className={DashActive==='active'? "mx-1 bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : "mx-1 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"} aria-current="page">Dashboard</button>

      <button onClick={()=>{
        setContent(<NewBudgets/>)
        setDashActive('inactive')
        setNewActive('active')
        setAllActive('inactive')
        }
      } className={NewActive==='active'? "mx-1 bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : "mx-1 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"} >New Entry</button>

      <button onClick={()=>{
        setContent(<AllBudgets/>)
        setDashActive('inactive')
        setNewActive('inactive')
        setAllActive('active')
        }
      } className={AllActive==='active'? "mx-1 bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : "mx-1 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>All Budgets</button>
      </div>
    </div>
  </nav>
  <div className='md:hidden'>
        { content }
  </div>
  <div className='hidden md:block'>
        { content }
  </div>
</div>
    </>
  )
}


export default App;
