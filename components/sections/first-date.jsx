import SectionTitle from '../section-title'
import View from '../view'
import classNames from 'classnames'

const Agenda = ({ start, end, name, className }) => (
    <div className={classNames('w-full bg-white rounded-lg shadow-2xl', className)}>
        <div className="p-5">
            <div className="w-full flex items-baseline flex-col md:flex-row">
                <div className="w-full md:w-1/5 flex">
                    <div className="text-red-600 flex flex-row items-baseline leading-none mb-2 md:mb-0">
                        <span className="text-2xl font-headline font-normal">{start}</span>
                        <span className="font-serif opacity-50 mx-2">-</span>
                        <span className="font-serif opacity-50">{end}</span>
                    </div>
                </div>
                <div className="w-full md:w-4/5 flex">
                    <div className="font-headline">{name}</div>
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
            <View>
                <SectionTitle en="FIRST DATE" th="วันแรกพบ" />
                {renderSchedule()}
            </View>
        </section>
    )
}

export default FirstDate
