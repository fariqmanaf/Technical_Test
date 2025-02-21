import { Content } from "./content";

export default function Footer() {
    return (
        <div
            className="relative h-[20rem]"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className="fixed bottom-0 h-[1000px] w-full">
                <Content />
            </div>
        </div>
    );
}
