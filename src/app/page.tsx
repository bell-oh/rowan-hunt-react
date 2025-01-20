import Work from "./components/Work";
import Image from "next/image";

import DelWaterGap from "../../public/delwatergap.jpg"
import PrideDog from "../../public/pride-dog.jpg";

export default function Home() {
    return (
        <div>
            <div className="w-full h-36 flex flex-row justify-between p-12">
                <a href="." className="text-xl">Rowan Hunt</a>
                <div className="flex flex-row gap-6">
                    <a href="." className="hover:text-red-500 duration-500">Work</a>
                    <a href="./about.html" className="hover:text-red-500 duration-500">About</a>
                </div>
            </div>
            <div className=" border-red-500 flex flex-col justify-center items-center px-48 pb-24 ">
                <div className="flex flex-row gap-24 mb-20">
                    <h2>Ceramics</h2>
                    <h2>Jewelry</h2>
                    <h2>Paintings</h2>
                </div>
                <div className="flex flex-wrap justify-center gallery gap-8">
                    <Work type="painting" imageURL={DelWaterGap.src} title="Del Water Gap"></Work>
                    <Work type="painting" imageURL={DelWaterGap.src} title="Del Water Gap"></Work>
                    <Work type="painting" imageURL={DelWaterGap.src} title="Del Water Gap"></Work>
                    <Work type="painting" imageURL={DelWaterGap.src} title="Del Water Gap"></Work>
                    <Work type="painting" imageURL={DelWaterGap.src} title="Del Water Gap"></Work>
                </div>
            </div>
        </div>
    )


    
}
