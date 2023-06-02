import { function_parse_to_declaration } from '../parse/to/declaration.mjs';
import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { function_parse } from '../parse.mjs';
import { function_name_all } from '../name/all.mjs';
import { js_export_function_single_or_null } from '../../js/export/function/single/or/null.mjs';
import { comment } from '../../comment.mjs';
import { function_name_to_file_path } from '../name/to/file/path.mjs';
export async function function_names_each(logic) {
    arguments_assert(arguments, [tautology]);
    const all = await function_name_all();
    for (let function_name of all) {
        let parsed = await function_parse(function_name);
        let function_declaration = js_export_function_single_or_null(parsed);
        if (false)
            await function_parse_to_declaration(function_name);
        let file_path = function_name_to_file_path(function_name);
        comment(`mapper_args code is being duplicated here likely`);
        let result = await logic({
            parsed,
            function_name,
            function_declaration,
            file_path
        });
        if (result) {
            return;
        }
    }
}