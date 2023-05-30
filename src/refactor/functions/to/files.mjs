import { function_add_with_declaration } from '../../../function/add/with/declaration.mjs';
import { list_remove_all } from '../../../list/remove/all.mjs';
import { function_map } from '../../../function/map.mjs';
import { list_length_is_0 } from '../../../list/length/is/0.mjs';
import { js_function_delcaration_to_statements } from '../../../js/function/delcaration/to/statements.mjs';
import { function_exists } from '../../../function/exists.mjs';
import { js_function_declarations_to_names } from '../../../js/function/declarations/to/names.mjs';
import { js_node_is_function_declaration } from '../../../js/node/is/function/declaration.mjs';
import { js_without_imports } from '../../../js/without/imports.mjs';
import { list_filter } from '../../../list/filter.mjs';
import { assert } from '../../../assert.mjs';
import { refactor_import_fix } from '../../import/fix.mjs';
import { js_body_get } from '../../../js/body/get.mjs';
import { js_function_declaration_to_name } from '../../../js/function/declaration/to/name.mjs';
export async function refactor_functions_to_files(args) {
    let {parsed} = args;
    let without_imports = js_without_imports(parsed);
    let function_declarations_to_export = list_filter(without_imports, js_node_is_function_declaration);
    let function_names_new = js_function_declarations_to_names(function_declarations_to_export);
    if (list_length_is_0(function_names_new)) {
        return;
    }
    for (let n of function_names_new) {
        assert(!await function_exists(n));
    }
    for (let fd of function_declarations_to_export) {
        let function_name = js_function_declaration_to_name(fd);
        await function_add_with_declaration(function_name, fd);
    }
    for (let n of function_names_new) {
        await function_map(refactor_import_fix.name, n);
    }
    let body = js_body_get(parsed);
    list_remove_all(body, function_declarations_to_export);
    await refactor_import_fix(args);
}