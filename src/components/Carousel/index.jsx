import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { dateFormatter } from "@/utils/dateFormatter";
import { MdDateRange } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "@tanstack/react-router";

export function CarouselComponent({ dataNews, category }) {
    const [api, setApi] = useState(null);
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div className="w-screen h-[90vh] flex flex-col items-center">
            <Carousel
                opts={{
                    loop: true,
                }}
                plugins={[Autoplay({ delay: 5000 })]}
                setApi={setApi}
                className={"w-[90%]"}
            >
                <CarouselContent className={"mt-6"}>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem
                            key={index}
                            className={
                                "bg-white-500 w-full h-[75vh] md:flex-row flex flex-col justify-between items-center"
                            }
                        >
                            <div className="w-[50%] px-10 flex flex-col gap-5">
                                <p className="text-sm text-gray-500 font-semibold">
                                    Headline
                                </p>
                                <p className="text-2xl font-semibold">
                                    {dataNews[index]?.title}
                                </p>
                                <p className="font-light text-muted-foreground">
                                    {dataNews[index]?.description}
                                </p>
                                <p className="flex items-center gap-4 text-sm font-light text-muted-foreground">
                                    <span>
                                        <MdDateRange />
                                    </span>
                                    {dateFormatter(dataNews[index]?.pubDate)}
                                </p>
                                <Link to={`/${category}/${dataNews[index]?.title}`} className="text-sm text-blue-400 hover:underline cursor-pointer flex items-center gap-1">
                                    Baca Selengkapnya
                                    <span>
                                        <MdArrowOutward className="text-md" />
                                    </span>
                                </Link>
                            </div>
                            <div className="w-[50%] px-6">
                                <img
                                    src={dataNews[index]?.thumbnail}
                                    alt="thumbnail"
                                    className="w-full rounded-2xl"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className={"border-transparent"} />
                <CarouselNext className={"border-transparent"} />
            </Carousel>
            <div className="py-2 mt-4 flex gap-4 text-center text-sm text-muted-foreground">
                <p>{current}</p>
                <p>Dari</p>
                <p>{count}</p>
            </div>
        </div>
    );
}

export function CarouselSection({}) {
    return (
        <Carousel
            opts={{
                loop: true,
            }}
            plugins={[Autoplay({ delay: 5000 })]}
            className="w-[60vw]"
        >
            <CarouselContent>
                <CarouselItem className={""}>
                    <div className="h-[40vh] rounded-2xl">
                        <img
                            src="/image/carousel1.png"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </CarouselItem>
                <CarouselItem className={""}>
                    <div className="h-[40vh] rounded-2xl">
                        <img
                            src="/image/carousel1.png"
                            className="w-full h-full object-contain invert"
                        />
                    </div>
                </CarouselItem>
                <CarouselItem className={""}>
                    <div className="h-[40vh] rounded-2xl">
                        <img
                            src="/image/carousel1.png"
                            className="w-full h-full object-contain grayscale"
                        />
                    </div>
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    );
}
