import { string_identifier_parts_to } from '../../string/identifier/parts/to.mjs';
import { string_identifier_part_is } from '../../string/identifier/part/is.mjs';
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
    let parts = string_identifier_parts_to(function_name_old);
    let function_name_new = list_map(parts, p => {
        if (equal(p, part_old)) {
            return part_new;
        }
        return p;
    });
    let result = await function_rename(function_name_old, function_name_new);
    return result;
}