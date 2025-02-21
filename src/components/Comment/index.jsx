import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function CommentSection() {
    return (
        <>
            <div className="flex justify-center gap-4">
                <img
                    className="w-10 h-10 rounded-lg"
                    src="https://ik.imagekit.io/frqmnf/_110975198_p081937v-1_pSVewumHN.jpg?updatedAt=1731480508879"
                />
                <div className="flex flex-col w-full">
                    <Textarea
                        placeholder={"Apa yang ingin anda tanyakan?"}
                        className={"h-36"}
                    />
                    <Button className={"w-20 mt-6 bg-blue-500"}>Kirim</Button>
                </div>
            </div>
            <hr className="mt-10 mb-10" />
            <CommentCard
                name={"Eno Bening"}
                image={
                    "https://ik.imagekit.io/frqmnf/eno_bening_l9YquKGgT.jpg?updatedAt=1729322448842"
                }
                comment={
                    "Mohon maaf, apakah sertifikatnya sudah tidak dapat diunduh ? Karena saya mau download ada konfirmasi bahwa TOTP aktivasi salah Bagaimana ya solusinya ?"
                }
            />
            <CommentCard
                name={"Kucing Ugal"}
                image={
                    "https://ik.imagekit.io/frqmnf/cat_CLAJxAwq3.jpg?updatedAt=1731947437175"
                }
                className={"ml-[5vw] mt-10"}
                comment={"saya mengunduh sertifikatnya kok juga belum bisa"}
            />
            <hr className="mt-10" />
        </>
    );
}

export function CommentCard({ className, image, name, comment }) {
    return (
        <div className={className}>
            <div className="flex gap-4">
                <img className="w-10 h-10 rounded-lg" src={image} />
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4 items-center text-sm text-gray-600">
                        <p>{name}</p>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <p>28 Mar 2024 11:15</p>
                    </div>
                    <p className="text-sm">{comment}</p>
                    <p className="text-blue-600 text-sm hover:underline">
                        Balas
                    </p>
                </div>
            </div>
        </div>
    );
}
