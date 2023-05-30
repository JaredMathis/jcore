import { function_map } from '../../../function/map.mjs';
import { list_length_is_0 } from '../../../list/length/is/0.mjs';
import { js_function_delcaration_to_statements } from '../../../js/function/delcaration/to/statements.mjs';
import { function_exists } from '../../../function/exists.mjs';
import { js_function_declarations_to_names } from '../../../js/function/declarations/to/names.mjs';
import { js_node_is_function_declaration } from '../../../js/node/is/function/declaration.mjs';
import { js_without_imports } from '../../../js/without/imports.mjs';
import { list_filter } from '../../../list/filter.mjs';
import { assert } from '../../../assert.mjs';
import { function_add_with_body } from '../../../function/add/with/body.mjs';
import { js_function_declaration_to_name } from '../../../js/function/declaration/to/name.mjs';
import { refactor_import_fix } from '../../import/fix.mjs';
export async function refactor_functions_to_files(args) {
    let {parsed} = args;
    let without_imports = js_without_imports(parsed);
    let functions_to_export = list_filter(without_imports, js_node_is_function_declaration);
    let function_names_new = js_function_declarations_to_names(functions_to_export);
    assert(!list_length_is_0(function_names_new));
    for (let n of function_names_new) {
        assert(!await function_exists(n));
    }
    for (let f of functions_to_export) {
        let n = js_function_declaration_to_name(f);
        let statements = js_function_delcaration_to_statements(f);
        await function_add_with_body(n, statements);
    }
    for (let n of function_names_new) {
        await function_map(n, refactor_import_fix.name);
    }
}