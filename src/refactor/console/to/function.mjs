import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_add_function_with_statements } from '../../../js/add/function/with/statements.mjs';
import { js_without_imports } from '../../../js/without/imports.mjs';
import { file_js_path_to_name } from '../../../file/js/path/to/name.mjs';
import { list_length_is_0 } from '../../../list/length/is/0.mjs';
import { list_remove_multiple } from '../../../list/remove/multiple.mjs';
import { js_body_get } from '../../../js/body/get.mjs';
import { js_exports } from '../../../js/exports.mjs';
import { comment } from '../../../comment.mjs';
import { js_mapper_args_is } from '../../../js/mapper/args/is.mjs';
export async function refactor_console_to_function(args) {
    arguments_assert(arguments, [js_mapper_args_is]);
    let {parsed, file_path} = args;
    let exports_existing = js_exports(parsed);
    if (!list_length_is_0(exports_existing)) {
        return;
    }
    let body = js_body_get(parsed);
    let statements = js_without_imports(parsed);
    if (list_length_is_0(statements)) {
        comment(`no code to refactor`);
        return;
    }
    list_remove_multiple(body, statements);
    let function_name = file_js_path_to_name(file_path);
    js_add_function_with_statements(parsed, function_name, statements);
    metadata([]);
}