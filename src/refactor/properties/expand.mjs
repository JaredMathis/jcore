import { equal } from '../../equal.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { defined_is } from '../../defined/is.mjs';
import { string_to_list } from '../../string/to/list.mjs';
import { list_map } from '../../list/map.mjs';
import { string_letter_is } from '../../string/letter/is.mjs';
import { string_to_case_upper } from '../../string/to/case/upper.mjs';
export function refactor_properties_expand(args) {
    arguments_assert(arguments, [defined_is]);
    let {function_declaration, parsed} = args;
    const node_type = 'ObjectPattern';
    let characters = string_to_list(node_type);
    let indices_capital = list_map(characters, c => {
        return { is_capital: string_letter_is(c) && equal(string_to_case_upper(c), c) };
    });
}