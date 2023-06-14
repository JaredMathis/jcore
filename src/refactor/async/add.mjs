import { js_mapper_args_is } from '../../js/mapper/args/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { js_function_declaration_asyncify } from '../../js/function/declaration/asyncify.mjs';
import { js_export_function_single } from '../../js/export/function/single.mjs';
export function refactor_async_add(args) {
    arguments_assert(arguments, [js_mapper_args_is]);
    let {parsed} = args;
    let fd = js_export_function_single(parsed);
    js_function_declaration_asyncify(fd);
    metadata([]);
}