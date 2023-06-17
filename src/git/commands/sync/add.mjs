import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_add } from '../../../list/add.mjs';
import { list_add_beginning } from '../../../list/add/beginning.mjs';
import { git_command_name } from '../../command/name.mjs';
export function git_commands_sync_add(commands) {
    arguments_assert(arguments, [arguments_assert_todo]);
    list_add_beginning(commands, `${ git_command_name() } pull`);
    list_add(commands, `${ git_command_name() } push`);
}