import { file_overwrite } from '../../overwrite.mjs';
import { equal } from '../../../equal.mjs';
export async function file_overwrite_if_changed(file_path, contents_new, contents_old) {
    const changed = not(equal(contents_new, contents_old));
    if (changed) {
        await file_overwrite(file_path, contents_new);
    }
}