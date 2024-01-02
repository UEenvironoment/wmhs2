import { React } from "react"
import Slide from "./slide.jsx"
import Nav from "./nav.jsx"
import Link from "./link.jsx"
import Div from "./Div.jsx"
export const Index = () =>{
    return(
        <>
        <div className="all">
            <div className="contents">

                <section id="link" className="mt-7">
                    <Link />
                </section>

                <section id="nav" className="translate-y-[-19px]">
                    <Nav />
                </section>

                <section id="slide" className="translate-y-[-70px]">
                <Slide />   
                </section>

                <section id="div-contents" className="translate-y-[-70px]">
                    <Div />    
                </section>    
            </div>
        </div>
        </>
    )
}
export default Index;