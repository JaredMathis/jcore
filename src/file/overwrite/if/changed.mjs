import { not } from '../../../not.mjs';
import { at_least_once } from '../../../at/least/once.mjs';
import { file_overwrite } from '../../overwrite.mjs';
import { equal } from '../../../equal.mjs';
export async function file_overwrite_if_changed(file_path, contents_new, contents_old) {
    let v = equal(contents_new, contents_old);
    const at_least_once = not(v);
    if (at_least_once) {
        await file_overwrite(file_path, contents_new);
    }
}