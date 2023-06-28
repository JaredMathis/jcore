import { video_screen_recordings_combine } from '../combine.mjs';
import { js_identifier_combine } from '../../../../js/identifier/combine.mjs';
import { video_screen_recordings_prefix } from '../prefix.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function video_screen_recordings_combine_1() {
    arguments_assert(arguments, []);
    let ish_video_prefix = video_screen_recordings_prefix();
    let ish_video_1 = js_identifier_combine(ish_video_prefix, `1`);
    return await video_screen_recordings_combine(ish_video_1);
}