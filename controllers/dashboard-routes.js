const router = require('express').Router();
const { Post } = require('../models/');
const withAuth = require('../utils/auth');

//Get posts on home page
router.get('/', withAuth, async (req, res) => {
  try {
    postData = await Post.findAll
    const posts = postData.map((post) => post.get({ plain: true }));

    // fill in the view to be rendered
    res.render('placeholder', {
      layout: 'dashboard',
      // from line 9 
      posts,
    });
  } catch (err) {
    res.redirect('login');
  }
});

router.get('/new', withAuth, (req, res) => {
  // figuring out what to pass here
  res.render('placeholder', {
    layout: 'dashboard',
  });
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    // figuring out what to pass here
    const postData = await Post.findByPk(????);

    if (postData) {
      // serializing data
      const post = postData.get({ plain: true });
      // which view should we render if we want to edit a post?
      res.render('placeholder', {
        layout: 'dashboard',
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;