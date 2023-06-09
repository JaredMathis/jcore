import { metadata } from '../../../../metadata.mjs';
import { list_is } from '../../../../list/is.mjs';
import { js_identifier_parts_from } from '../from.mjs';
import { list_multiple_combine } from '../../../../list/multiple/combine.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function js_identifier_parts_from_combine(concats) {
    arguments_assert(arguments, [list_is]);
    let result_to_be_mapped = list_multiple_combine(concats);
    let result = js_identifier_parts_from(result_to_be_mapped);
    return result;
    metadata([]);
}