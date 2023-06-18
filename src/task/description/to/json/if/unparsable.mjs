import { task_all_unsummarized } from '../../../../all/unsummarized.mjs';
import { task_description_to_json_if_unparsable_generic } from './unparsable/generic.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function task_description_to_json_if_unparsable() {
    arguments_assert(arguments, []);
    let all = await task_all_unsummarized();
    let v = await task_description_to_json_if_unparsable_generic(all);
    return v;
}