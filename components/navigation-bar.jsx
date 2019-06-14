const NavigationBar = () => (
    <header className="shadow-2xl">
        <div className="container py-5">
            <div className="mx-8">
                <style jsx>{`
                    img {
                        height: 20px;
                        filter: brightness(0%);
                    }
                `}</style>
                <img src="/static/cu-eng-logo.png" alt="Chula Engineering" />
            </div>
        </div>
    </header>
)

export default NavigationBar
