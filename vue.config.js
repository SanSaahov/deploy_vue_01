const { defineConfig } = require ( '@vue/cli-service' )
module.exports = defineConfig ( {
   transpileDependencies: true,
   // Нужно указать название проекта на GitHub
   // , это будет использовано npm-пакутом "gh-pages": "^6.2.0"
   // , который я установлю позже
   publicPath: '/deploy_vue_01/',
   devServer: {
      port: 8080
   }
} )
