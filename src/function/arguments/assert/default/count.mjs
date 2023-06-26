import { boolean_value_false } from '../../../../boolean/value/false.mjs';
import { metadata } from '../../../../metadata.mjs';
import { count_async } from '../../../../count/async.mjs';
import { function_arguments_assert_default_generic } from './generic.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function function_arguments_assert_default_count() {
    arguments_assert(arguments, []);
    let v_2 = async function v(counter) {
        await function_arguments_assert_default_generic(on_equals);
        async function on_equals(function_name) {
            counter();
            return boolean_value_false();
        }
    };
    let result = await count_async(v_2);
    return result;
    metadata([]);
}