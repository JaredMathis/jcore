import { js_node_property_declaration } from '../../../js/node/property/declaration.mjs';
import { object_property_change } from '../../../object/property/change.mjs';
import { js_export_single } from '../../../js/export/single.mjs';
import { js_function_name_to_export } from '../../../js/function/name/to/export.mjs';
import { function_write } from '../../write.mjs';
import { error } from '../../../error.mjs';
import { js_parse } from '../../../js/parse.mjs';
export async function function_add_with_declaration(function_name, fd) {
    let parsed = js_parse(js_function_name_to_export(function_name));
    let export_single = js_export_single(parsed);
    object_property_change(export_single, js_node_property_declaration(), fd);
    error('todo: function_add_with_declaration');
    return await function_write(function_name, parsed);
}