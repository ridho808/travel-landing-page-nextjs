import { PEOPLE_URL } from "@/constans"
import Image from "next/image"

interface CampProps {
    backgroundImage: string
    title: string
    subtitle: string
    peopleJoined: string
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
    return (
        <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
            <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">

                <div className="flexCenter gap-4">
                    <div className="rounded-full bg-green-50 p-4">
                        <Image src="./folded-map.svg" alt="map" width={24} height={24} className="" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="bold-18 text-white">{title}</h4>
                        <p className="regular-14 text-white">{subtitle}</p>
                    </div>
                </div>

                <div className="flexCenter gap-6">
                    <span className="flex -space-x-4 overflow-hidden">
                        {
                            PEOPLE_URL.map((url) => (
                                <Image
                                    className="inline-block h-10 w-10 rounded-full"
                                    src={url}
                                    key={url}
                                    alt="person"
                                    width={52}
                                    height={52}
                                />
                            ))
                        }
                    </span>
                    <p className="bold-16 md:bold-20 text-white">
                        {peopleJoined}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default function Camp() {
    return (
        <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
            <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
                <CampSite
                    backgroundImage="bg-bg-img-1"
                    title="Putuk Truno Camp"
                    subtitle="Prigen,Pasuruan"
                    peopleJoined="50+ Joined"
                />
                <CampSite
                    backgroundImage="bg-bg-img-2"
                    title="Mountain View"
                    subtitle="Somewhere in the wildness"
                    peopleJoined="120+ Joined"
                />
            </div>

            <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
                <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-xl">
                    <h1 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
                        <strong>Feeling Lost</strong> And Not Knowing The Way ?
                    </h1>
                    <p className="regular-14 xl:regular-16 mt-5 text-white">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum tenetur impedit sint libero eius dolores harum nobis iure, expedita perferendis illum nemo culpa rerum omnis totam! Consectetur cum possimus quae.
                    </p>
                    <Image
                        src={"./quote.svg"}
                        alt="quote"
                        width={186}
                        height={219}
                        className="camp-quote"
                    />
                </div>
            </div>
        </section>
    )
}
