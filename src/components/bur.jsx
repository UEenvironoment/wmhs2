import React from "react"
export const Burg =() =>{
    return(
        <>
        <div className="all">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <header class="sticky top-0 z-50">
        <nav class="container flex justify-between items-center">
            <div class="py-5 text-color-secondary font-bold text-3xl">
                <a href="#home">
                    <span class="text-color-white">Light</span>Code.
                </a>
            </div>

            <div>
                <ul class="hidden lg:flex items-center space-x-6">
                    <li><a href="#home" class="hover:text-color-secondary ease-in duration-200">Home</a></li>
                    <li><a href="#features" class="hover:text-color-secondary ease-in duration-200">Features</a></li>
                    <li><a href="#testimonial" class="hover:text-color-secondary ease-in duration-200">Testimonial</a></li>
                    <li><a href="#pricing" class="hover:text-color-secondary ease-in duration-200">Pricing</a></li>
                    <li><a href="#blog" class="hover:text-color-secondary ease-in duration-200">Blog</a></li>
                    <li><a href="#contact" class="hover:text-color-secondary ease-in duration-200">Contact</a></li>

                    <li><button class="bg-color-secondary px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">free trial</button></li>
                </ul>
            </div>

            {/* <!-- Mobile screen  --> */}
            <div id="hamburger" class="lg:hidden cursor-pointer z-50">
                <i class="fa-solid fa-bars"></i>
            </div>

            <div id="menu" class="hidden bg-color-primary-dark h-[100vh] absolute inset-0">
                <ul class="h-full grid place-items-center py-20">
                    <li><a id="hLink" href="#home" class="hover:text-color-secondary ease-in duration-200">Home</a></li>
                    <li><a id="hLink" href="#features" class="hover:text-color-secondary ease-in duration-200">Features</a></li>
                    <li><a id="hLink" href="#testimonial" class="hover:text-color-secondary ease-in duration-200">Testimonial</a></li>
                    <li><a id="hLink" href="#pricing" class="hover:text-color-secondary ease-in duration-200">Pricing</a></li>
                    <li><a id="hLink" href="#blog" class="hover:text-color-secondary ease-in duration-200">Blog</a></li>
                    <li><a id="hLink" href="#contact" class="hover:text-color-secondary ease-in duration-200">Contact</a></li>

                    <li><button class="btn">free trial</button></li>
                </ul>
            </div>
        </nav>
    </header>

        </div>
        </>
    )
}
export default Burg;