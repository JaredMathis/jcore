import { js_node_property_name } from '../js/node/property/name.mjs';
import { function_parse } from './parse.mjs';
import { js_export_function_single } from '../js/export/function/single.mjs';
import { function_add_with_declaration } from './add/with/declaration.mjs';
import { object_property_change } from '../object/property/change.mjs';
export async function function_copy(function_name_to_copy, function_name_of_copy) {
    let parsed = await function_parse(function_name_to_copy);
    let fd = js_export_function_single(parsed);
    console.log(fd)
    object_property_change(fd, js_node_property_name(), function_name_of_copy);
    function_add_with_declaration(function_name_of_copy, fd);
}