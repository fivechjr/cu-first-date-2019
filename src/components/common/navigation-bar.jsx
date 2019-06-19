import React from 'react'
import View from './view'
import { FaCaretRight } from 'react-icons/fa'
import { Link } from 'gatsby'

const NavigationBar = ({ pageTitle }) => (
    <header className="sticky top-0 py-4 bg-white z-20 bg-white border-b border-gray-200">
        <View>
            <div className="w-full flex flex-row justify-start">
                <div className="flex items-center">
                    <Link to="/#clubs">
                        <div className="font-sans flex items-center py-3 mr-2">
                            <span className="text-black leading-none font-headline text-sm">
                                <span>CU Engineering</span>
                                <span className="font-bold"> Clubs '19</span>
                            </span>
                        </div>
                    </Link>
                    <div className="flex items-center py-3">
                        <span className="text-2xs text-gray-400">
                            <FaCaretRight />
                        </span>
                        <span className="text-red-600 ml-2 leading-none font-headline text-sm">
                            {pageTitle}
                        </span>
                    </div>
                </div>
            </div>
        </View>
    </header>
)

export default NavigationBar
