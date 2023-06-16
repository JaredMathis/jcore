import { list_remove_multiple } from '../../../list/remove/multiple.mjs';
import { task_current } from '../../current.mjs';
import { visit } from '../../../visit.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { task_all_unsummarized } from '../unsummarized.mjs';
import { task_requires_get } from '../../requires/get.mjs';
import { list_adder } from '../../../list/adder.mjs';
import { list_first } from '../../../list/first.mjs';
import { list_length_is_0 } from '../../../list/length/is/0.mjs';
import { assert } from '../../../assert.mjs';
export async function task_all_require_cycles() {
    arguments_assert(arguments, []);
    let remaining = await task_all_unsummarized();
    while (!list_length_is_0(remaining)) {
        let task_current = list_first(remaining);
        let visited = list_adder(list_new_then_add => {
            visit(task_current, task => task_requires_get(task), v => {
                let {node} = v;
                list_new_then_add(node);
            });
        });
        assert(!list_length_is_0(visited));
        list_remove_multiple(remaining, visited);
    }
}