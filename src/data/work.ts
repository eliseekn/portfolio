import cps_securite from '../../img/work/cps_securite.png'
import iziloyer from '../../img/work/iziloyer.png'
import les_ateliers_nappy from '../../img/work/les_ateliers_nappy.png'
// import iziplanning from '../../img/work/iziplanning.png'
import diaspozen from '../../img/work/diaspozen.png'
import yellior from '../../img/work/yellior.png'
import cabinet_gesma from '../../img/work/cabinet_gesma.png'
// import eliseekn from '../../img/work/eliseekn.png'
// import immobiliere_abidjan from '../../img/work/immobiliere_abidjan.png'

export interface Props {
    id: number,
    url: string,
    img: string,
    alt: string,
    skills: string,
    desc: string,
    fullDesc: string
}

export const Data: Props[][] = [
    [
        {
            id: 1,
            url: 'https://cps-securite.com',
            img: cps_securite,
            alt: 'CPS Sécurité',
            skills: 'Laravel',
            desc: 'Implémentation backend.',
            fullDesc: 'Pour le compte d\'une agence web, j\'ai procédé à l\'intégration backend du site avec Laravel. Il a s\'agit principalement d\'intégrer le système de mailing pour le formulaire de contact et la gestion du consentement des cookies.'
        },

        {
            id: 2,
            url: 'https://iziloyer.com',
            img: iziloyer,
            alt: 'IZI LOYER',
            skills: 'Laravel, Bootstrap, Javascript',
            desc: 'Intégration responsive, développement du backoffice.',
            fullDesc: 'IziLoyer est une application métier de gestion des biens immobiliers pour les particuliers et professionnels. Le projet a été entièrement développé avec Laravel. Le backoffice devait permettre la gestion des biens, des locataires, des quittances et tous les paramètres relatif à la gestion des biens immobiliers.'
        },

        {
            id: 3,
            url: 'https://lesateliersnappy.com',
            img: les_ateliers_nappy,
            alt: 'Les Ateliers Nappy',
            skills: 'WordPress, API EtsyShop',
            desc: 'Refonte et personnalisation du site.',
            fullDesc: 'L\'objectif a été de se refaire une petite beauté. J\'ai donc procédé à la refonte et à la personnalisation du site en me basant sur un thème WordPress.'
        },

    ],
    
    [
        {
            id: 4,
            url: 'https://diaspozen.com',
            img: diaspozen,
            alt: 'DIASPO ZEN',
            skills: 'Laravel, TinyMVC, Bootstrap, Javascript',
            desc: 'Intégration responsive, développement du backoffice.',
            fullDesc: 'Afin d\'attirer plus de visiteur, deux actions ont été entreprises : la refonte de la landing page et l\'implémentation d\'une page d\'annonces de location et vente de biens immobiliers. Cette page néccessitait le développement d\'un backoffice pour les gestion des annonces ainsi que des annonceurs.'
        },

        {
            id: 4,
            url: 'https://yellior.ci',
            img: yellior,
            alt: 'Yellior',
            skills: 'TinyMVC, Bootstrap, Javascript',
            desc: 'Design et intégration responsive, développement du backoffice.',
            fullDesc: 'Yellior est une agro-industrie spécialisée dans la transformation et la commercialisation des produits agricoles notamment le manioc. Le besoin pour cette entreprise était d\'avoir une plateforme lui permettant à la fois de faire connaitre ses activités et ses produits, mais aussi de permettre la vente en ligne. Pour ce faire, un site e-commerce a été dévelopé. Le site intègre un backoffice pour les gestion des produits, des utilisateurs et des albums photos et vidéos. Il intègre également des articles récupérés depuis WordPress.'
        },

        {
            id: 6,
            url: 'https://cabinetgesma.com',
            img: cabinet_gesma,
            alt: 'Cabinet GESMA',
            skills: 'WordPress, Bootstrap',
            desc: 'Design et intégration responsive, développement WordPress.',
            fullDesc: 'Dans le but de faire connaitre ses activités, le cabinet comptable GESMA a décidé de se doté d\'un site internet. Le site a été dévelopé sur mesure sous WordPress.'
        },
    ]
]
