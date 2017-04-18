var path = require('path');
var atImport = require("postcss-import");
var cssNextPlugin = require('postcss-cssnext');
//var Shell = require( 'child_process');

var brand = process.env.BRAND || 'catho';
var language = process.env.TRANSLATIONS || 'catho_pt';
var translations = path.resolve(__dirname, 'node_modules/form-components/translations/', language + '.json');
//Need to alias both through babel and webpack
var theme = path.resolve(__dirname, 'node_modules/form-components/theme/', brand);

exports.modifyWebpackConfig = function(config, stage) {
  config.merge({
      babel: {
        plugins: [ ["module-resolver", { "alias": {
                "translations": translations
            }
        }] ]
      },
      resolve: {
          alias: {translations$: translations}
      },
      postcss: [atImport({path: [theme]}), cssNextPlugin]
  });
  config.loader('form-components-js', function(cfg) {
    cfg.test = /node_modules\/form-components\/(.)+\.(js|jsx)$/
    cfg.loader = 'babel'
    return cfg;
  });
  return config;
};


// exports.postBuild = function(pages, callback) {
//    //won't be great on windows
//   Shell.execSync("cp -R public dist/" + language);
//   callback();
// }
