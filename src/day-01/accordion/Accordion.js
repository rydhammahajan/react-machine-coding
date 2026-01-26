import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 
import './Accordion.module.css'
import { items } from "./const";

function Accordion() {

    const [activeIndex , setActiveIndex] = useState(-1); 
    return items.length == 0 ? (<div>
            No items available.
        </div>)
        :  (
            <div classname="accordion ">
                {items.map((item , index)=>{
                    return (
                        <div className="accordion-item"
                            onClick={() => {
                                if (activeIndex == index) {
                                setActiveIndex(-1) ; 
                                } else {
                                    setActiveIndex(index); 
                            }
                        }}
                        >
                            <div>
                                <div className="accordion-title">{item.title} {activeIndex == index ? <FaChevronUp/> :<FaChevronDown /> } </div>
                                {(activeIndex == index) ? <p>{item.content}</p> : <></>}
                            </div>
                            
                        </div>
                        
                    )
                })}
            </div>
    );
}

export default Accordion;
