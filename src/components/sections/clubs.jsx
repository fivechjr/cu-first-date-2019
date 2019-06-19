import React, { Fragment } from 'react'
import SectionTitle from '../common/section-title'
import View from '../common/view'
import ChulaEngineeringIcon from '../common/chula-engineering-icon'
import { IoLogoFacebook } from 'react-icons/io'
import classNames from 'classnames'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'

const BackgroundSection = ({ className, imageData }) => {
    return (
        <BackgroundImage
            Tag="div"
            className={className}
            fluid={imageData}
            backgroundColor={`#fff`}
        />
    )
}

const StyledBackgroundSection = styled(BackgroundSection).attrs({
    className: 'w-full bg-white border-b border-gray-200'
})`
    width: 100%;
    height: 150px;
    background-position: ${props =>
        props.backgroundPosition ? props.backgroundPosition : 'center center'};
    background-repeat: no-repeat;
    background-size: ${props => (props.backgroundSize ? props.backgroundSize : 'cover')};
`

const Club = ({ name, type, backgroundPosition, backgroundSize, imageData }) => {
    const getType = type => {
        switch (type.toUpperCase()) {
            default:
                return <span className="text-gray-600">CLUB</span>
            case 'ACADEMIC':
                return <span className="text-blue-600">{type.toUpperCase()}</span>
            case 'SPORT':
                return <span className="text-orange-600">{type.toUpperCase()}</span>
        }
    }
    return (
        <div className="lg:w-1/4 md:w-1/2 w-full my-2">
            <div className="mx-2">
                <div className="flex flex-col bg-white shadow-2xl h-full">
                    <div className="pt-6 px-6 md:px-0 md:pt-0">
                        <StyledBackgroundSection
                            imageData={imageData.childImageSharp.fluid}
                            backgroundPosition={backgroundPosition}
                            backgroundSize={backgroundSize}
                        />
                    </div>
                    <div className="flex w-full flex-col justify-start py-5">
                        <div className="flex justify-between items-center flex-row mx-6">
                            <div className="flex flex-col">
                                <div className="font-sans text-2xs leading-none tracking-widest mb-1 text-gray-600 font-medium">
                                    {getType(type)}
                                </div>
                                <div className="flex">
                                    <Link to={`/clubs/` + (name === 'Thinc.' ? 'thinc' : name)}>
                                        <p
                                            className={classNames(
                                                'leading-relaxed font-headline text-gray-700 border-b',
                                                {
                                                    'border-blue-200':
                                                        type.toUpperCase() === 'ACADEMIC',
                                                    'border-orange-200':
                                                        type.toUpperCase() === 'SPORT'
                                                }
                                            )}>
                                            {name}
                                        </p>
                                    </Link>
                                </div>
                            </div>
                            {/* <div className="flex">
                                <div className="text-2xl text-gray-600">
                                    <IoLogoFacebook />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Clubs = () => {
    return (
        <StaticQuery
            query={graphql`
                fragment imageFragment on File {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 4160) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }

                query imageQuery {
                    IMC: file(relativePath: { eq: "clubs/IMC.jpg" }) {
                        ...imageFragment
                    }

                    FE_CAMP: file(relativePath: { eq: "clubs/FE Camp.jpg" }) {
                        ...imageFragment
                    }

                    THINC: file(relativePath: { eq: "clubs/Thinc.jpg" }) {
                        ...imageFragment
                    }

                    SWIMMING: file(relativePath: { eq: "clubs/กีฬาทางน้ำ.jpg" }) {
                        ...imageFragment
                    }

                    LARNGEAR: file(relativePath: { eq: "clubs/ค่ายลานเกียร์.jpg" }) {
                        ...imageFragment
                    }

                    PUBLIC_SPEAKING: file(relativePath: { eq: "clubs/โต้วาที.jpg" }) {
                        ...imageFragment
                    }

                    CHEER: file(relativePath: { eq: "clubs/ผู้นำเชียร์.jpg" }) {
                        ...imageFragment
                    }

                    BOXING: file(relativePath: { eq: "clubs/มวย.jpg" }) {
                        ...imageFragment
                    }

                    SHOOTING: file(relativePath: { eq: "clubs/ยิงปืน.jpg" }) {
                        ...imageFragment
                    }

                    RUGBY: file(relativePath: { eq: "clubs/รักบี้.jpg" }) {
                        ...imageFragment
                    }

                    VOLLEYBALL: file(relativePath: { eq: "clubs/วอลเลย์บอล.jpg" }) {
                        ...imageFragment
                    }

                    ACADEMIC: file(relativePath: { eq: "clubs/วิชาการ.jpg" }) {
                        ...imageFragment
                    }
                }
            `}
            render={data => {
                return (
                    <Fragment>
                        <section id="clubs" className="bg-gray-100 py-20">
                            <View>
                                <SectionTitle
                                    en="CLUBS"
                                    th="ชมรมทั้งหมด"
                                    icon={<ChulaEngineeringIcon />}
                                />
                            </View>
                            <div className="container">
                                <div className="mx-8">
                                    <div className="flex flex-wrap justify-center -my-2 -mx-2">
                                        <Club
                                            type="Academic"
                                            name="Thinc."
                                            backgroundSize="contain"
                                            imageData={data.THINC}
                                        />
                                        <Club
                                            type="Sport"
                                            name="วอลเลย์บอล"
                                            imageData={data.VOLLEYBALL}
                                        />
                                        <Club
                                            type="Sport"
                                            name="ยิงปืน"
                                            imageData={data.SHOOTING}
                                        />
                                        <Club type="Sport" name="มวย" imageData={data.BOXING} />
                                        <Club
                                            type="Academic"
                                            name="โต้วาที"
                                            backgroundPosition="top center"
                                            imageData={data.PUBLIC_SPEAKING}
                                        />
                                        <Club
                                            type="Sport"
                                            name="รักบี้"
                                            backgroundPosition="top center"
                                            imageData={data.RUGBY}
                                        />
                                        <Club
                                            type="Academic"
                                            name="FE Camp"
                                            imageData={data.FE_CAMP}
                                        />
                                        <Club
                                            type="Sport"
                                            name="กีฬาทางน้ำ"
                                            imageData={data.SWIMMING}
                                        />
                                        <Club
                                            type="Academic"
                                            name="วิชาการ"
                                            backgroundSize="contain"
                                            imageData={data.ACADEMIC}
                                        />
                                        <Club
                                            type="Academic"
                                            name="ค่ายลานเกียร์"
                                            imageData={data.LARNGEAR}
                                        />
                                        <Club
                                            type="Academic"
                                            name="ผู้นำเชียร์"
                                            imageData={data.CHEER}
                                        />
                                        <Club type="Academic" name="IMC" imageData={data.IMC} />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Fragment>
                )
            }}
        />
    )
}

export default Clubs
