import { CarouselComponent, CarouselSection } from "@/components/Carousel";
import { Navbar } from "@/components/Navbar";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getSomeNews } from "@/service/berita";
import toast from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";
import { BeritaTerpopuler, Rekomendasi } from "@/components/Berita";
import { Input } from "@/components/ui/input";
import Footer from "@/components/Footer";
import { SectionText } from "@/components/SectionText";

export const Route = createLazyFileRoute("/")({
    component: RouteComponent,
});

function RouteComponent() {
    const [category, setCategory] = useState("terbaru");

    const [dataNews, setData] = useState([]);

    const { data, isLoading, isError, isSuccess } = useQuery({
        queryKey: ["someNews", category],
        queryFn: () => getSomeNews(category),
    });

    useEffect(() => {
        if (isSuccess) {
            setData(data?.data?.posts);
        } else if (isError) {
            toast.error("Gagal memuat berita");
        }
    }, [data, isSuccess, isError]);

    if (isLoading) {
        return (
            <>
                <Navbar />
                <div className="w-screen h-[90vh] flex flex-col items-center justify-center">
                    <ClipLoader />
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar setCategory={setCategory} />
            <div className="flex flex-col justify-start w-screen mt-[10vh]">
                <CarouselComponent dataNews={dataNews} category={category}/>
                <div className="h-[65vh] flex flex-col px-[10vh]">
                    <SectionText name={"Berita Terpopuler"} />
                    <div className="grid grid-cols-3 gap-10 mt-10">
                        <BeritaTerpopuler
                            dataNews={dataNews}
                            category={category}
                        />
                    </div>
                </div>
                <div className="flex flex-col px-[10vh]">
                    <div className="flex items-center gap-4 justify-between">
                        <SectionText name={"Rekomendasi Untuk Anda"} />
                        <Input
                            className={"w-60 h-10"}
                            placeholder={"Cari Disini..."}
                        />
                    </div>
                    <div className="mt-10">
                        <Rekomendasi dataNews={dataNews} category={category} />
                    </div>
                </div>
            </div>
            <div className="h-[60vh] mt-[10vh] flex flex-col items-center justify-center px-[10vh]">
                <CarouselSection />
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}
