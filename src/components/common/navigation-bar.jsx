import React from 'react'
import View from './view'
import { FaCaretRight } from 'react-icons/fa'
import { Link } from 'gatsby'

const NavigationBar = ({ pageTitle, description }) => (
    <header className="sticky top-0 py-2 bg-white z-20 bg-white border-b border-gray-200">
        <View>
            <div className="w-full flex flex-row justify-start">
                <div className="flex items-center">
                    <Link to="/#clubs">
                        <div className="font-sans flex flex-col py-3 mr-5">
                            <span className="text-gray-700 leading-none font-headline text-base mb-2">
                                <span>ชมรมในคณะวิศวกรรมศาสตร์</span>
                            </span>
                            <p className="opacity-50 font-sans text-2xs leading-none tracking-widest text-cu font-medium">
                                CU FIRST DATE 2019
                            </p>
                        </div>
                    </Link>
                    <div className="flex items-center py-3">
                        <span className="text-3xl leading-none font-headline text-gray-300">/</span>
                        <div className="flex flex-col ml-5">
                            <span className="text-red-600 leading-none font-headline text-base mb-2">
                                {pageTitle}
                            </span>
                            <p className="font-sans text-2xs leading-none tracking-widest text-gray-600 font-medium">
                                {description.toUpperCase()}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </View>
    </header>
)

export default NavigationBar
