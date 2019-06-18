import React from 'react'
import View from './view'

const Footer = () => (
    <footer className="bg-white">
        <View className="py-10">
            <p className="text-center font-sans text-2xs uppercase tracking-widest text-gray-600">
                <span className="border-b pb-1 border-white">
                    &copy; {new Date().getFullYear()} CU First Date
                </span>
                <span className="opacity-50 border-b pb-1 border-white">
                    {' '}
                    &middot;{' '}
                    <a
                        href="https://github.com/fivechjr"
                        className="border-b pb-1 text-cu border-cu"
                        target="_blank">
                        Patcharapat Chaijaroen
                    </a>
                </span>
            </p>
        </View>
    </footer>
)

export default Footer
