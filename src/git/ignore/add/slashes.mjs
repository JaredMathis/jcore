import { list_set } from '../../../list/set.mjs';
import { list_each_with_index } from '../../../list/each/with/index.mjs';
import { metadata } from '../../../metadata.mjs';
import { git_ignore_map } from '../map.mjs';
import { list_add_if_not_exists } from '../../../list/add/if/not/exists.mjs';
import { git_ignore_line_slash_add } from '../line/slash/add.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function git_ignore_add_slashes() {
    arguments_assert(arguments, []);
    function lambda_map(gitignore_lines) {
        list_add_if_not_exists(gitignore_lines, slashed);
        list_each_with_index(gitignore_lines, (element, index) => {
            let element_new = git_ignore_line_slash_add(element);
            list_set(gitignore_lines, index, element_new);
        });
    }
    await git_ignore_map(lambda_map);
    metadata([]);
}