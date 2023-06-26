import { rule_literals_are_function_outputs_generic } from './outputs/generic.mjs';
import { metadata } from '../../../../metadata.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { number_is } from '../../../../number/is.mjs';
import { integer_is } from '../../../../integer/is.mjs';
import { boolean_is } from '../../../../boolean/is.mjs';
export async function rule_literals_are_function_outputs() {
    arguments_assert(arguments, []);
    let v = `integer`;
    await rule_literals_are_function_outputs_generic(v, number_is, integer_is);
    let v_2 = `boolean`;
    await rule_literals_are_function_outputs_generic(v_2, boolean_is, boolean_is);
    metadata([]);
}