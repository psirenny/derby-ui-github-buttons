var url = require('url');

exports.init = function (model) {
  var filename = model.get('filename') || 'github-btn.html'
    , fileurl = model.get('fileurl')
    , domain = model.get('domain') || 'ghbtns.com'
    , giturl = model.get('giturl')
    , height = model.get('height')
    , protocol = model.get('secure') ? 'https' : 'http'
    , repo = model.get('repo')
    , size = model.get('size')
    , type = model.get('type')
    , user = model.get('user');

  if (!giturl && (!user || !repo)) {
    return console.error('ghbtns:button: giturl or user/repo required');
  }

  if (!type) {
    return console.error('ghbtns:button: type required');
  }

  if (!fileurl) {
    model.set('fileurl', protocol + '://' + domain + '/' + filename);
  }

  if (giturl) {
    var gitpath = url.parse(giturl).path.split('/');
    model.set('repo', gitpath[2].slice(0, -4));
    model.set('user', gitpath[1]);
  }

  if (!height) {
    model.set('height', size === 'large' ? '30' : '20');
  }

  model.set('show', true);
};