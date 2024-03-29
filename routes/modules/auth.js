const express = require('express')
const passport = require('passport')
const router = express.Router()

router.get(
  '/facebook',
  passport.authenticate('facebook', {
    scope: ['email', 'public_profile']
  })
)

router.get(
  '/facebook/callback',
  passport.authenticate(
    'facebook',
    {
      successRedirect: '/',
      failureRedirect: '/users/login'
    }
  )
)

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/users/login'
  })
)

router.get(
  '/github',
  passport.authenticate('github', { scope: ['user:email'] })
)

router.get(
  '/github/callback',
  passport.authenticate('github', {
    successRedirect: '/',
    failureRedirect: '/users/login'
  })
)
module.exports = router
