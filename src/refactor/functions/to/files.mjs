import { js_node_is_function_declaration } from '../../../js/node/is/function/declaration.mjs';
import { js_without_imports } from '../../../js/without/imports.mjs';
import { list_filter } from '../../../list/filter.mjs';
export function refactor_functions_to_files(args) {
    let {parsed, file_path} = args;
    let without_imports = js_without_imports(parsed);
    let functions_to_export = list_filter(without_imports, js_node_is_function_declaration);
    console.log({functions_to_export})
}