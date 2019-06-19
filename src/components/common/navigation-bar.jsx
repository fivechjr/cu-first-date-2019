import React from 'react'
import View from './view'
import { FiChevronLeft } from 'react-icons/fi'

const NavigationBar = () => (
    <header className="sticky top-0 py-6 shadow-2xl">
        <View>
            <div className="w-full flex flex-row justify-between">
                <div className="w-1/2 flex items-center">
                    <span className="text-sm text-gray-700">
                        <FiChevronLeft />
                    </span>
                    <span className="text-gray-700 ml-2 leading-none font-sans text-2xs uppercase tracking-widest text-gray-600">
                        GO BACK
                    </span>
                </div>
            </div>
        </View>
    </header>
)

export default NavigationBar
