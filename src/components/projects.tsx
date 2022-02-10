import { useState } from "react"
import { IProps } from "../interfaces/iprops"
import { faArrowLeft, faSyncAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IData, Data } from "../data/projects"

export default function Projects({ activePage, setActivePage }: IProps) {
    const [activeItem, setActiveItem] = useState<number>(1)
    const [activeData, setActiveData] = useState<Array<IData>>(Data[0])

    const loadMoreProjects = () => {
        setActiveItem(activeItem + 1)

        if (activeItem >= Data.length - 1) setActiveItem(0)

        setActiveData(Data[activeItem])
    }

    return (
        <div className="flex flex-col items-start justify-center min-h-screen">
            <h1 className="mb-5 md:mb-10 font-bold text-3xl md:text-5xl">{ activePage }</h1>

            <div className="grid grid-cols-3 gap-3">
                {activeData.map((data, index) => {
                    return <div key={index} className="relative col-span-6 lg:col-auto bg-transparent border-2 border-[#7e97a6] rounded-lg p-4 hover:shadow hover:shadow-[#7e97a6] transition-all duration-500">
                        <p className="text-[#7e97a6] font-bold text-xl md:text-3xl">{data.name}</p>
                        <p className="text-base md:text-xl md:leading-loose my-4">{data.desc}</p>
                        <a href={data.url} target="_blank" rel="nofollow noreferrer noopener" className="after:absolute after:inset-0 text-[#7e97a6] font-bold text-base md:text-xl md:leading-loose"></a>
                    </div>
                })}
            </div>

            <div className="flex items-center justify-center md:justify-start mt-10">
                <button className="text-base md:text-xl md:leading-loose font-semibold bg-transparent text-[#7e97a6] border-2 border-[#7e97a6] hover:bg-[#7e97a6] hover:text-white px-4 py-2 rounded-lg transition-all duration-500" onClick={() => setActivePage('Mes réalisations')} title="Retour">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>

                {Data.length > 1 && <button className="text-base md:text-xl md:leading-loose mx-5 font-semibold bg-transparent text-[#7e97a6] border-2 border-[#7e97a6] hover:bg-[#7e97a6] hover:text-white px-4 py-2 rounded-lg transition-all duration-500" onClick={() => loadMoreProjects()} title="Plus de projets">
                    <FontAwesomeIcon icon={faSyncAlt} />
                </button>}

                <button className={"text-base md:text-xl md:leading-loose font-semibold bg-transparent text-[#7e97a6] border-2 border-[#7e97a6] hover:bg-[#7e97a6] hover:text-white px-4 py-2 rounded-lg transition-all duration-500 " + (Data.length == 1 && 'ml-5')} onClick={() => setActivePage('Me contacter')}>
                    <span className="hidden md:block">Me contacter</span>
                    <span className="block md:hidden">Contact</span>
                </button>
            </div>
        </div>
    )
}
