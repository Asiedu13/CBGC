import React from 'react'



function Tree(props){
    return(
        <div className="tree">
            <div className="tree__head" style={{backgroundColor: props.headColor}}></div>
            <div className="tree__stick"></div>
        </div>
    )
}

export default Tree;