import { js_parse_expression } from '../../../js/parse/expression.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { refactor_input_add } from '../../../refactor/input/add.mjs';
import { function_name_get } from '../../name/get.mjs';
import { function_map_with_args } from '../../map/with/args.mjs';
export async function function_input_add_generic(function_name, input_name, input_value_default, input_type) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    await function_map_with_args(function_name_get(refactor_input_add), function_name, {
        input_name,
        args_additional_get: function args_additional_get() {
            let input_value_expression = js_parse_expression(input_value_default);
            const args_additional = {
                input_value_expression,
                function_name_called: function_name
            };
            return args_additional;
        },
        input_type
    });
}