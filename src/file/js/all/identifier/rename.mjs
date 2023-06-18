import { file_js_all_identifier_multiple } from './multiple.mjs';
import { string_identifier_is } from '../../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
export async function file_js_all_identifier_rename(identifier_name_old, identifier_name_new) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    let renames = { [identifier_name_old]: identifier_name_new };
    let v = await file_js_all_identifier_multiple(renames);
    return v;
    metadata([]);
}