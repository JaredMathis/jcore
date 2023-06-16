import { task_current } from '../../current.mjs';
import { visit } from '../../../visit.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { task_all_unsummarized } from '../unsummarized.mjs';
import { task_requires_get } from '../../requires/get.mjs';
import { list_adder } from '../../../list/adder.mjs';
import { list_first } from '../../../list/first.mjs';
export async function task_all_require_cycles() {
    arguments_assert(arguments, []);
    let all = await task_all_unsummarized();
    let task_current = list_first(all);
    let visited = list_adder(list_new_then_add => {
        visit(task_current, task => task_requires_get(task), v => {
            let {node} = v;
            list_new_then_add(node);
        });
    });
    console.log({visited})
}