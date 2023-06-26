import { metadata } from '../../../metadata.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_add } from '../../../list/add.mjs';
import { list_add_beginning } from '../../../list/add/beginning.mjs';
import { git_command_name } from '../../command/name.mjs';
export function git_commands_sync_add(commands) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = `${ git_command_name() } pull`;
    list_add_beginning(commands, v);
    let v_2 = `${ git_command_name() } push`;
    list_add(commands, v_2);
    metadata([]);
}