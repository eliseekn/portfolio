import { IProps } from "../interfaces/iprops"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faSyncAlt } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { IData, Data } from "../data/work"

export default function Work({ activePage, setActivePage }: IProps) {
    const [activeItem, setActiveItem] = useState<number>(1)
    const [activeData, setActiveData] = useState<Array<IData>>(Data[0])

    const loadMoreWork = () => {
        setActiveItem(activeItem + 1)

        if (activeItem >= Data.length - 1) setActiveItem(0)

        setActiveData(Data[activeItem])
    }

    return (
        <div className="flex flex-col items-start justify-center min-h-screen">
            <h1 className="mb-5 md:mb-10 font-bold text-3xl md:text-5xl">{activePage}</h1>
            
            <div className="grid grid-cols-3 gap-3">
                {activeData.map((data, index) => {
                    return <div key={index} className="relative col-span-6 lg:col-auto bg-transparent border-2 border-[#7e97a6] rounded-lg hover:shadow hover:shadow-[#7e97a6] transition-all duration-500">
                        <img src={data.img} alt={data.alt} loading="lazy" className="rounded-t-lg" onLoad={() => <div className="inline-block w-8 h-8 border-4 rounded-full"></div>} />
                        
                        <div className="p-4">
                            <p className="text-[#7e97a6] font-bold text-base md:text-xl md:leading-loose">{data.skills}</p>
                            <p className="text-base md:text-xl md:leading-loose">{data.desc}</p>
                        </div>
                        
                        <a href={data.url} target="_blank" rel="nofollow noreferrer noopener" className="after:absolute after:inset-0"></a>
                    </div>
                })}
            </div>

            <div className="flex items-center justify-center lg:justify-start mt-10">
                <button className="text-base md:text-xl md:leading-loose font-semibold bg-transparent text-[#7e97a6] border-2 border-[#7e97a6] hover:bg-[#7e97a6] hover:text-white px-4 py-2 rounded-lg transition-all duration-500" onClick={() => setActivePage('Mes services')} title="Retour">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>

                <button className="text-base md:text-xl md:leading-loose mx-5 font-semibold bg-transparent text-[#7e97a6] border-2 border-[#7e97a6] hover:bg-[#7e97a6] hover:text-white px-4 py-2 rounded-lg transition-all duration-500" onClick={() => loadMoreWork()} title="Plus de réalisations">
                    <FontAwesomeIcon icon={faSyncAlt} />
                </button>

                <button className="text-base md:text-xl md:leading-loose font-semibold bg-transparent text-[#7e97a6] border-2 border-[#7e97a6] hover:bg-[#7e97a6] hover:text-white px-4 py-2 rounded-lg transition-all duration-500" onClick={() => setActivePage('Mes projets')}>
                    Mes projets
                </button>
            </div>
        </div>
    )
}
