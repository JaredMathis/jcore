import { list_last_before } from '../../../list/last/before.mjs';
import { video_latest_delete_generic } from '../delete/generic.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function video_latest_before_delete() {
    arguments_assert(arguments, []);
    let lambda = list_last_before;
    await video_latest_delete_generic(lambda);
}