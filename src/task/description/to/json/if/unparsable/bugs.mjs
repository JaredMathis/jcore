import { task_description_to_json_if_unparsable_generic } from './generic.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
export async function task_description_to_json_if_unparsable_bugs() {
    arguments_assert(arguments, []);
    let bugs = [
        {
            number: 62,
            title: 'Maybe enforce naming convention of _async',
            state: 'open',
            body: 'If file ends in _async\r\n' + 'There must be a non-async version?\r\n' + '\r\n' + ' node run.mjs git function_unasyncify \r\n' + '\r\n' + 'Therefore  function_unasyncify  can safely remove _async suffix'
        },
        {
            number: 76,
            title: 'release function',
            state: 'open',
            body: 'release should run all tests, enforce all rules'
        }
    ];
    let v = await task_description_to_json_if_unparsable_generic(bugs);
    return v;
}