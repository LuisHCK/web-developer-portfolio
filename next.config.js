const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },

    webpack: function (config) {
        config.module.rules.push({
            test: /\.ya?ml$/,
            use: 'js-yaml-loader',
        })
        return config
    },
}
