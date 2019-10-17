const clientId = "f9204e8539a54126bfc4970801dc2554";
const redirect_uri = "http://localhost:3000/";
let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    let urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
    let urlTokenExpiresIn = window.location.href.match(/expires_in=([^&]*)/);

    if (urlAccessToken && urlTokenExpiresIn) {
      accessToken = urlAccessToken[1];
      const expiresIn = Number(urlTokenExpiresIn[1]);

      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_uri}`;
      window.location.href = accessUrl;
    }
  },

  search(term) {
    const accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  }
};

export default Spotify;
