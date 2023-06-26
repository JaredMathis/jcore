import { rule_literals_are_function_outputs_generic } from './generic.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { number_is } from '../../../../../number/is.mjs';
import { integer_is } from '../../../../../integer/is.mjs';
export async function rule_literals_are_function_outputs_integer() {
    arguments_assert(arguments, []);
    await rule_literals_are_function_outputs_generic(`integer`, number_is, integer_is);
    metadata([]);
}