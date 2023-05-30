import { function_exists } from '../../../function/exists.mjs';
import { log } from '../../../log.mjs';
import { js_function_declarations_to_names } from '../../../js/function/declarations/to/names.mjs';
import { js_node_is_function_declaration } from '../../../js/node/is/function/declaration.mjs';
import { js_without_imports } from '../../../js/without/imports.mjs';
import { list_filter } from '../../../list/filter.mjs';
import { assert } from '../../../assert.mjs';
export async function refactor_functions_to_files(args) {
    let {parsed} = args;
    let without_imports = js_without_imports(parsed);
    let functions_to_export = list_filter(without_imports, js_node_is_function_declaration);
    let function_names_new = js_function_declarations_to_names(functions_to_export);
    for (let n of function_names_new) {
        assert(await function_exists(n));
    }
    console.log({ function_names_new });
}