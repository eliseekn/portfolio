import cps_securite from '../../img/work/cps_securite.png'
import iziloyer from '../../img/work/iziloyer.png'
import les_ateliers_nappy from '../../img/work/les_ateliers_nappy.png'
import iziplanning from '../../img/work/iziplanning.png'
import diaspozen from '../../img/work/diaspozen.png'
import yellior from '../../img/work/yellior.png'
import cabinet_gesma from '../../img/work/cabinet_gesma.png'
import eliseekn from '../../img/work/eliseekn.png'
import immobiliere_abidjan from '../../img/work/immobiliere_abidjan.png'

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
            url: 'https://immobiliere-abidjan.vercel.app/',
            img: immobiliere_abidjan,
            alt: 'Immobilière d\'Abidjan',
            skills: 'Next.js, Bootstrap',
            desc: 'Design et intégration de la maquette, développement de l\'application web'
        },

        {
            url: '#',
            img: eliseekn,
            alt: 'Portfolio | Elisée Kouadio N\'Guessan',
            skills: 'React.js, TailwindCSS',
            desc: 'Design et intégration de la maquette'
        },

        {
            url: 'https://cps-securite.com',
            img: cps_securite,
            alt: 'CPS Sécurité',
            skills: 'Laravel',
            desc: 'Implémentation backend du site'
        }
    ],
    
    [
        {
            url: 'https://iziloyer.net',
            img: iziloyer,
            alt: 'IZI LOYER',
            skills: 'Laravel, Bootstrap, Javascript',
            desc: 'Intégration de la maquette, développement de l\'application web'
        },

        {
            url: 'https://lesateliersnappy.com',
            img: les_ateliers_nappy,
            alt: 'Les Ateliers Nappy',
            skills: 'WordPress, API EtsyShop',
            desc: 'Refonte et personnalisation du thème'
        },

        {
            url: 'https://iziplanning.com',
            img: iziplanning,
            alt: 'IZI PLANNING',
            skills: 'Laravel, Bootstrap, Javascript',
            desc: 'Intégration de la maquette, développement de l\'application web'
        }
    ],
    
    [
        {
            url: 'https://diaspozen.com',
            img: diaspozen,
            alt: 'DIASPO ZEN',
            skills: 'Laravel, TinyMVC, Bootstrap, Javascript',
            desc: 'Intégration de la maquette, développement de l\'application web'
        },

        {
            url: 'https://yellior.ci',
            img: yellior,
            alt: 'Yellior',
            skills: 'TinyMVC, Bootstrap, Javascript',
            desc: 'Design et intégration de la maquette, développement de l\'application web'
        },

        {
            url: 'https://cabinetgesma.com',
            img: cabinet_gesma,
            alt: 'Cabinet GESMA',
            skills: 'WordPress, Bootstrap',
            desc: 'Design et intégration de la maquette'
        },
    ]
]
