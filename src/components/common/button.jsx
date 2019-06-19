import React, { Fragment } from 'react'
import classNames from 'classnames'

const Button = ({ onClick, children, className }) => (
    <div
        className={classNames('px-3 py-2 border rounded flex items-center', className)}
        style={{
            transition: '0.2s all cubic-bezier(0.165, 0.84, 0.44, 1)'
        }}>
        {children}
    </div>
)

export default Button
