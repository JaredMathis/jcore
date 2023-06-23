import { js_identifier_part_remove } from '../../../js/identifier/part/remove.mjs';
import { function_copy } from '../../copy.mjs';
import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_copy_part_remove(function_name_prefix, part_to_remove) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_is
    ]);
    let function_name_of_copy = js_identifier_part_remove(function_name_prefix, part_to_remove);
    await function_copy(function_name_prefix, function_name_of_copy);
}