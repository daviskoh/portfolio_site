
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Davis Koh\'s Portfolio Page', name: 'Davis' });
};