import Image from "next/image";
import Link from "next/link";


export default function PostCardTwo() {

    return (
        <div className="w-full h-full">
            <div className="grid grid-cols-2 gap-2 h-full">
                <div className="bg-blue">
                    <Image
                        src={'/img/ads-placeholder.png'}
                        width={700}
                        height={700}
                        style={{
                            width: "100%",
                            height: "100%"
                        }}
                    />
                </div>
                <div className="p-2 py-6 flex justify-center flex-col gap-2">
                    <Link href={"/"} className="bg-primaryColor px-1 py-0.5 w-fit  text-buttonText text-xs">
                        Technology
                    </Link>
                    <Link href={"/"} className="text-md md:tex-lg font-bold">Want a Career in Technology? Make This Your Secret Weapon</Link>
                    <span className="text-xs">June 28, 2021</span>


                </div>


            </div>

        </div>
    )
}