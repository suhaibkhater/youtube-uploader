# youtube-uploader


A NodeJS library that uploads videos to youtube account

- The method accepts a properties param, a success callback, and failure callback. the properties param is an object the can consist of the following:

| Property       | Description                                                                |
|----------------|----------------------------------------------------------------------------|
| CLIENT_ID*     | provided in google cloud console                                           |
| CLIENT_SECRET* | provided in google cloud console                                           |
| REDIRECT_URL*  | The redirect URL you provided in google cloud console after consent screen |
| accessToken*   | from GCP oAuth2                                                            |
| refreshToken*  | from GCP oAuth2                                                            |
| title*         | The title of the video                                                     |
| media*         | readable Video stream                                                      |
| description    | The Description of the video                                               |
| privacyStatus  | the value can be either 'public' or 'private' video                        |

# Example
    const accessToken="put accessToken here"
    const refreshToken="put refreshToken here"
    const media = fs.createReadStream("test.mp4")
    const REDIRECT_URL="REDIRECT_URL here"
    const CLIENT_ID="put CLIENT_ID here"
    const CLIENT_SECRET="put CLIENT_SECRET here"
    const title="test"
    const description=""

    youtubeUploader(
        {
        description,
        title,
        accessToken,
        refreshToken,
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URL,
        media,
        },
        onSuccess,
        onError)


- For more information on how to get the client secret and id visit the following links:
    - https://developers.google.com/identity/protocols/oauth2
    - https://developers.google.com/youtube/v3/quickstart/js