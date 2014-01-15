
/*
 * GET about page.
 */

exports.about = function(req, res){
  res.render('about', { name: 'Davis Koh' });
};

exports.portfolio = function(req, res){
  res.render('portfolio', { name: 'Davis Koh' });
};

exports.contact = function(req, res){
  res.render('contact', { name: 'Davis Koh' });
};