import { string_case_camel_parse_to_snake } from '../../string/case/camel/parse/to/snake.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { defined_is } from '../../defined/is.mjs';
export function refactor_properties_expand(args) {
    arguments_assert(arguments, [defined_is]);
    let {function_declaration, parsed} = args;
    const node_type = 'ObjectPattern';
    let snake = string_case_camel_parse_to_snake(node_type);
}