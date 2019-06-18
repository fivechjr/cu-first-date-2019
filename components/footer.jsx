import View from './view'

const Footer = () => (
    <footer className="bg-white">
        <View className="py-10">
            <p className="text-center font-serif text-xs uppercase tracking-widest text-gray-600">
                <span>&copy; CU First Date {new Date().getFullYear()}</span>
                <span className="opacity-50"> &middot; Patcharapat Chaijaroen</span>
            </p>
        </View>
    </footer>
)

export default Footer
