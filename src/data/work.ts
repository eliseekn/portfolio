import cps_securite from '../../img/work/cps_securite.png'
import iziloyer from '../../img/work/iziloyer.png'
import les_ateliers_nappy from '../../img/work/les_ateliers_nappy.png'
import iziplanning from '../../img/work/iziplanning.png'
import diaspozen from '../../img/work/diaspozen.png'
import yellior from '../../img/work/yellior.png'
import cabinet_gesma from '../../img/work/cabinet_gesma.png'
import eliseekn from '../../img/work/eliseekn.png'
import immobiliere_abidjan from '../../img/work/immobiliere_abidjan.png'

interface IData {
    url: string,
    img: string,
    alt: string,
    skills: string,
    desc: string
}

export const Data: IData[][] = [
    [
        {
            url: '#',
            img: immobiliere_abidjan,
            alt: 'Immobilière d\'Abidjan',
            skills: 'Next.js, Laravel, Bootstrap',
            desc: 'Design et intégration responsive, développement du backoffice.'
        },

        {
            url: '#',
            img: eliseekn,
            alt: 'Portfolio',
            skills: 'Vue.js, Typescript, TailwindCSS',
            desc: 'Design et intégration responsive.'
        },

        {
            url: 'https://cps-securite.com',
            img: cps_securite,
            alt: 'CPS Sécurité',
            skills: 'Laravel',
            desc: 'Implémentation backend.'
        }
    ],
    
    [
        {
            url: 'https://iziloyer.com',
            img: iziloyer,
            alt: 'IZI LOYER',
            skills: 'Laravel, Bootstrap, Javascript',
            desc: 'Intégration responsive, développement du backoffice.'
        },

        {
            url: 'https://lesateliersnappy.com',
            img: les_ateliers_nappy,
            alt: 'Les Ateliers Nappy',
            skills: 'WordPress, API EtsyShop',
            desc: 'Refonte et personnalisation du thème.'
        },

        {
            url: '#',
            img: iziplanning,
            alt: 'IZI PLANNING',
            skills: 'Laravel, Bootstrap, Javascript',
            desc: 'Intégration responsive, développement du backoffice.'
        }
    ],
    
    [
        {
            url: 'https://diaspozen.com',
            img: diaspozen,
            alt: 'DIASPO ZEN',
            skills: 'Laravel, TinyMVC, Bootstrap, Javascript',
            desc: 'Intégration responsive, développement du backoffice.'
        },

        {
            url: 'https://yellior.ci',
            img: yellior,
            alt: 'Yellior',
            skills: 'TinyMVC, Bootstrap, Javascript',
            desc: 'Design et intégration responsive, développement du backoffice.'
        },

        {
            url: 'https://cabinetgesma.com',
            img: cabinet_gesma,
            alt: 'Cabinet GESMA',
            skills: 'WordPress, Bootstrap',
            desc: 'Design et intégration responsive, développement WordPress.'
        },
    ]
]
