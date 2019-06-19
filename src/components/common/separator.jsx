import React, { Fragment } from 'react'

const Separator = ({ en, th, icon, color }) => {
    return (
        <Fragment>
            <div className="flex flex-row my-10">
                <div className="flex mr-5" style={{ width: '40px' }} />
                <div className="flex border-b border-red-600" style={{ width: '50px' }} />
            </div>
        </Fragment>
    )
}

export default Separator
