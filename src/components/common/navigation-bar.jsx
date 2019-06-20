import React from 'react'
import ImageView from './image-view'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'gatsby'

const NavigationBar = () => (
    <header className="bg-white sticky top-0 z-20 shadow-2xl py-5">
        <ImageView>
            <div className="flex justify-center md:justify-start text-gray-700">
                <Link to="/#clubs">
                    <div className="flex items-center flex-row text-2xs">
                        <span className="text-sm">
                            <FiArrowLeft />
                        </span>
                        <span className="ml-5 font-sans uppercase tracking-widest">Go Back</span>
                    </div>
                </Link>
            </div>
        </ImageView>
    </header>
)

export default NavigationBar
