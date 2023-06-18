import { js_node_is_program } from '../node/is/program.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_without_multiple } from '../../list/without/multiple.mjs';
import { js_program_body_get } from '../program/body/get.mjs';
import { js_import_all } from '../import/all.mjs';
export function js_without_imports(parsed) {
    arguments_assert(arguments, [js_node_is_program]);
    let imports = js_import_all(parsed);
    let body = js_program_body_get(parsed);
    let function_body_statements_new = list_without_multiple(body, imports);
    return function_body_statements_new;
    metadata([]);
}