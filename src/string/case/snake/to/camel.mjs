import { string_case_upper_character_first } from '../../upper/character/first.mjs';
import { js_identifier_parts_to } from '../../../../js/identifier/parts/to.mjs';
import { list_join } from '../../../../list/join.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { string_empty } from '../../../empty.mjs';
import { list_map } from '../../../../list/map.mjs';
import { js_identifier_is } from '../../../../js/identifier/is.mjs';
export function string_case_snake_to_camel(input) {
    arguments_assert(arguments, [js_identifier_is]);
    let parsed = js_identifier_parts_to(input);
    let mapped = list_map(parsed, string_case_upper_character_first);
    let snake = list_join(mapped, string_empty());
    return snake;
}