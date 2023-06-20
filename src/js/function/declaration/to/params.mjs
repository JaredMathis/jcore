import { js_node_property_params_get } from '../../../node/property/params/get.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_node_is_function_declaration } from '../../../node/is/function/declaration.mjs';
export function js_function_declaration_to_params(fd) {
    arguments_assert(arguments, [js_node_is_function_declaration]);
    let v = js_node_property_params_get(fd);
    return v;
}