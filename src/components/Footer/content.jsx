import { categories } from "@/utils/arrayOfCategory";
import {
    FaArrowCircleUp,
    FaFacebook,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";
import { Input } from "../ui/input";

export function Content() {
    return (
        <div className="bg-[#2C3C4D] py-8 px-12 h-full w-full flex flex-col justify-end">
            <Section2 />
        </div>
    );
}

const Section2 = () => {
    return (
        <div className="flex justify-between items-end text-white">
            <div className="flex flex-col justify-center gap-14">
                <div className="flex flex-col gap-4">
                    <img src="/logo/logo3.png" className="w-52" />
                    <p className="font-light text-sm">
                        © 2025 Berita Kini. All Rights Reserved.
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <p>Ikuti Kami</p>
                    <div className="flex gap-4 items-center">
                        <FaYoutube className="cursor-pointer text-black rounded-sm p-1 bg-white w-6 h-6" />
                        <FaInstagram className="cursor-pointer text-black rounded-sm p-1 bg-white w-6 h-6" />
                        <FaFacebook className="cursor-pointer text-black rounded-sm p-1 bg-white w-6 h-6" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex gap-8">
                    <div className="flex flex-col gap-2">
                        <p>Telusuri</p>
                        {categories.map((category, index) => (
                            <p
                                className="first-letter:uppercase text-sm font-extralight cursor-pointer"
                                key={index}
                            >
                                {category}
                            </p>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>Bantuan</p>
                        <p className="text-sm font-extralight cursor-pointer">
                            Kontak Kami
                        </p>
                        <p className="text-sm font-extralight cursor-pointer">
                            Laporan Pembajakan
                        </p>
                        <p className="text-sm font-extralight cursor-pointer">
                            Kebijakan
                        </p>
                    </div>
                </div>
            </div>
            <div className="mb-32">
                <p className="mb-4">Berlangganan Berita Terbaru</p>
                <div className="relative">
                    <Input
                        placeholder={"Masukkan Email"}
                        className={"bg-white text-gray-700"}
                    />
                    <div className="absolute top-2 right-2 cursor-pointer text-gray-600">
                        <FaArrowCircleUp />
                    </div>
                </div>
            </div>
        </div>
    );
};
