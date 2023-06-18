import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { refactor_import_fix } from '../../fix.mjs';
import { at_least_once } from '../../../../at/least/once.mjs';
export async function refactor_import_fix_if_changed(args, changed_lambda) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let c = at_least_once(changed_lambda);
    if (c) {
        await refactor_import_fix(args);
    }
}