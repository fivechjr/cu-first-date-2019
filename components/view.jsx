const View = ({ children }) => (
    <div className="container">
        <div className="mx-8 flex justify-center">
            <div className="w-full md:w-6/7 lg:w-3/4 xl:w-3/5">{children}</div>
        </div>
    </div>
)

export default View
