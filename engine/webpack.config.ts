const path = require("path");
const webpack = require("webpack");


module.exports = {
    mode: "development",
    externals: {
        "node:fs": "commonjs node:fs"
    },
    resolve: {
        fallback: {
            crypto: false,
            path: require.resolve("path-browserify"),
            browser: false,
            fs: false
        }

    },
    plugins: [
        new webpack.NormalModuleReplacementPlugin(
            /^node:/, (resource: any) => {
                resource.request = resource.request.replace(/^node:/, '');
            },

        ),

    ],
    entry: "./out/engine.out.js",
    output: {
        filename: "engine.bundle.js",
        library: "GloryGameEngine",
        path: path.resolve("./out/", "../../server/public/scripts/bundles/engine/")
    }

};
