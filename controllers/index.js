exports.index_get = (req, res) => {
  //res.send('Welcome to book shop app')
  res.render('home/index', { WelcomeMessage: 'Welcome to our Book Shop App' })
}
