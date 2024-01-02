import React from "react"
export const Index = () => {
    const navToggle =() =>{
        document.getElementById('mobile-menu').classList.toggle('hidden')
    }
    return(
        <>
    <nav class="bg-gray-800 p-4">
        <div class="container mx-auto flex justify-between items-center">
            {/* <!-- Logo --> */}
            <a href="#" class="text-white text-lg font-semibold">Your Logo</a>
            
            {/* <!-- Mobile Menu Button --> */}
            <div class="block lg:hidden">
                <button id="nav-toggle" onClick={navToggle} class="text-white focus:outline-none">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            {/* <!-- Desktop Menu --> */}
            <div class="hidden lg:flex space-x-4">
                <a href="#" class="text-white hover:text-gray-300">Home</a>
                <a href="#" class="text-white hover:text-gray-300">About</a>
                <a href="#" class="text-white hover:text-gray-300">Services</a>
                <a href="#" class="text-white hover:text-gray-300">Contact</a>
            </div>
        </div>
    </nav>

    {/* <!-- Mobile Menu --> */}
    <div id="mobile-menu" class="lg:hidden hidden">
        <a href="#" class="block text-white py-2 px-4 hover:bg-gray-700">Home</a>
        <a href="#" class="block text-white py-2 px-4 hover:bg-gray-700">About</a>
        <a href="#" class="block text-white py-2 px-4 hover:bg-gray-700">Services</a>
        <a href="#" class="block text-white py-2 px-4 hover:bg-gray-700">Contact</a>
    </div>

    {/* <!-- JavaScript to toggle the mobile menu --> */}
        {/* document.getElementById('nav-toggle').onclick = function () { */}
        </>
    )
}
export default Index;