import { command_line_website } from '../command/line/website.mjs';
import { list_single } from '../list/single.mjs';
import { file_json_read } from '../file/json/read.mjs';
import { directory_parent } from '../directory/parent.mjs';
import { video_screen_recordings_prefix } from './screen/recordings/prefix.mjs';
import { video_path_get } from './path/get.mjs';
import { js_identifier_combine } from '../js/identifier/combine.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { google } from 'googleapis';
import { file_extension_json } from '../file/extension/json.mjs';
import { path_join } from '../path/join.mjs';
import fs from 'fs';
import { object_property_get } from '../object/property/get.mjs';
import { getAuth } from 'firebase-admin/auth';
export async function video_upload() {
    arguments_assert(arguments, []);
    return getAuth()
    .createCustomToken(guid_generate());
    let ish_video_prefix = video_screen_recordings_prefix();
    let ish_video_1 = js_identifier_combine(ish_video_prefix, `1`);
    let ish_video_1_path = video_path_get(ish_video_1);
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
    if (false) {

        const auth_url = oauth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: scopes
        });
        return auth_url;
        oauth2Client.setCredentials({ access_token });
    }
    google.options({ auth: oauth2Client });
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
        media: { body: fs.createReadStream(ish_video_1_path) }
    });
    return res.data;
}