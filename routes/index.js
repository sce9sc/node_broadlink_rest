var express = require('express');
var router = express.Router();

const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const ReactRouter = require('react-router');
const match = ReactRouter.match;
const RouterContext  = ReactRouter.RouterContext ;
const routes = require('../src/broadlink_react/routes/server')


/* GET home page. */
router.get('/*', function(req, res, next) {
  try {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {

      if (error) {
        console.log(error.message)
        res.status(500).send(error.message)

      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
        // You can also check renderProps.components or renderProps.routes for
        // your "not found" component or route respectively, and send a 404 as
        // below, if you're using a catch-all route.
        //res.status(200).send(renderToString(<RouterContext {...renderProps} />))
        var reactString = renderToString(<RouterContext {...renderProps} />)
        res.render('index', {
          title: 'Express',
          markup:reactString,
         });
        //res.status(200).send(renderToString(<RouterContext {...renderProps} />))
      } else {
        res.status(404).send('Not found')
      }

    })
  }catch(e){
    console.log(e)
  }

});

module.exports = router;
