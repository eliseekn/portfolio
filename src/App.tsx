import React, { Suspense, useState } from 'react'

const Spinner = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#222831] text-[#7e97a6]">
            <div className="inline-block w-8 h-8 border-4 rounded-full"></div>
        </div>
    )
}

export default function App() {
    const [activePage, setActivePage] = useState<string>('About')

    const About = React.lazy(() => import('./components/about'))
    const Skills = React.lazy(() => import('./components/skills'))
    const Work = React.lazy(() => import('./components/work'))
    const Contact = React.lazy(() => import('./components/contact'))

    return (
        <div className="container mx-auto px-10 py-8 md:py-0 text-white">
            {activePage === 'About' && <Suspense fallback={<Spinner />}>
                <About activePage={activePage} setActivePage={setActivePage} />
            </Suspense>}

            {activePage === 'Skills' && <Suspense fallback={<Spinner />}>
                <Skills activePage={activePage} setActivePage={setActivePage} />
            </Suspense>}

            {activePage === 'Work' &&  <Suspense fallback={<Spinner />}>
                <Work activePage={activePage} setActivePage={setActivePage} />
            </Suspense>}

            {activePage === 'Contact' &&  <Suspense fallback={<Spinner />}>
                <Contact activePage={activePage} setActivePage={setActivePage} />
            </Suspense>}
        </div>
    )
}
