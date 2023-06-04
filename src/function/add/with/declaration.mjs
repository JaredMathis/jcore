import { js_node_is_function_declaration } from '../../../js/node/is/function/declaration.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_code_function_name_to_parsed } from '../../../js/code/function/name/to/parsed.mjs';
import { js_node_property_declaration } from '../../../js/node/property/declaration.mjs';
import { object_property_change } from '../../../object/property/change.mjs';
import { js_export_single } from '../../../js/export/single.mjs';
import { function_write } from '../../write.mjs';
export async function function_add_with_declaration(function_name, fd) {
    arguments_assert(arguments, [
        string_identifier_is,
        js_node_is_function_declaration
    ]);
    let parsed = js_code_function_name_to_parsed(function_name);
    let export_single = js_export_single(parsed);
    object_property_change(export_single, js_node_property_declaration(), fd);
    return await function_write(function_name, parsed);
    metadata([]);
}