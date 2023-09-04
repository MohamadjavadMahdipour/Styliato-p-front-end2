import React, { Component } from 'react';

const dottedStyle = {
    width: "0.2vw",
    height:" 0.2vw",
    backgroundColor: "#ff0074a6",
    borderRadius:" 100%",
    position: "relative",
    zIndex: 3,
};

class DottedPattern extends Component {
    render() {
        return (
            <div className='dotted-pattern absolute z-[1] w-[3.5vw] h-[3.5vw] grid grid-cols-6'>
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            <span style={dottedStyle}></span>    
            </div>
        );
    }
}

export default DottedPattern;