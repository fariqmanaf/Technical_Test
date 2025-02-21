import { BeritaTerkait, BeritaTerpopuler } from "@/components/Berita";
import { BreadCrumbComponent } from "@/components/BreadCrumb";
import { NewsContentDetail } from "@/components/Content";
import { Navbar } from "@/components/Navbar";
import { getSomeNews } from "@/service/berita";
import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";

import { CommentSection } from "@/components/Comment";
import { SectionText } from "@/components/SectionText";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export const Route = createLazyFileRoute("/$category/$title")({
    component: RouteComponent,
});

function RouteComponent() {
    const category = Route.useParams().category;
    const title = Route.useParams().title;

    const [dataNews, setData] = useState([]);
    const [popularNews, setPopularNews] = useState([]);

    const { data, isLoading, isError, isSuccess } = useQuery({
        queryKey: ["detailNews", category, title],
        queryFn: () => getSomeNews(category),
    });

    useEffect(() => {
        if (isSuccess) {
            setPopularNews(data?.data?.posts);
            const targetNews = data?.data?.posts.find(
                (news) => news.title === title
            );
            setData(targetNews);
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
            <Navbar noActive={true} />
            <div className="flex flex-col justify-start w-screen mt-[15vh] px-[5vw]">
                <BreadCrumbComponent
                    arrayOfBreadcrumb={["Beranda", category, "Detail"]}
                />
                <div className="w-full flex gap-[5vw] mt-12">
                    <div className="w-[70%] flex flex-col gap-6 mb-[15vh]">
                        <NewsContentDetail
                            category={category}
                            dataNews={dataNews}
                        />
                        <div className="mt-[10vh] w-full">
                            <SectionText name={"Komentar"} />
                            <CommentSection />
                        </div>
                        <div className="mt-10">
                            <div className="w-full flex justify-between">
                                <SectionText name={"Berita Terkait"} />
                                <Button
                                    className={
                                        "bg-blue-100 border border-blue-500 text-blue-500 hover:bg-blue-100 cursor-pointer"
                                    }
                                >
                                    Lihat Semua
                                </Button>
                            </div>
                            <BeritaTerkait
                                category={category}
                                dataNews={popularNews}
                            />
                        </div>
                    </div>
                    <aside className="w-[30%]">
                        <SectionText name={"Berita Terpopuler"} />
                        <div className="grid grid-row-3 gap-4">
                            <BeritaTerpopuler
                                category={category}
                                dataNews={popularNews}
                            />
                        </div>
                    </aside>
                </div>
            </div>
            <Footer />
        </>
    );
}
