const SectionTitle = ({ en, th }) => (
    <div className="flex flex-col mb-10">
        <span className="font-headline text-sm tracking-widest leading-none mb-1 text-red-600">
            {en}
        </span>
        <span className="font-headline text-3xl leading-none mb-10">{th}</span>
        <div className="flex border-b border-black" style={{ width: '50px' }} />
    </div>
)

export default SectionTitle
