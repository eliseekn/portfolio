import cps_securite from "../../img/work/cps_securite.jpg";
import iziloyer from "../../img/work/iziloyer.jpg";
import les_ateliers_nappy from "../../img/work/les_ateliers_nappy.jpg";
import iziplanning from "../../img/work/iziplanning.jpg";
import diaspozen from "../../img/work/diaspozen.jpg";
import yellior from "../../img/work/yellior.jpg";
import cabinet_gesma from "../../img/work/cabinet_gesma.jpg";
import uvdrs from "../../img/work/uvdrs.jpg";
import aff from "../../img/work/aff.jpg";
import volunteering_app from "../../img/work/volunteering_app.png"
import { WorkType } from "../interfaces";

export const Data: WorkType[][] = [
    [
        {
            id: 1,
            url: "#",
            img: volunteering_app,
            alt: "Volunteering APP",
            skills: "React Native, Expo, TypeScript",
            desc: "Organization mobile app development."
        },

        {
            id: 2,
            url: "https://uvdrs.com",
            img: uvdrs,
            alt: "UVDRS",
            skills: "Laravel, MySQL, Bootstrap, Javascript",
            desc: "Online courses website development."
        },

        {
            id: 3,
            url: "https://iziloyer.com",
            img: iziloyer,
            alt: "IZI LOYER",
            skills: "Laravel, MySQL, Bootstrap, Javascript",
            desc: "Real estate website development."
        }
    ],

    [
        {
            id: 4,
            url: "https://iziplanning.pro",
            img: iziplanning,
            alt: "IZI PLANNING",
            skills: "Laravel, MySQL, Bootstrap, Javascript",
            desc: "Bug fixes and features development."
        },

        {
            id: 5,
            url: "https://africafintechforum.org/",
            img: aff,
            alt: "Africa Fintech Forum",
            skills: "Next.js, TypeScript",
            desc: "Organization website development."
        },

        {
            id: 6,
            url: "https://lesateliersnappy.com",
            img: les_ateliers_nappy,
            alt: "Les Ateliers Nappy",
            skills: "WordPress, API EtsyShop",
            desc: "Website redesign and feature development."
        }
    ],

    [
        {
            id: 7,
            url: "https://cps-securite.com",
            img: cps_securite,
            alt: "CPS Sécurité",
            skills: "Laravel, MySQL",
            desc: "Security company website development."
        },

        {
            id: 8,
            url: "https://diaspozen.com",
            img: diaspozen,
            alt: "DIASPO ZEN",
            skills: "Laravel, Bootstrap, Javascript",
            desc: "Real estate website development."
        },

        {
            id: 9,
            url: "https://yellior.ci",
            img: yellior,
            alt: "Yellior",
            skills: "TinyMVC, MySQL, Bootstrap, Javascript",
            desc: "E-commerce website development."
        }
    ],
    [
        {
            id: 10,
            url: "https://cabinetgesma.com",
            img: cabinet_gesma,
            alt: "Cabinet GESMA",
            skills: "WordPress, MySQL, Bootstrap",
            desc: "Accounting company website development."
        },
    ]
];
