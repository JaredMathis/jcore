import { error } from '../../error.mjs';
export function js_without_imports(parsed, body) {
    let imports = js_import_all(parsed);
    let body = js_body_get(parsed);
    let function_body_statements_new = list_without_all(body, imports);
    return function_body_statements_new;
}