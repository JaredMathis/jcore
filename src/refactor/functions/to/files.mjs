import { js_without_imports } from '../../../js/without/imports.mjs';
export function refactor_functions_to_files(args) {
    let {parsed, file_path} = args;
    let without_imports = js_without_imports(parsed);
    console.log({without_imports})
}