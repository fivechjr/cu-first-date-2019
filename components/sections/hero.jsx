import { Fragment } from 'react'
import Button from '../button'
import { FiArrowRight } from 'react-icons/fi'

const Hero = () => (
    <Fragment>
        <style jsx>{`
            section {
                background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                    url('/static/cu-hero.jpg') top center no-repeat;
                background-size: cover;
            }
            img {
                height: 30px;
                filter: brightness(0) invert(1);
            }
            #hero {
                height: 800px;
            }
        `}</style>
        <section className="text-white">
            <div className="container">
                <div className="mx-8">
                    <div id="hero" className="w-full flex justify-center items-center">
                        <div className="flex flex-col">
                            <div className="mb-5">
                                <img src="/static/cu-eng-logo.png" alt="Chula Engineering" />
                            </div>
                            <div className="text-5xl font-headline leading-none mb-5 tracking-wide">
                                <span className="font-normal opacity-75">CU</span>{' '}
                                <span className="font-semibold">First Date</span>
                            </div>
                            <div className="text-2xl font-headline leading-none mb-10">
                                <span className="font-normal">แรกพบนิสิตจุฬา</span> &mdash;{' '}
                                <span className="font-serif opacity-50">2562</span>
                            </div>
                            <div
                                className="flex border-b border-white opacity-50 mb-10"
                                style={{ width: '50px' }}
                            />
                            <div>
                                <Button className="border-white text-white hover:bg-white hover:text-black">
                                    <span className="font-headline mr-2">
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
