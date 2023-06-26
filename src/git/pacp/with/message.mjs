import { equal } from '../../../equal.mjs';
import { not } from '../../../not.mjs';
import { git_command_name } from '../../command/name.mjs';
import { git_commands_sync_add_run } from '../../commands/sync/add/run.mjs';
import { log } from '../../../log.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { function_name_get } from '../../../function/name/get.mjs';
import { list_remove_while_first_equals } from '../../../list/remove/while/first/equals.mjs';
import { git } from '../../../git.mjs';
import { list_join } from '../../../list/join.mjs';
import { command_line_args_skipped } from '../../../command/line/args/skipped.mjs';
import { result_empty } from '../../../result/empty.mjs';
import { string_is } from '../../../string/is.mjs';
import { boolean_is } from '../../../boolean/is.mjs';
export async function git_pacp_with_message(commit_message, sync) {
    arguments_assert(arguments, [
        string_is,
        boolean_is
    ]);
    let args = command_line_args_skipped();
    let v = function_name_get(git);
    list_remove_while_first_equals(args, v);
    let args_message = list_join(args, ' ');
    const command_commit = `${ git_command_name() } commit -m "${ commit_message } ${ args_message }"`;
    let commands = [
        `${ git_command_name() } add *`,
        command_commit
    ];
    let c_result = await git_commands_sync_add_run(sync, commands);
    let v_2 = not(c_result.success);
    if (v_2) {
        let v_3 = equal(c_result.command, command_commit);
        if (v_3) {
            let result = result_empty();
            result.inner = c_result;
            result.message = `There was probably no code to commit. If this is not true, fix the code!`;
            return result;
        } else {
            log({
                c_result,
                command_commit
            });
        }
    }
    return c_result;
    metadata([]);
}