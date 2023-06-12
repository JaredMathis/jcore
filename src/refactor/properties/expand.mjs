import { string_identifier_with_prefix } from '../../string/identifier/with/prefix.mjs';
import { log } from '../../log.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { defined_is } from '../../defined/is.mjs';
import { list_map } from '../../list/map.mjs';
import { js_function_declaration_to_statements } from '../../js/function/declaration/to/statements.mjs';
export function refactor_properties_expand(args) {
    arguments_assert(arguments, [defined_is]);
    let {identifier, properties, prefix} = args;
    let property_gets = list_map(properties, p => string_identifier_with_prefix(prefix, p));
    let {function_declaration} = args;
    js_function_declaration_to_statements();
    console.log({
        identifier,
        mapped: property_gets,
        prefix
    });
}