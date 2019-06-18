import SectionTitle from '../section-title'
import View from '../view'
import { FiStar } from 'react-icons/fi'

const Clubs = () => (
    <section className="bg-gray-100 py-20">
        <View>
            <SectionTitle en="CLUBS" th="ชมรมทั้งหมด" icon={<FiStar />} />
        </View>
    </section>
)

export default Clubs
