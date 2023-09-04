import React, { useEffect, useState } from 'react';

// import styles
import "./ScrollTop.css"

const ScrollTop = () => {
    const [displayBtn ,setDisplayBtn ] = useState(false);


    useEffect(()=>{
        window.addEventListener("scroll" , function(){
            if(window.pageYOffset > 500){
                setDisplayBtn(true);
            }else{
                setDisplayBtn(false);
            }
        },[])
    })

    return (
        <a href='#' className={displayBtn ? "scroll-top  display flex-vr":"scroll-top flex-vr"}></a>
    );
};

export default ScrollTop;