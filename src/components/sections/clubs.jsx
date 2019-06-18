import React, { Fragment } from 'react'
import SectionTitle from '../common/section-title'
import View from '../common/view'
import ChulaEngineeringIcon from '../common/chula-engineering-icon'
import { IoLogoFacebook } from 'react-icons/io'
import classNames from 'classnames'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

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
    let imageFile = name
    if (imageFile.charAt(imageFile.length - 1) === '.') {
        imageFile = imageFile.slice(0, -1)
    }
    const getType = type => {
        switch (type.toUpperCase()) {
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
                        {/* <div
                            className="w-full bg-white border-b border-gray-200"
                            style={{
                                height: '150px',
                                backgroundImage: `url("/clubs/${imageFile}.jpg")`,
                                backgroundSize: backgroundSize ? backgroundSize : 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: backgroundPosition
                                    ? backgroundPosition
                                    : 'center center'
                            }}
                        /> */}
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
                                    {type ? getType(type) : 'CLUB'}
                                </div>
                                <div className="flex">
                                    <p
                                        className={classNames(
                                            'leading-relaxed font-headline text-gray-700 border-b',
                                            {
                                                'border-blue-200':
                                                    type.toUpperCase() === 'ACADEMIC',
                                                'border-orange-200': type.toUpperCase() === 'SPORT'
                                            }
                                        )}>
                                        {name}
                                    </p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="text-2xl text-gray-600">
                                    <IoLogoFacebook />
                                </div>
                            </div>
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

                    FE_Camp: file(relativePath: { eq: "clubs/FE Camp.jpg" }) {
                        ...imageFragment
                    }

                    Thinc: file(relativePath: { eq: "clubs/Thinc.jpg" }) {
                        ...imageFragment
                    }

                    Swimming: file(relativePath: { eq: "clubs/กีฬาทางน้ำ.jpg" }) {
                        ...imageFragment
                    }

                    Larngear: file(relativePath: { eq: "clubs/ค่ายลานเกียร์.jpg" }) {
                        ...imageFragment
                    }

                    Public_Speaking: file(relativePath: { eq: "clubs/โต้วาที.jpg" }) {
                        ...imageFragment
                    }

                    Cheer: file(relativePath: { eq: "clubs/ผู้นำเชียร์.jpg" }) {
                        ...imageFragment
                    }

                    Boxing: file(relativePath: { eq: "clubs/มวย.jpg" }) {
                        ...imageFragment
                    }

                    Shooting: file(relativePath: { eq: "clubs/ยิงปืน.jpg" }) {
                        ...imageFragment
                    }

                    Rugby: file(relativePath: { eq: "clubs/รักบี้.jpg" }) {
                        ...imageFragment
                    }

                    Volleyball: file(relativePath: { eq: "clubs/วอลเลย์บอล.jpg" }) {
                        ...imageFragment
                    }

                    Academic: file(relativePath: { eq: "clubs/วิชาการ.jpg" }) {
                        ...imageFragment
                    }
                }
            `}
            render={data => {
                return (
                    <Fragment>
                        <section className="bg-gray-100 py-20">
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
                                            imageData={data.Thinc}
                                        />
                                        <Club
                                            type="Sport"
                                            name="วอลเลย์บอล"
                                            imageData={data.Volleyball}
                                        />
                                        <Club
                                            type="Sport"
                                            name="ยิงปืน"
                                            imageData={data.Shooting}
                                        />
                                        <Club type="Sport" name="มวย" imageData={data.Boxing} />
                                        <Club
                                            type="Academic"
                                            name="โต้วาที"
                                            backgroundPosition="top center"
                                            imageData={data.Public_Speaking}
                                        />
                                        <Club
                                            type="Sport"
                                            name="รักบี้"
                                            backgroundPosition="top center"
                                            imageData={data.Rugby}
                                        />
                                        <Club
                                            type="Academic"
                                            name="FE Camp"
                                            imageData={data.FE_Camp}
                                        />
                                        <Club
                                            type="Sport"
                                            name="กีฬาทางน้ำ"
                                            imageData={data.Swimming}
                                        />
                                        <Club
                                            type="Academic"
                                            name="วิชาการ"
                                            backgroundSize="contain"
                                            imageData={data.Academic}
                                        />
                                        <Club
                                            type="Academic"
                                            name="ค่ายลานเกียร์"
                                            imageData={data.Larngear}
                                        />
                                        <Club
                                            type="Academic"
                                            name="ผู้นำเชียร์"
                                            imageData={data.Cheer}
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
