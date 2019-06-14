import SectionTitle from '../section-title'
import classNames from 'classnames'

const Agenda = ({ start, end, name, className }) => (
    <div
        className={classNames(
            'w-full bg-white p-5 rounded-lg flex items-baseline flex-col md:flex-row',
            className
        )}>
        <div className="w-full md:w-1/6 flex mr-5">
            <div className="text-red-600 flex flex-row items-baseline leading-none mb-2 md:mb-0">
                <span className="text-2xl font-headline font-normal">{start}</span>
                <span className="font-serif opacity-50 mx-2">-</span>
                <span className="font-serif opacity-50">{end}</span>
            </div>
        </div>
        <div className="w-full md:w-5/6 flex">
            <div className="font-headline">{name}</div>
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
            name: 'วีดีทัศน์ 100 ปี จุฬาลงกรณ์มหาวิทยาลัย'
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
        <section className="bg-gray-100 py-20">
            <div className="container">
                <div className="mx-8 flex justify-center">
                    <div className="w-full md:w-6/7 lg:w-2/3">
                        <SectionTitle en="FIRST DATE" th="วันแรกพบ" />
                        {renderSchedule()}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FirstDate
