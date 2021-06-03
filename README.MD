# youtube-uploader
uploads videos to youtube account

- The method accepts a properties param, a success callback, and failure callback. the properties param is an object the can consist of the following:

| Property       | description                                                                |
|----------------|----------------------------------------------------------------------------|
| CLIENT_ID*     | provided in google cloud console                                           |
| CLIENT_SECRET* | provided in google cloud console                                           |
| REDIRECT_URL*  | The redirect URL you provided in google cloud console after consent screen |
| accessToken*   | from GCP oAuth2                                                            |
| refreshToken*  | from GCP oAuth2                                                            |
| title*         | The title of the video                                                     |
| description    | The Description of the video                                               |
| media*         | readable Video stream                                                      |
| privacyStatus  | the value can be either 'public' or 'private' video                        |


- For more information on how to get the client secret and id visit the following links:
    - https://developers.google.com/identity/protocols/oauth2
    - https://developers.google.com/youtube/v3/quickstart/js