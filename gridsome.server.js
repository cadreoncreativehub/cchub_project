// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// const axios = require('axios')
const creatividades = require('./src/data/creatividades.json')

module.exports = function(api) {
    // api.loadSource(({ addCollection }) => {
    //   // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    // })
    api.loadSource(async actions => {
        const contentType = actions.addCollection({
            typeName: 'Creatividad'
        })

        for (const item of creatividades) {
            contentType.addNode({
                id: item.id,
                nombre: item.nombre,
                categoria: item.categoria,
                tamano: item.tamano,
                tamano_full: item.tamano.full,
                tamano_width: item.tamano.width,
                tamano_height: item.tamano.height,
                info: item.info,
                ruta_img: item.ruta_img,
                brand: item.brand,
                brand_nombre: item.brand.nombre,
                brand_logo: item.brand.logo
            })
        }

        // PARA EXTERNAL DATA: TENGO QUE PROBARLO PUES NO ME FUNCIONA:
        // const { data } = await axios.get('http://cadreonportfolio.byethost7.com/json/creatividades.json')
        // const collection = actions.addCollection('Creatividad')

        // for (const item of data) {
        //     console.log(item)
        //     collection.addNode({
        //         id: item.id,
        //         nombre: item.nombre,
        //         categoria: item.categoria
        //     })
        // }

        // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    })

    api.createPages(({ createPage }) => {
        // Use the Pages API here: https://gridsome.org/docs/pages-api/
    })
}