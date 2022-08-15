export interface Props {
    id: number,
    name: string,
    url: string,
    desc: string
}

export const Data: Props[][] = [
    [
        {
            id: 1,
            name: 'TinyMVC',
            url: 'https://github.com/eliseekn/tinymvc',
            desc: 'Framework PHP basé sur l\'achitecture MVC permettant de créer facilement et rapidement des applications web et des APIs.'
        },

        {
            id: 2,
            name: 'LaravelMetrics',
            url: 'https://github.com/eliseekn/laravel-metrics',
            desc: 'Package Laravel permetttant de générer des métriques et tendances à partir de la base de données.'
        },

        {
            id: 3,
            name: 'CountriesHelper',
            url: 'https://github.com/eliseekn/countries-helper',
            desc: 'Package Laravel qui est un helper pour le package Countries for Laravel.'
        },
    ]
]
