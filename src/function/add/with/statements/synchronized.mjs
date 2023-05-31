import { metadata } from '../../../../metadata.mjs';
import { function_write } from '../../../write.mjs';
import { js_function_declaration_asyncify } from '../../../../js/function/declaration/asyncify.mjs';
import { js_function_declaration_statements_initialize } from '../../../../js/function/declaration/statements/initialize.mjs';
import { js_exported_function_declaration_single } from '../../../../js/exported/function/declaration/single.mjs';
import { js_parse } from '../../../../js/parse.mjs';
import { js_function_name_to_export } from '../../../../js/function/name/to/export.mjs';
export async function function_add_with_statements_synchronized(function_name, statements, is_async) {
    const code = js_function_name_to_export(function_name);
    let parsed = js_parse(code);
    let fd = js_exported_function_declaration_single(parsed);
    js_function_declaration_statements_initialize(fd, statements);
    if (is_async) {
        js_function_declaration_asyncify(fd);
    }
    return await function_write(function_name, parsed);
    metadata([]);
}