import { Fragment } from 'react'
import { FiArrowRight } from 'react-icons/fi'

const Hero = () => (
    <Fragment>
        <style jsx>{`
            img {
                height: 30px;
            }
            #hero {
                height: 600px;
            }
        `}</style>
        <section className="bg-white">
            <div className="container">
                <div className="mx-8">
                    <div id="hero" className="w-full flex justify-center items-center">
                        <div className="flex flex-col">
                            <div className="mb-5">
                                <img src="/static/cu-eng-logo.png" alt="Chula Engineering" />
                            </div>
                            <div className="text-5xl font-headline leading-none mb-5 tracking-wide">
                                <span className="font-normal">CU</span>{' '}
                                <span className="font-semibold text-cu">First Date</span>
                            </div>
                            <div className="text-2xl font-headline leading-none mb-10">
                                <span className="font-normal">แรกพบนิสิตจุฬา</span> &mdash;{' '}
                                <span className="font-serif text-gray-600">2562</span>
                            </div>
                            <div
                                className="flex border-b border-gray-600 mb-10"
                                style={{ width: '50px' }}
                            />
                            <div>
                                <button className="px-3 py-2 border border-black rounded flex items-center">
                                    <span className="font-headline mr-2">
                                        ชมรมในคณะวิศวกรรมศาสตร์
                                    </span>
                                    <FiArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
)

export default Hero
