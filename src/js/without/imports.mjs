import { list_without_all } from '../../list/without/all.mjs';
import { js_body_get } from '../body/get.mjs';
import { js_import_all } from '../import/all.mjs';
export function js_without_imports(parsed) {
    let imports = js_import_all(parsed);
    let body = js_body_get(parsed);
    let function_body_statements_new = list_without_all(body, imports);
    return function_body_statements_new;
}