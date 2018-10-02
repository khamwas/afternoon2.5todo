import React from 'react';

function List(props){
    let display = props.list.map((elem,index)=><h2>{elem}<button className='click' onClick={()=>props.deleteItem(index)}>X</button></h2>);
    return<div className='App'>
    {display}
    </div>

}

export default List