import { boolean_is } from '../../../../boolean/is.mjs';
import { function_is } from '../../../../function/is.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { boolean_value_true } from '../../../../boolean/value/true.mjs';
import { js_keyword_asynk } from '../../../keyword/asynk.mjs';
export function js_function_declaration_asyncify_generic(fd, lambda_object_property, async_is_true) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        function_is,
        boolean_is
    ]);
    let v = js_keyword_asynk();
    let v_2 = boolean_value_true();
    lambda_object_property(fd, v, v_2);
}