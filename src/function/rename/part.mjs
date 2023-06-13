import { list_set } from '../../list/set.mjs';
import { list_index_of_single } from '../../list/index/of/single.mjs';
import { function_rename_part_generic } from './part/generic.mjs';
import { string_identifier_part_is } from '../../string/identifier/part/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_rename_part(part) {
    arguments_assert(arguments, [string_identifier_part_is]);
    await function_rename_part_generic(part, parts_map);
    function parts_map(parts) {
        let index = list_index_of_single(parts, part);
        list_set;
    }
}