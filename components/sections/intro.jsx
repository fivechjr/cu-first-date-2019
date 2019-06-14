import SectionTitle from '../section-title'
import View from '../view'
import { FiStar } from 'react-icons/fi'

const Intro = () => (
    <section className="bg-white py-20">
        <View>
            <SectionTitle en="TO THE RED CASTLE" th="สู่ปราสาทแดง" icon={<FiStar />} />
            <div className="text-gray-700">
                <p className="font-headline text-lg leading-loose">
                    <span className="font-bold">First Date </span> หรือ{' '}
                    <span className="font-bold">วันเเรกพบนิสิตใหม่</span> เป็นงานที่พี่ ๆ
                    ในเเต่ละคณะจัดขึ้นมา เพื่อต้อนรับน้อง ๆ ทุกคนเข้าสู่รั้วจามจุรี
                    เเละเปิดโอกาสให้น้อง ๆ ได้ทำความรู้จักกับพี่ ๆ เเละเพื่อน ๆ ในคณะ
                    ผ่านการทำกิจกรรม เพื่อส่งมอบของขวัญ ความอบอุ่น ความประทับใจ
                    และความทรงจำแรกพบให้กับน้อง ๆ Freshmen ที่พี่ ๆ เเต่ละคณะจัดขึ้นมา โดยปีนี้งาน
                    CU First Date ของเรามาในธีม
                </p>
                <p className="font-headline font-bold italic text-lg text-red-600 leading-loose text-center my-5">
                    ‘‘ The Best Gift for You ’’
                </p>
                <p className="font-headline text-lg leading-loose">
                    หรือเปรียบงานปีนี้เป็น ‘‘ของขวัญ’’ ที่พี่ ๆ จุฬาฯทุกคนตั้งใจมอบให้น้อง ๆ
                    เพื่อให้น้อง ๆ ได้เก็บเกี่ยวความรู้เเละประสบการณ์ชีวิตในรั้วจุฬาฯ เเละออกไปเป็น
                    ‘’ของขวัญ’’ ที่ดีแก่สังคมภายนอกต่อไป อันจะตรงกับคำกล่าวที่ว่า
                </p>
                <p className="font-headline font-bold italic text-lg text-black leading-loose text-center my-5">
                    ‘‘ เกียรติภูมิจุฬาฯ คือเกียรติเเห่งการรับใช้ประชาชน ’’
                </p>
                <p className="font-headline text-lg leading-loose">
                    นั่นเองซึ่งงาน CU First Date ของเรานั้นจะจัดแค่ปีละ 1 ครั้งเท่านั้น! สำหรับน้อง
                    ๆ เฟรชชี่เท่านั้นนะ ซึ่งภายในงานน้อง ๆ จะได้พบกับความพิเศษมากมายที่พี่ ๆ
                    ตั้งใจมอบให้ เช่น ได้เจอเพื่อน ๆ CU103 ทั้งในและนอกคณะ อีกทั้งยังมีกิจกรรมต่าง ๆ
                    ที่พี่ ๆ เตรียมพร้อมมาส่งต่อข้อมูลเกี่ยวกับคณะของน้อง ๆ
                    และจุฬาลงกรณ์มหาวิทยาลัยของเรา
                </p>
            </div>
        </View>
    </section>
)

export default Intro
