import { tests } from './tests.mjs';
import { rule_function_async_and_suffix_async_implies_suffix_asynk } from './rule/function/async/and/suffix/async/implies/suffix/asynk.mjs';
import { arguments_assert } from './arguments/assert.mjs';
export async function rules() {
    arguments_assert(arguments, []);
    await rule_function_async_and_suffix_async_implies_suffix_asynk();
    await tests();
}