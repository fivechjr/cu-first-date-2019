import React from 'react'

const ImageView = ({ children, className }) => (
    <div className="container">
        <div className="flex justify-center">
            <div className="w-full md:w-6/7 xl:w-2/3">
                <div className={className}>{children}</div>
            </div>
        </div>
    </div>
)

export default ImageView
