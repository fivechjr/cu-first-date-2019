import React, { Fragment } from 'react'
import classNames from 'classnames'

const Separator = ({ className }) => {
    return (
        <Fragment>
            <div className={classNames('flex flex-row', className)}>
                <div className="flex mr-5" style={{ width: '40px' }} />
                <div className="flex border-b border-red-600" style={{ width: '50px' }} />
            </div>
        </Fragment>
    )
}

export default Separator
