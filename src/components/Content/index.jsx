import { dateFormatter } from "@/utils/dateFormatter";
import { loremGenerator } from "@/utils/loremGenerator";

export function NewsContentDetail({ dataNews, category }) {
    return (
        <>
            <p className="text-2xl font-semibold">{dataNews?.title}</p>
            <div className="flex items-center gap-3">
                <p className="text-sm font-semibold text-blue-400 first-letter:uppercase">
                    {category}
                </p>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <p className="text-sm font-semibold text-gray-600 first-letter:uppercase">
                    {dateFormatter(dataNews?.pubDate)}
                </p>
            </div>
            <img
                src={dataNews?.thumbnail}
                className="object-cover w-full h-[60vh] rounded-2xl"
            />
            <p className="font-light">
                {dataNews?.description}
                {loremGenerator()}
            </p>
            <p className="font-light">{loremGenerator()}</p>
        </>
    );
}
