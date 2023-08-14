import React, { useEffect, useState } from 'react'
import Card from './Card';
import Icons from './Icons';







function Dashboard() {




    const [search, setsearch] = useState("Goa");
    const [data, setdata] = useState("");
    const [lists, setlists] = useState([])


    useEffect(() => {


        const fetchApi = async () => {




            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.REACT_APP_API_KEY}`

            const response = await fetch(url)
            const resjson = await response.json();
            setdata(resjson)

            const url1 = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${process.env.REACT_APP_API_KEY}`


            const response1 = await fetch(url1)
            const resjson1 = await response1.json();



            setlists(resjson1.list)




        }
        fetchApi();


    }, [search])


    return (

        <>

            <div className='Contanier'>

                <input type='search' placeholder='search' onChange={(e) => { setsearch(e.target.value) }} />

                <h1 style={{ margin: '58px 73px' }}>{search}</h1>
                {typeof data.main != "undefined" ?
                    (
                        <div>
                            < div className='container-2' >

                                <Icons current={data.weather[0].icon} />


                                <h1 style={{ margin: '58px 53px' }}>{Math.ceil(data.main.temp - 273)}°C {data.weather[0].description}</h1>

                            </div>
                        </div>


                    )
                    : (

                        <p>not found</p>

                    )






                }
            </div >
            <div className='container-3'>


                {!lists ? (
                    <p>not found</p>
                )
                    : (
                        <div>

                            {
                                lists.slice(0, 6).map((curr, index) => {

                                    return (
                                        <Card current={index} data={curr} />
                                    );

                                }
                                )
                            }


                        </div>

                    )


                }
            </div>

            <div className='container-4'>



                {typeof data.main != "undefined" ?
                    (
                        <div>

                            <ul>

                                <li className='li-1'>
                                    <h2>Humidity</h2>
                                    <h3>{data.main.humidity}%</h3>

                                </li>
                                <li className='li-2'>
                                    <h2>Pressure</h2>
                                    <h3>{data.main.pressure}</h3>
                                </li>
                                <li className='li-3'>
                                    <h2>sea Level</h2>
                                    <h3>{data.main.sea_level}</h3>
                                </li>
                                <li className='li-4'>
                                    <h2>Wind</h2>
                                    <h3>{data.wind.speed}m/s</h3>
                                </li>


                            </ul>




                        </div>




                    )
                    : (
                        <p>not found</p>
                    )

                }




            </div>


        </>


    );

}

export default Dashboard;