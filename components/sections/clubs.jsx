import { Fragment } from 'react'
import SectionTitle from '../section-title'
import View from '../view'
import ChulaEngineeringIcon from '../chula-engineering-icon'
import { IoLogoFacebook } from 'react-icons/io'
import classNames from 'classnames'

const Club = ({ name, type }) => {
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
                        <div
                            className="w-full bg-gray-300"
                            style={{
                                height: '150px',
                                backgroundImage: 'url("")',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center center'
                            }}
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

const Clubs = () => (
    <Fragment>
        <section className="bg-gray-100 py-20">
            <View>
                <SectionTitle en="CLUBS" th="ชมรมทั้งหมด" icon={<ChulaEngineeringIcon />} />
            </View>
            <div className="container">
                <div className="mx-8">
                    <div className="flex flex-wrap justify-center -my-2 -mx-2">
                        <Club type="Academic" name="Thinc." />
                        <Club type="Sport" name="วอลเลย์บอล" />
                        <Club type="Sport" name="ยิงปืน" />
                        <Club type="Sport" name="มวย" />
                        <Club type="Academic" name="โต้วาที" />
                        <Club type="Sport" name="รักบี้" />
                        <Club type="Academic" name="FE Camp" />
                        <Club type="Sport" name="กีฬาทางน้ำ" />
                        <Club type="Academic" name="วิชาการ" />
                        <Club type="Academic" name="ค่ายลานเกียร์" />
                        <Club type="Academic" name="ผู้นำเชียร์" />
                        <Club type="Academic" name="IMC" />
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
)

export default Clubs
