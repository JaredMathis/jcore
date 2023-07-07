import { video_latest_delete_generic } from '../delete/generic.mjs';
import { list_last } from '../../../list/last.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function video_latest_before_delete() {
    arguments_assert(arguments, []);
    let lambda = list_last;
    await video_latest_delete_generic(lambda);
}