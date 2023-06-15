import { task_property_title } from '../../../property/title.mjs';
import { object_map } from '../../../../object/map.mjs';
export function task_from_git_hub_issue(issue) {
    return object_map(issue, [
        'number',
        task_property_title()
    ]);
}