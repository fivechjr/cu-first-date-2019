import { Fragment } from 'react'

const SectionTitle = ({ en, th, icon }) => (
    <Fragment>
        <style jsx>{`
            .icon {
                width: 40px;
                height: 40px;
            }
        `}</style>
        <div className="flex flex-row">
            <div className="icon flex justify-center items-center text-white bg-red-600 bg-white shadow-xl rounded-full mr-5">
                {icon}
            </div>
            <div className="flex flex-col">
                <span className="font-headline text-sm tracking-widest leading-none mb-1 text-red-600">
                    {en}
                </span>
                <span className="font-headline text-3xl leading-none mb-10">{th}</span>
                <div className="flex border-b border-red-600 mb-10" style={{ width: '50px' }} />
            </div>
        </div>
    </Fragment>
)

export default SectionTitle
