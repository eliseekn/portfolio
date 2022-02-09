export interface IData {
    name: string,
    url: string,
    desc: string
}

export const projectsData: Array<Array<IData>> = [
    [
        {
            name: 'TinyMVC',
            url: 'https://github.com/eliseekn/tinymvc',
            desc: 'Framework PHP basé sur l\'achitecture MVC permettant de créer facilement et rapidement des applications web et des API.'
        },

        {
            name: 'LaravelMetrics',
            url: 'https://github.com/eliseekn/laravel-metrics',
            desc: 'Package Laravel permetttant de générer des métriques et tendances à partir de la base de données.'
        },

        {
            name: 'CountriesHelper',
            url: 'https://github.com/eliseekn/countries-helper',
            desc: 'Helper pour le package Countries for Laravel.'
        }
    ],
]
