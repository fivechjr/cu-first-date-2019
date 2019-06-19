import React, { Fragment } from 'react'
import Button from '../common/button'
import { FiArrowRight } from 'react-icons/fi'
import ChulaEngineeringIcon from '../common/chula-engineering-icon'
import styled from 'styled-components'

const Section = styled.section`
    background-color: #000000;
    background-image: radial-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.25)), url('/cu-hero.jpg');
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
`

const HeroSection = styled.div`
    min-height: 600px;
    height: 100vh;
`

const Hero = () => (
    <Fragment>
        <Section className="text-white">
            <div className="container">
                <div className="mx-8">
                    <HeroSection id="hero" className="w-full flex justify-center items-center">
                        <div className="flex flex-col my-20">
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
                                <a href="#clubs">
                                    <div>
                                        <Button className="border-white bg-white text-black hover:bg-transparent hover:text-white">
                                            <span className="font-headline mr-2 text-lg">
                                                ชมรมในคณะวิศวกรรมศาสตร์
                                            </span>
                                            <FiArrowRight />
                                        </Button>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </HeroSection>
                </div>
            </div>
        </Section>
    </Fragment>
)

export default Hero
