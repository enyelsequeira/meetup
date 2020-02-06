

const axios = require('axios');

module.exports.getAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=rhn3t2og7hsen40fqej3nr42e6'
    + '&client_secret=huv3l6nfgpr20r50ss0ccn1e12'
    + '&grant_type=authorization_code'
    + '&redirect_uri=https://enyelsequeira.github.io/meetup/'
    + '&code=' + event.pathParameters.code;

    const info = await axios.post(MEETUP_OAUTH_URL);

    return {
      statusCode: 200,
      body: JSON.stringify({
        access_token: info.data.access_token,
        refresh_token: info.data.refresh_token,
      }),
    };
  };