import { js_node_is_program } from '../../../../../node/is/program.mjs';
import { list_is } from '../../../../../../list/is.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { js_function_declaration_statements_initialize } from '../../../../../function/declaration/statements/initialize.mjs';
import { js_exported_function_declaration_single } from '../../single.mjs';
export function js_exported_function_declaration_single_statements_initialize(parsed, function_body_statements_new) {
    arguments_assert(arguments, [
        js_node_is_program,
        list_is
    ]);
    let fd = js_exported_function_declaration_single(parsed);
    js_function_declaration_statements_initialize(fd, function_body_statements_new);
    metadata([]);
}