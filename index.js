//MIT License
//
//Copyright (c) 2021 suhaibkhater

const { google } = require("googleapis");
const service = google.youtube("v3");

module.exports = function youtubeUploader(
  {
    description,
    title,
    accessToken,
    refreshToken,
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URL,
    media,
    privacyStatus,
  },
  onSuccess,
  onError
) {
  var OAuth2 = google.auth.OAuth2;
  var oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
  oauth2Client.credentials = {
    access_token: accessToken,
    refresh_token: refreshToken,
  };

  if (
    !title ||
    !accessToken ||
    !refreshToken ||
    !CLIENT_ID ||
    !CLIENT_SECRET ||
    !REDIRECT_URL ||
    !media
  ) {
    throw new TypeError(
      "One or more of the following params is missing: title, accessToken, refreshToken, CLIENT_SECRET ,CLIENT_ID, REDIRECT_URL, media"
    );
  }

  service.videos.insert(
    {
      auth: oauth2Client,
      part: "snippet,contentDetails,status",
      resource: {
        // Video title and description
        snippet: {
          title: title,
          description: description ? description : "",
        },
        status: {
          privacyStatus: privacyStatus ? privacyStatus : "public",
        },
      },
      media: {
        body: media, // readable stream
      },
    },
    async (error, data) => {
      if (error) {
        onError(error);
      } else {
        data.data.fullUrl = "https://www.youtube.com/watch?v=" + data.data.id;
        onSuccess(data);
      }
    }
  );
};
