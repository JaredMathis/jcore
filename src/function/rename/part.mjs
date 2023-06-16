import { string_identifier_part_is } from '../../string/identifier/part/is.mjs';
import { string_identifier_parts_from } from '../../string/identifier/parts/from.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { function_rename } from '../rename.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_map } from '../../list/map.mjs';
import { equal } from '../../equal.mjs';
export async function function_rename_part(function_name_old, part_old, part_new) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_part_is,
        string_identifier_part_is
    ]);
    let parts = string_identifier_parts_from(function_name_old);
    let function_name_new = list_map(parts, p => {
        if (equal(p, 1)) {
        }
    });
    let result = await function_rename(function_name_old, function_name_new);
    return result;
}