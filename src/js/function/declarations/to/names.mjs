import { list_is } from '../../../../list/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { js_function_declaration_to_name } from '../../declaration/to/name.mjs';
import { list_map } from '../../../../list/map.mjs';
export function js_function_declarations_to_names(filtered) {
    arguments_assert(arguments, [list_is]);
    let v = list_map(filtered, js_function_declaration_to_name);
    return v;
    metadata([]);
}