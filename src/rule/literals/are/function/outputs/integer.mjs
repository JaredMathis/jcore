import { rule_literals_are_function_outputs_generic } from './generic.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { number_is } from '../../../../../number/is.mjs';
import { integer_is } from '../../../../../integer/is.mjs';
export async function rule_literals_are_function_outputs_integer() {
    arguments_assert(arguments, []);
    const prefix_type = `integer`;
    let lambda_change = number_is;
    let lambda_assert = integer_is;
    await rule_literals_are_function_outputs_generic(prefix_type, lambda_change, lambda_assert);
    metadata([]);
}