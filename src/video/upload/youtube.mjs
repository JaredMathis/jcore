import { private_get } from '../../private/get.mjs';
import { comment } from '../../comment.mjs';
import { list_single } from '../../list/single.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { file_json_read } from '../../file/json/read.mjs';
import { file_extension_json } from '../../file/extension/json.mjs';
import { directory_parent } from '../../directory/parent.mjs';
import { path_join } from '../../path/join.mjs';
import { google } from 'googleapis';
import fs from 'fs';
export async function video_upload_youtube(ish_video_1_path) {
    const youtube = google.youtube('v3');
    const key_path = path_join([
        process.cwd(),
        directory_parent(),
        `oauth2.keys${ file_extension_json() }`
    ]);
    let key = await file_json_read(key_path);
    let web = object_property_get(key, 'web');
    const client_id = object_property_get(web, 'client_id');
    const client_secret = object_property_get(web, 'client_secret');
    const redirect_uris = object_property_get(web, 'redirect_uris');
    const oauth2Client = new google.auth.OAuth2(client_id, client_secret, list_single(redirect_uris));
    let scopes = [
        'https://www.googleapis.com/auth/youtube.upload',
        'https://www.googleapis.com/auth/youtube'
    ];
    comment(`Generate new access token here: https://developers.google.com/oauthplayground`);
    oauth2Client.setCredentials({ access_token: await private_get(`google_access_token`) });
    const res = await youtube.videos.insert({
        part: 'id,snippet,status',
        notifySubscribers: false,
        requestBody: {
            snippet: {
                title: 'Node.js YouTube Upload Test',
                description: 'Testing YouTube upload via Google APIs Node.js Client'
            },
            status: { privacyStatus: 'private' }
        },
        media: { body: fs.createReadStream(ish_video_1_path) },
        auth: oauth2Client
    });
    return res.data;
}