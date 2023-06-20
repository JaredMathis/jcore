import { list_length_is_1 } from '../../../../../list/length/is/1.mjs';
import { list_empty } from '../../../../../list/empty.mjs';
import { metadata_arguments_assert_none } from '../../../../../metadata/arguments/assert/none.mjs';
import { function_name_get } from '../../../../name/get.mjs';
import { js_node_call_expression_name_equal } from '../../../../../js/node/call/expression/name/equal.mjs';
import { js_node_is_call_expression } from '../../../../../js/node/is/call/expression.mjs';
import { list_filter } from '../../../../../list/filter.mjs';
import { js_mapper_args_to_metadata_args } from '../../../../../js/mapper/args/to/metadata/args.mjs';
import { string_identifier_is } from '../../../../../string/identifier/is.mjs';
import { assert } from '../../../../../assert.mjs';
import { function_names_each } from '../../../each.mjs';
import { list_adder_async } from '../../../../../list/adder/async.mjs';
export async function function_names_metadata_arguments_assert_none() {
    return await list_adder_async(async la => {
        await function_names_each(async args => {
            let {function_name} = args;
            log({function_name})
            assert(string_identifier_is(function_name));
            if (false)js_mapper_args_to_metadata_args_no_add_missing
            let metadata_args = await js_mapper_args_to_metadata_args(args);
            let filtered = list_filter(metadata_args, js_node_is_call_expression);
            let filtered2 = list_filter(filtered, node => js_node_call_expression_name_equal(node, function_name_get(metadata_arguments_assert_none)));
            if (list_empty(filtered2)) {
                return;
            }
            assert(list_length_is_1(filtered2));
            la(function_name);
        });
    });
}