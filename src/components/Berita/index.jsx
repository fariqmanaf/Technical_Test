import { dateFormatter } from "@/utils/dateFormatter";
import { CardHorizontalContent, CardVerticalContent } from "../Card";

export function BeritaTerpopuler({ dataNews, category }) {
    return Array.from({ length: 3 }).map((_, index) => (
        <CardHorizontalContent
            category={category}
            dataNews={dataNews}
            index={index}
        />
    ));
}

export function Rekomendasi({ dataNews, category }) {
    return (
        <div className="w-full grid grid-cols-4 gap-6 gap-y-10">
            {Array.from({ length: 8 }).map((_, index) => (
                <CardVerticalContent
                    category={category}
                    dataNews={dataNews}
                    index={index}
                />
            ))}
        </div>
    );
}

export function BeritaTerkait({ dataNews, category }) {
    return (
        <div className="w-full grid grid-cols-3 gap-6 gap-y-10">
            {Array.from({ length: 3 }).map((_, index) => (
                <CardVerticalContent
                    category={category}
                    dataNews={dataNews}
                    index={index}
                />
            ))}
        </div>
    );
}
