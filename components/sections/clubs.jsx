import { Fragment } from 'react'
import SectionTitle from '../section-title'
import View from '../view'
import ChulaEngineeringIcon from '../chula-engineering-icon'

const Club = ({ name }) => (
    <div className="lg:w-1/4 md:w-1/3 w-1/2 px-2 my-2">
        <div className="flex flex-col bg-white shadow-2xl rounded h-full">
            <div
                className="w-full rounded-tl rounded-tr bg-gray-300"
                style={{
                    height: '150px',
                    backgroundImage: 'url("")',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center'
                }}
            />
            <div className="flex w-full flex-col justify-start px-6 py-5">
                <div className="font-sans text-2xs leading-none tracking-widest mb-1 text-gray-600 font-medium">
                    CLUB
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
                        <Club name="Thinc." />
                        <Club name="วอลเลย์บอล" />
                        <Club name="ยิงปืน" />
                        <Club name="มวย" />
                        <Club name="โต้วาที" />
                        <Club name="รักบี้" />
                        <Club name="FE Camp" />
                        <Club name="กีฬาทางน้ำ" />
                        <Club name="วิชาการ" />
                        <Club name="ค่ายลานเกียร์" />
                        <Club name="ผู้นำเชียร์" />
                        <Club name="IMC (Intania Music Club)" />
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
)

export default Clubs
