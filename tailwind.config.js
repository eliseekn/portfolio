module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
            },

            animation: {
                'slide-in' : 'slideIn 1s ease-in-out',
                'slide-out' : 'slideOut .5s ease-in-out',
                'fade-in-1' : 'fadeIn .5s ease-in-out',
                'fade-in-2' : 'fadeIn 1s ease-in-out',
                'fade-in-3' : 'fadeIn 1.5s ease-in-out',
            },

            keyframes: {
                slideIn: {
                    'from': {
                        'opacity' : 0,
                        'margin-left' : '1%'
                    },

                    'to': {
                        'opacity' : 1,
                        'margin-left' : '0%'
                    }
                },

                slideOut: {
                    'from': {
                        'opacity' : 0,
                        'margin-left' : '-5%'
                    },

                    'to': {
                        'opacity' : 1,
                        'margin-left' : '0%'
                    }
                },

                fadeIn: {
                    'from': { 'opacity' : 0 },
                    'to': { 'opacity' : 1 }
                }
            }
        }
    },
    plugins: [],
}
