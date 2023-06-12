import { list_join } from '../../list/join.mjs';
import { string_identifier_with_prefix } from '../../string/identifier/with/prefix.mjs';
import { log } from '../../log.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { defined_is } from '../../defined/is.mjs';
import { list_map } from '../../list/map.mjs';
import { js_function_declaration_to_statements } from '../../js/function/declaration/to/statements.mjs';
import { js_code_call_expression_statement_with_args_code } from '../../js/code/call/expression/statement/with/args/code.mjs';
import { function_name_get } from '../../function/name/get.mjs';
import { object_property_get } from '../../object/property/get.mjs';
export function refactor_properties_expand(args) {
    arguments_assert(arguments, [defined_is]);
    let {identifier, properties, prefix} = args;
    let property_gets = list_map(properties, p => string_identifier_with_prefix(prefix, p));
    let {function_declaration} = args;
    let statements = js_function_declaration_to_statements(function_declaration);
    let args_code = list_join;
    js_code_call_expression_statement_with_args_code(function_name_get(object_property_get), args_code);
    console.log({
        identifier,
        mapped: property_gets,
        prefix
    });
}