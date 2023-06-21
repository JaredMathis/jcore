import { object_replace } from '../../object/replace.mjs';
import { list_map } from '../../list/map.mjs';
import { js_identifier_parts_map } from '../../js/identifier/parts/map.mjs';
import { js_identifier_part_is } from '../../js/identifier/part/is.mjs';
import { js_identifier_is } from '../../js/identifier/is.mjs';
import { function_rename_single } from './single.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { equal } from '../../equal.mjs';
export async function function_rename_part(function_name_old, part_old, part_new) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_part_is,
        js_identifier_part_is
    ]);
    let function_name_new = js_identifier_parts_map(function_name_old, function v(parts) {
        let parts_new = list_map(parts, function v_2(p) {
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