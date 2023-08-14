import React, { useEffect, useState } from 'react'
import Icons from './Icons';



function Card(props) {

    const time = () => {


        if (props.data.dt_txt.slice(11, 13) < 12) {
            return (
                <>
                    am
                </>

            )
        }
        else {
            return (<>
                pm
            </>)
        }
    }



    return (

        <>
            <div className='Card'>

                < h3>{props.data.dt_txt.slice(10, 16)} {time()}</h3>
                <Icons current={props.data.weather[0].icon} />
                <h3>{Math.ceil(props.data.main.temp) - 273}°C</h3>



            </div>



        </>
    )


}

export default Card;