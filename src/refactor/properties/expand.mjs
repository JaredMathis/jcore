import { function_name_separator } from '../../function/name/separator.mjs';
import { string_case_camel_parse } from '../../string/case/camel/parse.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { defined_is } from '../../defined/is.mjs';
export function refactor_properties_expand(args) {
    arguments_assert(arguments, [defined_is]);
    let {function_declaration, parsed} = args;
    const node_type = 'ObjectPattern';
    let node_type_parsed = string_case_camel_parse(node_type);
    let node_type_snake = string_join(node_type_parsed, function_name_separator());
}