import { js_code_function_name_to_parsed } from '../../../js/code/function/name/to/parsed.mjs';
import { js_node_property_declaration } from '../../../js/node/property/declaration.mjs';
import { object_property_change } from '../../../object/property/change.mjs';
import { js_export_single } from '../../../js/export/single.mjs';
import { function_write } from '../../write.mjs';
export async function function_add_with_declaration(function_name, fd) {
    let parsed = js_code_function_name_to_parsed(function_name);
    let export_single = js_export_single(parsed);
    object_property_change(export_single, js_node_property_declaration(), fd);
    return await function_write(function_name, parsed);
}