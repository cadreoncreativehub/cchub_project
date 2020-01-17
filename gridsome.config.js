// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Cadreon Creative Hub',
    siteUrl: 'https://cadreoncreativehub.github.io',
    plugins: [{
        use: 'gridsome-source-google-sheets',
        options: {
            sheetId: '1xdh_T1FoVuCCuqHxOR5JIWNVwUCtMUIHTk-HqZHkh3M', //GOOGLE SHEET ID
            apiKey: 'AIzaSyBRSY086SzfbILuUaA221epR-W482JY08g', //GOOGLE_API_KEY 
            route: '/:Id', //Optional - omit if not using routes
            //type: 'TYPE_NAME', //Optional - default is googleSheet. Used for graphql queries.
        }
    }],
    templates: {
        Creatividad: [{
            // path: '/creatividad/:Id',
            path: (node) => {
                return `/creatividad/${node.id}`
            },
            component: './src/templates/Creatividad.vue'
        }]

    }




}