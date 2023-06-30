import { string_replace } from '../string/replace.mjs';
import { directory_parent } from '../directory/parent.mjs';
import { video_screen_recordings_prefix } from './screen/recordings/prefix.mjs';
import { video_path_get } from './path/get.mjs';
import { js_identifier_combine } from '../js/identifier/combine.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { google } from 'googleapis';
import { file_extension_json } from '../file/extension/json.mjs';
import { path_join } from '../path/join.mjs';
import { authenticate } from '@google-cloud/local-auth';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
export async function video_upload() {
    arguments_assert(arguments, []);
    let ish_video_prefix = video_screen_recordings_prefix();
    let ish_video_1 = js_identifier_combine(ish_video_prefix, `1`);
    let ish_video_1_path = video_path_get(ish_video_1);
    const youtube = google.youtube('v3');
    let dp = directory_parent();
    const key_path = path_join([
        __dirname,
        dp,
        `oauth2.keys${ file_extension_json() }`
    ]);
    js_import_meta_to_file_path(import.meta)
    require(key_path);
    let replaced = string_replace(key_path, '\\', '/');
    const auth = await authenticate({
        keyfilePath: replaced,
        scopes: [
            'https://www.googleapis.com/auth/youtube.upload',
            'https://www.googleapis.com/auth/youtube'
        ]
    });
    google.options({ auth });
    return auth;
}