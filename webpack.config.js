const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
  mode: "production",
  entry: {
    filename: path.resolve(__dirname,"src/index.js")
   
  },
  output:{
    path:path.resolve(__dirname , "dist"),
    // new cash file
    filename:"[name][contenthash].js",
    assetModuleFilename:"[name][ext]", // change name poto exporting name ext again give this sistem
    clean:true // clean in cash file
  },  
  performance:{
   hints:false,
    maxAssetSize: 512000, //512000kb
    maxEntrypointSize:512000
  },
  devServer:{
    port:9000,
    compress: true,
    hot:true,
    static:{
        directory:path.join(__dirname , "dist")
    }
  },
  module:{
  rules:[
    {
        test:/\.scss$/,
        use:["style-loader", "css-loader","sass-loader"]  // downloadn all style from npm than start project npm run build
    },
    {
      test:/\.(png|svg|jpg|gif)$/i,  // i - in safe in big world example PNG
      type:"asset/resource" // this metont find of all phtos in file asset
    }
  ]
  },
  // app new options
  plugins:[
    new htmlWebpackPlugin({
      title:'My Web Page',
      filename: 'index.html',
      template:"./src/index.html" //main html in brawser
    })

  ]
};
