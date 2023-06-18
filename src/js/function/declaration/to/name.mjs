import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { js_id_name_get } from '../../../id/name/get.mjs';
import { js_node_is_function_declaration } from '../../../node/is/function/declaration.mjs';
export function js_function_declaration_to_name(fd) {
    arguments_assert(arguments, [js_node_is_function_declaration]);
    let v = js_id_name_get(fd);
    return v;
    metadata([]);
}