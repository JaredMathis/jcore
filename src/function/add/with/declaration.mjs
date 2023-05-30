import { js_export_single } from '../../../js/export/single.mjs';
import { js_function_name_to_export } from '../../../js/function/name/to/export.mjs';
import { function_write } from '../../write.mjs';
import { error } from '../../../error.mjs';
import { js_parse } from '../../../js/parse.mjs';
import { js_export_declaration_get } from '../../../js/export/declaration/get.mjs';
import { assert } from '../../../assert.mjs';
import { js_node_is_function_declaration } from '../../../js/node/is/function/declaration.mjs';
export async function function_add_with_declaration(function_name, fd) {
    let parsed = js_parse(js_function_name_to_export(function_name));
    let export_single = js_export_single(parsed);
    let declaration = js_export_declaration_get(export_single);
    assert(js_node_is_function_declaration(declaration));
    error('todo: function_add_with_declaration');
    return await function_write(function_name, parsed);
}