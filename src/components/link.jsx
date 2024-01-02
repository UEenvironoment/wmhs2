import React from "react"
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa"
export const Links = () => {
    return(
        <>
        <div className="all">
            <div className="start">
                <div className="head flex text-xl font-serif bg-slate-200 py-4 translate-y-[-19px]">
                  <div className="contents space-x-6 translate-x-5">
                  <div className="email border-l-black border-r-2 border-black px-6">
                        <h1 className="flex space-x-3">
                            <div className="icon mt-1">
                                <FaEnvelope />
                            </div>
                            <div className="email max-md:text-sm">
                            <h1 className="max-md:mt-2">
                                worldmission779@gmail.com
                            </h1>
                            </div>
                        </h1>
                    </div>
                    <div className="tel">
                        <h1 className="flex space-x-3">
                            <div className="icon mt-1">
                            <FaPhoneAlt/>
                            </div>
                            <div className="number max-md:text-sm">
                                <h1 className="max-md:mt-2">
                                (+250) 785623245 / 781253525
                                </h1>
                            </div>
                        </h1>
                    </div>    
                </div>  
                </div>
            </div>
        </div>
        </>
    )
}
export default Links;