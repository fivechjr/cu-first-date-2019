import React from 'react'

const View = ({ children, className }) => (
    <div className="container">
        <div className="mx-8 flex justify-center">
            <div className="w-full md:w-3/4 lg:w-3/5 xl:w-1/2">
                <div className={className}>{children}</div>
            </div>
        </div>
    </div>
)

export default View
