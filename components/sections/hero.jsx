import { Fragment } from 'react'
import Button from '../button'
import { FiArrowRight } from 'react-icons/fi'
import ChulaEngineeringIcon from '../chula-engineering-icon'

const Hero = () => (
    <Fragment>
        <style jsx>{`
            section {
                background: radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
                    url('/static/cu-hero.jpg') top center no-repeat;
                background-size: cover;
            }
            img {
                height: 30px;
                filter: brightness(0) invert(1);
            }
            #hero {
                min-height: 600px;
                height: 100vh;
            }
        `}</style>
        <section className="text-white">
            <div className="container">
                <div className="mx-8">
                    <div id="hero" className="w-full flex justify-center items-center">
                        <div className="flex flex-col">
                            <div className="text-2xl mb-5">
                                <ChulaEngineeringIcon />
                            </div>
                            <div className="text-5xl font-headline leading-none mb-5 tracking-wide">
                                <span className="font-normal">CU</span>{' '}
                                <span className="font-semibold">First Date</span>
                            </div>
                            <div className="text-2xl font-headline leading-none mb-10">
                                <span className="font-normal">แรกพบนิสิตจุฬา</span>
                                <span className="font-serif opacity-50"> &mdash; 2562</span>
                            </div>
                            <div
                                className="flex border-b border-white opacity-50 mb-10"
                                style={{ width: '50px' }}
                            />
                            <div>
                                <Button className="border-white bg-white text-black hover:bg-transparent hover:text-white">
                                    <span className="font-headline mr-2 text-lg">
                                        ชมรมในคณะวิศวกรรมศาสตร์
                                    </span>
                                    <FiArrowRight />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
)

export default Hero
