var config = {
  filename: __filename,
  ns: 'ghbtns',
  scripts: {
    button: require('./button')
  }
};

module.exports = function(app, options) {
  app.createLibrary(config, options);
}