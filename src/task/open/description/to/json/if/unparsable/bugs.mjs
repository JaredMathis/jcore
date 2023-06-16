import { task_open_description_to_json_if_unparsable_generic } from './generic.mjs';
import { arguments_assert } from '../../../../../../../arguments/assert.mjs';
export async function task_open_description_to_json_if_unparsable_bugs() {
    arguments_assert(arguments, []);
    let bugs = [{
            task: {
                number: 62,
                title: 'Maybe enforce naming convention of _async',
                state: 'open',
                body: 'If file ends in _async\r\n' + 'There must be a non-async version?\r\n' + '\r\n' + ' node run.mjs git function_unasyncify \r\n' + '\r\n' + 'Therefore  function_unasyncify  can safely remove _async suffix'
            }
        }];
    return await task_open_description_to_json_if_unparsable_generic(bugs);
}