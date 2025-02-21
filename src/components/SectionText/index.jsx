export function SectionText({name}) {
    return (
        <div className="flex items-center gap-4 mb-10">
            <p className="font-extrabold text-2xl text-blue-400">I</p>
            <p className="font-semibold text-xl">{name}</p>
        </div>
    );
}
