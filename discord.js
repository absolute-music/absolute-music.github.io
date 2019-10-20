const express = require('express');

const router = express.Router();

const redirect = encodeURIComponent('https://absolute-music.github.io/loggedin.html/api/discord/callback');

router.get('/login', (req, res) => {
  res.redirect(`https://discordapp.com/api/oauth2/authorize?client_id=633176467068551168&redirect_uri=https%3A%2F%2Fabsolute-music.github.io%2Floggedin.html%2Fapi%2Fdiscord%2Fcallback&response_type=code&scope=identify`);
});

module.exports = router;
