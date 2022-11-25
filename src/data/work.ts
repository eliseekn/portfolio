import cps_securite from '../../img/work/cps_securite.png'
import iziloyer from '../../img/work/iziloyer.png'
import les_ateliers_nappy from '../../img/work/les_ateliers_nappy.png'
import iziplanning from '../../img/work/iziplanning.png'
import diaspozen from '../../img/work/diaspozen.png'
import yellior from '../../img/work/yellior.png'
import cabinet_gesma from '../../img/work/cabinet_gesma.png'
import uvdrs from '../../img/work/uvdrs.png'
import aff from '../../img/work/aff.png'

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
            url: 'https://uvdrs.com',
            img: uvdrs,
            alt: 'UVDRS',
            skills: 'Laravel, Bootstrap, Javascript',
            desc: 'Intégration responsive et développement full-stack.',
            fullDesc: "Développement d’un site web de cours en ligne pour les étudiants des universités publiques et privées de Côte d’Ivoire."
        },

        {
            id: 3,
            url: 'https://iziloyer.com',
            img: iziloyer,
            alt: 'IZI LOYER',
            skills: 'Laravel, Bootstrap, Javascript',
            desc: 'Intégration responsive et développement full-stack.',
            fullDesc: 'IziLoyer est une application métier de gestion des biens immobiliers pour les particuliers et professionnels. Le projet a été entièrement développé avec Laravel. Le backoffice devait permettre la gestion des biens, des locataires, des quittances et tous les paramètres relatif à la gestion des biens immobiliers.'
        },

        {
            id: 3,
            url: 'https://iziplanning.pro',
            img: iziplanning,
            alt: 'IZI PLANNING',
            skills: 'Laravel, Bootstrap, Javascript',
            desc: 'Intégration responsive et développement full-stack.',
            fullDesc: 'IziPlanning est une application dédiée à la gestion et à la plannification des agents de sécurité. Pour ce projet il a s\'agit principalement de faire la refonte du site et le refactoring du backoffice. D\'autres fonctionnalités on par la suite été développées.'
        },
    ],
    
    [
        {
            id: 4,
            url: 'https://africafintechforum.org/',
            img: aff,
            alt: 'Africa Fintech Forum',
            skills: 'Next.js, TypeScript',
            desc: 'Intégration responsive et développement front-end.',
            fullDesc: "Développement de l’interface utilisateur du site de l’ONG AFF. Participation au déveleppement de l'API pour la gestion des données."
        },

        {
            id: 5,
            url: 'https://lesateliersnappy.com',
            img: les_ateliers_nappy,
            alt: 'Les Ateliers Nappy',
            skills: 'WordPress, API EtsyShop',
            desc: 'Refonte et personnalisation du site.',
            fullDesc: 'L\'objectif a été de se refaire une petite beauté. J\'ai donc procédé à la refonte et à la personnalisation du site en me basant sur un thème WordPress.'
        },

        {
            id: 6,
            url: 'https://cps-securite.com',
            img: cps_securite,
            alt: 'CPS Sécurité',
            skills: 'Laravel',
            desc: 'Implémentation back-end.',
            fullDesc: 'Pour le compte d\'une agence web, j\'ai procédé à l\'intégration back-end du site avec Laravel. Il a s\'agit principalement d\'intégrer le système de mailing pour le formulaire de contact et la gestion du consentement des cookies.'
        },

    ],

    [
        {
            id: 7,
            url: 'https://diaspozen.com',
            img: diaspozen,
            alt: 'DIASPO ZEN',
            skills: 'Laravel, Bootstrap, Javascript',
            desc: 'Intégration responsive et développement full-stack.',
            fullDesc: 'Afin d\'attirer plus de visiteur, deux actions ont été entreprises : la refonte de la landing page et l\'implémentation d\'une page d\'annonces de location et vente de biens immobiliers. Cette page néccessitait le développement d\'un backoffice pour les gestion des annonces ainsi que des annonceurs.'
        },

        {
            id: 8,
            url: 'https://yellior.ci',
            img: yellior,
            alt: 'Yellior',
            skills: 'TinyMVC, Bootstrap, Javascript',
            desc: 'Design, intégration responsive et développement full-stack.',
            fullDesc: 'Yellior est une agro-industrie spécialisée dans la transformation et la commercialisation des produits agricoles notamment le manioc. Le besoin pour cette entreprise était d\'avoir une plateforme lui permettant à la fois de faire connaitre ses activités et ses produits, mais aussi de permettre la vente en ligne. Pour ce faire, un site e-commerce a été dévelopé. Le site intègre un backoffice pour les gestion des produits, des utilisateurs et des albums photos et vidéos. Il intègre également des articles récupérés depuis WordPress.'
        },

        {
            id: 9,
            url: 'https://cabinetgesma.com',
            img: cabinet_gesma,
            alt: 'Cabinet GESMA',
            skills: 'WordPress, Bootstrap',
            desc: 'Design, intégration responsive et développement WordPress.',
            fullDesc: 'Dans le but de faire connaitre ses activités, le cabinet comptable GESMA a décidé de se doté d\'un site internet. Le site a été dévelopé sur mesure sous WordPress.'
        },
    ]
]
