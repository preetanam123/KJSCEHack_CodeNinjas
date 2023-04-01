import React, { useEffect, useState } from 'react'
   
export default function Card(props) {
const [showModal, setShowModal] = useState(false);
const [showCard, setShowCard] = useState(true);
const handleClick = () => {
    setShowModal(true);
   }


    return (
        <div className="m-10">
            <div className="w-96 rounded-lg shadow-md lg:max-w-sm">
                <img
                    className="object-cover w-full rounded-lg h-96"
                    src={props.image}
                    alt="image"
                />
                <div className="p-4">
                    <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                        {props.name}
                    </h4>
                    <p className="my-2 leading-normal font-medium">
                        {props.desc}
                    </p>
                    <p className="my-2 leading-normal font-bold italic">
                        {props.spec}
                    </p>
                    <p className="mb-2 leading-normal text-bold">
                        Timings:
                    </p>
                    <div className="grid ml-2">
                        <span className='my-2'>
                            <input type="radio" name="fav_language" value="" />
                            <label for="time1" className='mx-3'>9:00am-10:00am</label>
                        </span>
                        <span className='my-2'>
                            <input type="radio" name="fav_language" value="" />
                            <label for="time2" className='mx-3'>10:00am-11:00am</label>
                        </span>
                        <span className='my-2'>
                            <input type="radio" name="fav_language" value="" />
                            <label for="time3" className='mx-3'>5:00pm-6:00pm</label>
                        
                        </span>
                        <span className='my-2'>
                            <input type="radio" name="fav_language" value="" />
                            <label for="time4" className='mx-3'>6:00pm-7:00pm</label>
                        </span>
                    </div>

                </div>
            </div>
        </div>

    )
}
