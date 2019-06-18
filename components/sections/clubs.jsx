import { Fragment } from 'react'
import SectionTitle from '../section-title'
import View from '../view'
import ChulaEngineeringIcon from '../chula-engineering-icon'

const Club = ({ name, type }) => (
    <div className="lg:w-1/4 md:w-1/2 w-full px-2 my-2">
        <div className="flex flex-col bg-white shadow-2xl h-full">
            <div className="pt-5 px-5 md:px-0 md:pt-0">
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
            <div className="flex w-full flex-col justify-start px-6 py-5">
                <div className="font-sans text-2xs leading-none tracking-widest mb-1 text-gray-600 font-medium">
                    {type ? type.toUpperCase() : 'CLUB'}
                </div>
                <p className="leading-relaxed font-headline text-gray-700">{name}</p>
            </div>
        </div>
    </div>
)

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
                        <Club type="Academic" name="IMC (Intania Music Club)" />
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
)

export default Clubs
