import { js_mapper_args_to_metadata_args_no_add_missing } from '../../../../../js/mapper/args/to/metadata/args/no/add/missing.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { list_length_is_1 } from '../../../../../list/length/is/1.mjs';
import { list_empty } from '../../../../../list/empty.mjs';
import { metadata_arguments_assert_none } from '../../../../../metadata/arguments/assert/none.mjs';
import { function_name_get } from '../../../../name/get.mjs';
import { js_node_call_expression_name_equal } from '../../../../../js/node/call/expression/name/equal.mjs';
import { list_filter } from '../../../../../list/filter.mjs';
import { js_identifier_is } from '../../../../../js/identifier/is.mjs';
import { assert } from '../../../../../assert.mjs';
import { function_names_each } from '../../../each.mjs';
import { list_adder_async } from '../../../../../list/adder/async.mjs';
export async function function_names_metadata_arguments_assert_none() {
    arguments_assert(arguments, []);
    let v = await list_adder_async(async la => {
        await function_names_each(async args => {
            let {function_name} = args;
            let v_2 = js_identifier_is(function_name);
            assert(v_2);
            let metadata_args = await js_mapper_args_to_metadata_args_no_add_missing(args);
            let filtered = list_filter(metadata_args, node => js_node_call_expression_name_equal(node, function_name_get(metadata_arguments_assert_none)));
            let v_4 = list_empty(filtered);
            if (v_4) {
                return;
            }
            let v_3 = list_length_is_1(filtered);
            assert(v_3);
            la(function_name);
        });
    });
    return v;
}