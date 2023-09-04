import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Landing.css';

const MagicBtn = () => {
    const [angel, setAngel] = useState(15);


    const onMouseMoveHandler = e =>{
        let rect = e.target.getBoundingClientRect(),
        x= e.clientX * 2 - rect.left;

        setAngel(x);
    }

    return (
        <a
        to={"/"}
        className='magic-btn  relative w-[15vw] h-[3vw] inline-block cursor-pointer'
        onMouseMove={onMouseMoveHandler}
        style={{"--x" : `${angel}deg`}}

        >
            <i className='absolute inset-[-0.18vw] block bg-[#b20000] rounded-[1vw] '></i>
            <i className='absolute inset-[-0.18vw] block bg-[#b20000] rounded-[1vw] '></i>

            <span className='absolute top-0 left-0 w-full h-full overflow-hidden rounded-[0.8vw] text-[1.2vw]
              flex-hz '>Click To Start</span>
        </a>
    );
};

export default MagicBtn;