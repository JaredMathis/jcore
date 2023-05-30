import { log } from '../../../log.mjs';
import { js_function_declarations_to_names } from '../../../js/function/declarations/to/names.mjs';
import { js_node_is_function_declaration } from '../../../js/node/is/function/declaration.mjs';
import { js_without_imports } from '../../../js/without/imports.mjs';
import { list_filter } from '../../../list/filter.mjs';
export function refactor_functions_to_files(args) {
    let {parsed} = args;
    let without_imports = js_without_imports(parsed);
    let functions_to_export = list_filter(without_imports, js_node_is_function_declaration);
    let function_names_new = js_function_declarations_to_names(functions_to_export);
    console.log({ function_names_new });
}