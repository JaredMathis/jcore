import { video_latest_delete_generic } from './delete/generic.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_last } from '../../list/last.mjs';
export async function video_latest_delete() {
    arguments_assert(arguments, []);
    let lambda = list_last;
    await video_latest_delete_generic(lambda);
}