import { object_replace } from '../../object/replace.mjs';
import { list_map } from '../../list/map.mjs';
import { string_identifier_parts_map } from '../../string/identifier/parts/map.mjs';
import { string_identifier_part_is } from '../../string/identifier/part/is.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { function_rename_single } from './single.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { equal } from '../../equal.mjs';
export async function function_rename_part(function_name_old, part_old, part_new) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_part_is,
        string_identifier_part_is
    ]);
    let function_name_new = string_identifier_parts_map(function_name_old, parts => {
        let parts_new = list_map(parts, p => {
            if (equal(p, part_old)) {
                return part_new;
            }
            return p;
        });
        object_replace(parts, parts_new);
    });
    let result = await function_rename_single(function_name_old, function_name_new);
    return result;
}