import React from 'react'
import {Link} from 'react-router-dom';

export default function index() {
    return (
        <div>
            <section className='banner'>
                <div className="overlay flex flex-col item-center justify-center text-white ">
                    <h1 className="text-5xl font-bold text-right mb-10 lg:text-center lg:text-7xl lg:px-56">I create <span className="text-green-500">brand awareness</span> for small bussiness</h1>
                    <div className=" text-center ml-auto lg:ml-0">
                        <Link to="/hire" className="mr-5 bg-green-500 p-2 px-4 rounded-full font-semibold transition-all hover:bg-green-800">Contact me</Link>
                        <Link to="/projects" className="mr-5 bg-white text-green-500 p-2 px-4 rounded-full font-semibold transition-all hover:bg-green-800 hover:text-white">Our Services</Link>
                    </div>
                </div>
            </section>
        </div>
    )
};
