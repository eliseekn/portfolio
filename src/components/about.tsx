import { IProps } from "../interfaces/iprops"

export default function About({ activePage, setActivePage }: IProps) {
    return (
        <div className="flex items-center min-h-screen">
            <div className="grid grid-cols-2 gap-3">
                <div className="col-span-6 md:col-auto my-auto order-2 md:order-1 text-center md:text-left">
                    <p>
                        <span className="text-base md:text-xl md:leading-loose">Bonjour 👋, je suis</span> <br />
                        <span className="text-lg md:text-3xl md:leading-loose font-semibold">Elisée Kouadio N'GUESSAN,</span>
                    </p>

                    <h1 className="my-4 md:my-5 text-[#7e97a6] uppercase font-black text-3xl md:text-5xl">
                        Développeur Full Stack.
                    </h1>

                    <p className="text-base md:text-xl md:leading-loose">
                        Spécialisé en PHP et React.js, j'ai plus de 3 années d'expérience 
                        dans le développement d'interfaces utilisateurs et d'applications web.
                    </p>

                    <div className="flex items-center justify-center md:justify-start mt-10">
                        <button className="text-base md:text-xl md:leading-loose font-semibold bg-transparent text-[#7e97a6] border-2 border-[#7e97a6] hover:bg-[#7e97a6] hover:text-white px-4 py-2 rounded-lg transition-all duration-500" onClick={() => setActivePage('Skills')}>
                            Mes compétences
                        </button>
                    </div>
                </div>

                <div className="col-span-6 md:col-auto m-auto order-1 md:order-2">
                    <img src="../assets/avatar.png" alt="Avatar" loading="lazy" className="w-28 md:w-full" />
                </div>
            </div>
        </div>
    )
}
