import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { not } from '../../../../../not.mjs';
import { database_reference_set } from '../../../set.mjs';
import { database_reference_get } from '../../../get.mjs';
export async function database_reference_set_if_not_exists(transaction, info_refererence, value) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    const info = await database_reference_get(transaction, info_refererence);
    let v_2 = info.exists;
    let v = not(v_2);
    if (v) {
        await database_reference_set(transaction, info_refererence, value);
    }
    metadata([]);
}