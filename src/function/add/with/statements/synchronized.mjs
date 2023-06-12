import { js_export_function_single } from '../../../../js/export/function/single.mjs';
import { boolean_is } from '../../../../boolean/is.mjs';
import { list_is } from '../../../../list/is.mjs';
import { string_identifier_is } from '../../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { function_write } from '../../../write.mjs';
import { js_function_declaration_asyncify } from '../../../../js/function/declaration/asyncify.mjs';
import { js_function_declaration_statements_initialize } from '../../../../js/function/declaration/statements/initialize.mjs';
import { js_parse } from '../../../../js/parse.mjs';
import { js_function_name_to_export } from '../../../../js/function/name/to/export.mjs';
export async function function_add_with_statements_synchronized(function_name, statements, is_async) {
    arguments_assert(arguments, [
        string_identifier_is,
        list_is,
        boolean_is
    ]);
    const code = js_function_name_to_export(function_name);
    let parsed = js_parse(code);
    let fd = js_export_function_single(parsed);
    js_function_declaration_statements_initialize(fd, statements);
    if (is_async) {
        js_function_declaration_asyncify(fd);
    }
    return await function_write(function_name, parsed);
    metadata([]);
}