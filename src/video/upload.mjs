import { directory_parent } from '../directory/parent.mjs';
import { video_screen_recordings_prefix } from './screen/recordings/prefix.mjs';
import { video_path_get } from './path/get.mjs';
import { js_identifier_combine } from '../js/identifier/combine.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { google } from 'googleapis';
import { file_extension_json } from '../file/extension/json.mjs';
import { path_join } from '../path/join.mjs';
import { directory_size } from '../directory/size.mjs';
import fs from 'fs';
export async function video_upload() {
    arguments_assert(arguments, []);
    let ish_video_prefix = video_screen_recordings_prefix();
    let ish_video_1 = js_identifier_combine(ish_video_prefix, `1`);
    let ish_video_1_path = video_path_get(ish_video_1);
    const youtube = google.youtube('v3');
    const key_path = path_join([
        process.cwd(),
        directory_parent(),
        `oauth2.keys${ file_extension_json() }`
    ]);
    const auth = new google.auth.GoogleAuth({
        keyFile: key_path,
        scopes: [
            'https://www.googleapis.com/auth/youtube.upload',
            'https://www.googleapis.com/auth/youtube'
        ]
    });
    google.options({ auth });
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