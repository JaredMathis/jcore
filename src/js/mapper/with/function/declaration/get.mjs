import { object_merge } from '../../../../../object/merge.mjs';
import { js_export_function_single_or_null } from '../../../../export/function/single/or/null.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { function_is } from '../../../../../function/is.mjs';
export function js_mapper_with_function_declaration_get(mapper) {
    arguments_assert(arguments, [function_is]);
    return async function js_mapper_with_function_declaration(args) {
        let {parsed, file_path} = args;
        let function_declaration = js_export_function_single_or_null(parsed);
        if (function_declaration !== null) {
            object_merge({ function_declaration }, args);
        }
        let v = await mapper(args);
        return v;
    };
}