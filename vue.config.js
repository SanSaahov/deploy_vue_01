const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
   // Указывает, какие зависимости необходимо транслировать
   transpileDependencies: true,
   
   // Устанавливает базовый путь для приложения
   publicPath: process.env.NODE_ENV === 'production' ? '/deploy_vue_01/' : '/',
   
   // Настройки сервера разработки
   devServer: {
      port: 8080,
      // open: true, // Автоматически открывать браузер при запуске сервера
      hot: true,  // Включает горячую перезагрузку
      historyApiFallback: true, // Поддержка HTML5 History API
   },
});
