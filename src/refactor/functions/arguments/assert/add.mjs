import { list_length_is_0 } from '../../../../list/length/is/0.mjs';
import { js_keyword_arguments } from '../../../../js/keyword/arguments.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_call_expression_to_name } from '../../../../js/call/expression/to/name.mjs';
import { node_is_type_call_expression } from '../../../../node/is/type/call/expression.mjs';
import { js_function_delcaration_to_statements } from '../../../../js/function/delcaration/to/statements.mjs';
import { js_export_function_single_or_null } from '../../../../js/export/function/single/or/null.mjs';
import { file_js_all_map_args } from '../../../../file/js/all/map/args.mjs';
import { list_first } from '../../../../list/first.mjs';
import { equal } from '../../../../equal.mjs';
import { function_name_get } from '../../../../function/name/get.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { list_add_beginning } from '../../../../list/add/beginning.mjs';
import { js_parse_statement } from '../../../../js/parse/statement.mjs';
import { list_length } from '../../../../list/length.mjs';
import { list_map } from '../../../../list/map.mjs';
import { range } from '../../../../range.mjs';
import { tautology } from '../../../../tautology.mjs';
import { list_join } from '../../../../list/join.mjs';
import { refactor_import_fix } from '../../../import/fix.mjs';
export async function refactor_functions_arguments_assert_add() {
    await file_js_all_map_args(async function mapper(args) {
        let {parsed, file_path} = args;
        let fd = js_export_function_single_or_null(parsed);
        if (fd !== null) {
            return;
        }
        let exists = false;
        let statements = js_function_delcaration_to_statements(fd);
        if (!list_length_is_0(statements)) {
            let statement_first = list_first(statements);
            if (node_is_type_call_expression(statement_first)) {
                let name = js_call_expression_to_name(statement_first);
                if (equal(name, function_name_get(arguments_assert))) {
                    exists = true;
                }
            }
        }
        if (!exists) {
            let params = object_property_get(fd, 'params');
            let params_length = list_length(params);
            let params_mapped = list_map(range(params_length), i => function_name_get(tautology));
            list_add_beginning(params_mapped, js_keyword_arguments());
            let params_code = list_join(params_mapped, ', ');
            let statement_new = js_parse_statement(`${ function_name_get(arguments_assert) }(${ params_code })`);
            list_add_beginning(statements, statement_new);
            await refactor_import_fix(args);
        }
    });
}