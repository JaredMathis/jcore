import { list_map_with_index } from '../../list/map/with/index.mjs';
import { equal } from '../../equal.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { defined_is } from '../../defined/is.mjs';
import { string_to_list } from '../../string/to/list.mjs';
import { string_letter_is } from '../../string/letter/is.mjs';
import { string_to_case_upper } from '../../string/to/case/upper.mjs';
import { error } from '../../error.mjs';
export function refactor_properties_expand(args) {
    arguments_assert(arguments, [defined_is]);
    let {function_declaration, parsed} = args;
    const node_type = 'ObjectPattern';
    let characters = string_to_list(node_type);
    let mapped = list_map_with_index(characters, c => {
        return {
            is_capital: string_letter_is(c) && equal(string_to_case_upper(c), c),
            value: c
        };
    });
    let filtered = error();
}