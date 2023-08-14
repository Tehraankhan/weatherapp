import React, { useEffect, useState } from 'react'




function Icons(props) {


    return (



        <>
            <img src={` https://openweathermap.org/img/wn/${props.current}@2x.png`} className='weatherImage'></img>
        </>

    );










}

export default Icons;