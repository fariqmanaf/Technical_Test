import { dateFormatter } from "@/utils/dateFormatter";
import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export function CardVerticalContent({ index, dataNews, category }) {
    const navigate = useNavigate();

    return (
        <div
            key={index}
            className="cursor-pointer hover:scale-[102%] transition-all ease-linear duration-200 bg-white-500 relative  w-full h-[40vh] flex flex-col justify-between items-center gap-4"
            onClick={() => {
                navigate({ to: `/${category}/${dataNews[index + 10]?.title}` });
            }}
        >
            <div className="w-full h-60 flex justify-center">
                <img
                    src={dataNews[index + 10]?.thumbnail}
                    className="object-cover w-full h-full rounded-2xl"
                />
            </div>
            <div className="flex flex-col gap-4">
                <p className="text-sm font-semibold text-gray-600">
                    {dataNews[index + 10]?.title}
                </p>
                <div className="flex items-center gap-3">
                    <p className="text-sm font-semibold text-blue-400 first-letter:uppercase">
                        {category}
                    </p>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <p className="text-sm font-semibold text-gray-600 first-letter:uppercase">
                        {dateFormatter(dataNews[index + 10]?.pubDate)}
                    </p>
                </div>
            </div>
        </div>
    );
}

export function CardHorizontalContent({ index, dataNews, category }) {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div
            key={index}
            className="cursor-pointer hover:scale-[102%] transition-all ease-linear duration-200 bg-white-500 relative  w-full h-[30vh] flex flex-row justify-between items-center gap-4"
            onClick={() => {
                navigate({ to: `/${category}/${dataNews[index + 5]?.title}` });
            }}
        >
            <div className="w-[50%] h-[80%]">
                <img
                    src={dataNews[index + 5]?.thumbnail}
                    className="object-cover w-full h-full rounded-2xl"
                />
                <p className="bg-slate-600 w-10 h-10 text-white flex items-center justify-center rounded-full absolute top-0 -left-4">
                    {index + 1}
                </p>
            </div>
            <div className="w-[50%] flex flex-col gap-4">
                <p className="text-sm font-semibold text-gray-600">
                    {dataNews[index + 5]?.title}
                </p>
                <div className="flex items-center gap-3">
                    <p className="text-sm font-semibold text-blue-400 first-letter:uppercase">
                        {category}
                    </p>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <p className="text-sm font-semibold text-gray-600 first-letter:uppercase">
                        {dateFormatter(dataNews[index + 5]?.pubDate)}
                    </p>
                </div>
            </div>
        </div>
    );
}
