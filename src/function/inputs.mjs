import { log } from '../log.mjs';
import { js_node_property_params } from '../js/node/property/params.mjs';
import { string_identifier_is } from '../string/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { function_to_declaration } from './to/declaration.mjs';
import { object_property_get } from '../object/property/get.mjs';
export async function function_inputs(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let fd = await function_to_declaration(function_name);
    let params = object_property_get(fd, js_node_property_params());
    console.log({ params });
}