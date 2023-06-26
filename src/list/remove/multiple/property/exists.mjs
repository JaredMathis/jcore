import { metadata } from '../../../../metadata.mjs';
import { list_remove_multiple } from '../../multiple.mjs';
import { list_filter_property_exists } from '../../../filter/property/exists.mjs';
export function list_remove_multiple_property_exists(commit_value, property_commit_id) {
    let commits = list_filter_property_exists(commit_value, property_commit_id);
    list_remove_multiple(commit_value, commits);
    return commits;
    metadata([]);
}