import { list_add } from '../../../list/add.mjs';
import { list_add_beginning } from '../../../list/add/beginning.mjs';
export function git_commands_sync_add(commands) {
    list_add_beginning(commands, `git pull`);
    list_add(commands, `git push`);
}