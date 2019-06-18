import { Fragment } from 'react'
import SectionTitle from '../section-title'
import View from '../view'
import classNames from 'classnames'
import { FiCalendar } from 'react-icons/fi'

const Agenda = ({ start, end, name, className }) => (
    <div className={classNames('w-full bg-white shadow-2xl', className)}>
        <div className="p-5">
            <div className="w-full flex items-baseline flex-col md:flex-row">
                <div className="w-full md:w-1/3 lg:w-1/4 flex">
                    <div className="text-red-600 flex flex-row items-baseline leading-none mb-3 md:mb-0">
                        <span className="text-xl font-headline font-normal">{start}</span>
                        <span className="font-serif opacity-50 mx-2">-</span>
                        <span className="font-serif opacity-50">{end}</span>
                    </div>
                </div>
                <div className="w-full md:w-2/3 lg:w-3/4 flex">
                    <p className="font-headline text-base leading-relaxed text-gray-700">{name}</p>
                </div>
            </div>
        </div>
    </div>
)

const FirstDate = () => {
    const schedule = [
        {
            start: '9.00',
            end: '10.00',
            name: 'พิธีเปิดงาน CU First Date'
        },
        {
            start: '10.00',
            end: '11.00',
            name:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius assumenda cupiditate quas dolores minus! Incidunt error, eius quo voluptas illo delectus modi libero tempore laboriosam, vero dolorum hic iste! Doloribus!'
        }
    ]
    const renderSchedule = () => {
        return schedule.map((value, index) => (
            <Agenda
                {...value}
                className={classNames({
                    'mb-2': index !== schedule.length
                })}
            />
        ))
    }
    return (
        <Fragment>
            <section className="bg-gray-100 py-20">
                <View>
                    <SectionTitle en="FIRST DATE" th="วันแรกพบ" icon={<FiCalendar />} />
                    {renderSchedule()}
                </View>
            </section>
        </Fragment>
    )
}

export default FirstDate
