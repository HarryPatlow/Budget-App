import React, { useState } from 'react'

function NewBudgets(){
    var [icon,setIcon] = useState("https://raw.githubusercontent.com/HarryPatlow/Budget-App/master/public/imgs/games.png")
    const iconChange = (e) =>{
        setIcon(e.target.value)
    }
    return (
        <>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center">
                    <img src={icon} alt='badge' className='w-6 m-2 rounded-full'/>
                    <h1 className="text-2xl font-bold text-gray-600" contentEditable='true' placeholder='New Budget'>Budget name</h1>
                </div>
            </header>
            <form className='bg-white divide-y divide-slate-100'>
            <div className='m-1 p-4 shadow-md rounded-lg md:m-5 md:px-10'>
                    <div className="col-span-6 sm:col-span-3">
                    
                        <div className='mt-2'>
                            <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
                            <select id="category" onChange={(e) => iconChange(e)} name="category" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm md:w-72">
                                <option value="https://raw.githubusercontent.com/HarryPatlow/Budget-App/master/public/imgs/games.png">Entertainment</option>
                                <option value="https://raw.githubusercontent.com/HarryPatlow/Budget-App/master/public/imgs/edu.png">Education</option>
                                <option value="https://raw.githubusercontent.com/HarryPatlow/Budget-App/master/public/imgs/food.png">Food</option>
                                <option value="https://raw.githubusercontent.com/HarryPatlow/Budget-App/master/public/imgs/transport.png">Transport</option>
                                <option value="https://raw.githubusercontent.com/HarryPatlow/Budget-App/master/public/imgs/house.png">Housing</option>
                                <option value="https://raw.githubusercontent.com/HarryPatlow/Budget-App/master/public/imgs/medical.png">Medical</option>
                                <option value="https://raw.githubusercontent.com/HarryPatlow/Budget-App/master/public/imgs/utilities.png">Utilities</option>
                                <option value="https://raw.githubusercontent.com/HarryPatlow/Budget-App/master/public/imgs/personal.png">Personal</option>
                            </select>

                        </div>
                        <div>

                        </div>

                    </div>
                    <div class="grid grid-cols-3 gap-6 mt-5">
                        <div class="col-span-3 sm:col-span-2">
                            <label for="maximum-expenditure" class="block text-sm font-medium text-gray-700 mt-3">Maximum Expenditure</label>
                            <div class="mt-1 flex rounded-md border border-gray-300 shadow-sm px-2 py-1.5 md:w-72">
                                <span class="text-sm inline-flex items-center pr-2 rounded-l-md text-gray-500 pt-0.5">$</span>
                                <input type="number" min="0" name="text-sm maximum-expenditure" id="maximum-expenditure" class="mt-1 text-slate-700 block w-full bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 gap-6 mt-5">
                        <div class="col-span-3 sm:col-span-2">
                            <label for="notes" class="block text-xs font-medium text-gray-500 mt-3">Notes</label>
                            <div class="mt-1 flex rounded-md">
                            <textarea type="text" name="notes" id="notes" class="text-xs mt-1 text-slate-700 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm md:w-100 h-36"/>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <input type="submit" value="Add Budget" className="m-1 hidden md:block bg-blue-600 w-32 text-white p-2 rounded-md mt-5 hover:bg-blue-700 hover:cursor-pointer px-3"/>
                        <button className="m-1 hidden md:block bg-red-500 text-white p-2 w-32 rounded-md mt-5 hover:bg-red-600 hover:cursor-pointer px-3">Cancel</button>
                    </div>
            </div>
            <input type="submit" value="Add Budget" className="block md:hidden bg-blue-600 w-full text-white p-2 hover:bg-blue-700 hover:cursor-pointer px-3"/>
            </form>
        </>
    )
}

export default NewBudgets