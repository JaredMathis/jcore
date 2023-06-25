import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { refactor_member_expression_none } from '../../../refactor/member/expression/none.mjs';
import { function_name_get } from '../../name/get.mjs';
import { function_map_with_args } from '../../map/with/args.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_member_expression_none(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    await function_map_with_args(function_name_get(refactor_member_expression_none), function_name, {});
}