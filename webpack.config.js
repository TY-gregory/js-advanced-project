const Path =  require("path");

module.exports = {
 
    entry :"./src/js/script.js",

    devtool:false,
    output: {
        path: Path.resolve(__dirname, "tot"),
        filename: "bundle.js",
        
    },
    externals: {
        chart: {
          commonjs: 'chart',
          commonjs2: 'chart',
          amd: 'chart',
          root: '_',
        },
      },
    module: { rules: []},
    module: { rules: []},
    plugins: [ ],
    devServer: {},
    mode : "production",
};
