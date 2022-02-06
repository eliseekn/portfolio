export interface IData {
    url: string,
    img: string,
    alt: string,
    skills: string,
    desc: string
}

export const workData: Array<Array<IData>> = [
    [
        {
            url: 'https://cps-securite.com',
            img: '../assets/work/cps_securite.png',
            alt: 'CPS Sécurité',
            skills: 'Laravel',
            desc: 'Intégration backend du site'
        },

        {
            url: 'https://iziloyer.net',
            img: '../assets/work/iziloyer.png',
            alt: 'IZI LOYER',
            skills: 'Laravel, Bootstrap, Javascript',
            desc: 'Intégration de la maquette, développement de l\'application web'
        },

        {
            url: 'https://lesateliersnappy.com',
            img: '../assets/work/les_ateliers_nappy.png',
            alt: 'Les Ateliers Nappy',
            skills: 'WordPress, API EtsyShop',
            desc: 'Refonte et personnalisation du thème'
        }
    ],
    
    [
        {
            url: 'https://iziplanning.com',
            img: '../assets/work/iziplanning.png',
            alt: 'IZI PLANNING',
            skills: 'Laravel, Bootstrap, Javascript',
            desc: 'Intégration de la maquette, développement de l\'application web'
        },

        {
            url: 'https://diaspozen.com',
            img: '../assets/work/diaspozen.png',
            alt: 'DIASPO ZEN',
            skills: 'TinyMVC, Bootstrap, Javascript',
            desc: 'Intégration de la maquette, développement de l\'application web'
        },

        {
            url: 'https://yellior.ci',
            img: '../assets/work/yellior.png',
            alt: 'Yellior',
            skills: 'GIMP, TinyMVC, Bootstrap, Javascript',
            desc: 'Design et intégration de la maquette, développement de l\'application web'
        }
    ],
    
    [
        {
            url: 'https://cabinetgesma.com',
            img: '../assets/work/cabinet_gesma.png',
            alt: 'Cabinet GESMA',
            skills: 'GIMP, WordPress',
            desc: 'Design et intégration de la maquette'
        },
    ]
]
