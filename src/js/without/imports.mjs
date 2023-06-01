import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_without_multiple } from '../../list/without/multiple.mjs';
import { js_body_get } from '../body/get.mjs';
import { js_import_all } from '../import/all.mjs';
export function js_without_imports(parsed) {
    arguments_assert(arguments, [tautology]);
    let imports = js_import_all(parsed);
    let body = js_body_get(parsed);
    let function_body_statements_new = list_without_multiple(body, imports);
    return function_body_statements_new;
    metadata([]);
}