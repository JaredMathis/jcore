import { not } from '../../../not.mjs';
import { changed } from '../../../changed.mjs';
import { file_overwrite } from '../../overwrite.mjs';
import { equal } from '../../../equal.mjs';
export async function file_overwrite_if_changed(file_path, contents_new, contents_old) {
    let v = equal(contents_new, contents_old);
    const changed = not(v);
    if (changed) {
        await file_overwrite(file_path, contents_new);
    }
}