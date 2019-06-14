const NavigationBar = () => (
    <header className="absolute top-0">
        <div className="container py-5">
            <div className="mx-8">
                <style jsx>{`
                    img {
                        height: 20px;
                        filter: brightness(0) invert(1);
                    }
                `}</style>
                <img src="/static/cu-eng-logo.png" alt="Chula Engineering" />
            </div>
        </div>
    </header>
)

export default NavigationBar
