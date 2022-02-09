import React, { Suspense, useState } from 'react'

const Spinner = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#222831] text-[#7e97a6]">
            <div className="animate-spin inline-block w-8 h-8 border-4 rounded-full"></div>
        </div>
    )
}

export default function App() {
    const [activePage, setActivePage] = useState<string>('About')

    const About = React.lazy(() => import('./components/about'))
    const Services = React.lazy(() => import('./components/services'))
    const Work = React.lazy(() => import('./components/work'))
    const Projects = React.lazy(() => import('./components/projects'))
    const Contact = React.lazy(() => import('./components/contact'))

    return (
        <div className="container mx-auto px-10 py-8 md:py-0 text-white">
            {activePage === 'About' && <Suspense fallback={<Spinner />}>
                <About activePage={activePage} setActivePage={setActivePage} />
            </Suspense>}

            {activePage === 'Mes services' && <Suspense fallback={<Spinner />}>
                <Services activePage={activePage} setActivePage={setActivePage} />
            </Suspense>}

            {activePage === 'Mes réalisations' &&  <Suspense fallback={<Spinner />}>
                <Work activePage={activePage} setActivePage={setActivePage} />
            </Suspense>}

            {activePage === 'Mes projets' &&  <Suspense fallback={<Spinner />}>
                <Projects activePage={activePage} setActivePage={setActivePage} />
            </Suspense>}

            {activePage === 'Me contacter' &&  <Suspense fallback={<Spinner />}>
                <Contact activePage={activePage} setActivePage={setActivePage} />
            </Suspense>}
        </div>
    )
}
