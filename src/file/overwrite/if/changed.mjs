import { not } from '../../../not.mjs';
import { occurs } from '../../../occurs.mjs';
import { file_overwrite } from '../../overwrite.mjs';
import { equal } from '../../../equal.mjs';
export async function file_overwrite_if_changed(file_path, contents_new, contents_old) {
    let v = equal(contents_new, contents_old);
    const occurs = not(v);
    if (occurs) {
        await file_overwrite(file_path, contents_new);
    }
}