import { version_property_commit } from './property/commit.mjs';
import { version_collection_repository } from './collection/repository.mjs';
import { version_push_latest } from './push/latest.mjs';
import { database_reference_set } from '../database/reference/set.mjs';
import { database_value } from '../database/value.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { data_key_value_set } from '../data/key/value/set.mjs';
import { database_reference_update_property } from '../database/reference/update/property.mjs';
import { database_create } from '../database/create.mjs';
import { list_add } from '../list/add.mjs';
import { list_contains } from '../list/contains.mjs';
import { version_property_part_id } from './property/part/id.mjs';
import { version_property_parts } from './property/parts.mjs';
import { directory_property_json } from '../directory/property/json.mjs';
import { list_single_item } from '../list/single/item.mjs';
import { version_commits_path_to_integer } from './commits/path/to/integer.mjs';
import { list_single } from '../list/single.mjs';
import { directory_property_file_path } from '../directory/property/file/path.mjs';
import { list_each_with_index_async } from '../list/each/with/index/async.mjs';
import { list_last_index } from '../list/last/index.mjs';
import { version_path_commits_get } from './path/commits/get.mjs';
import { directory_read_json } from '../directory/read/json.mjs';
import { version_path_files_get } from './path/files/get.mjs';
import { equal } from '../equal.mjs';
import { assert } from '../assert.mjs';
import { comment } from '../comment.mjs';
import { object_property_get } from '../object/property/get.mjs';
import { database_reference_data } from '../database/reference/data.mjs';
import { database_reference_get } from '../database/reference/get.mjs';
import { data_key_value_get } from '../data/key/value/get.mjs';
import { database_reference_set_if_not_exists } from '../database/reference/set/if/not/exists.mjs';
import { database_transaction } from '../database/transaction.mjs';
import { database_reference } from '../database/reference.mjs';
import { function_name_separator } from '../function/name/separator.mjs';
import { database_firestore_get } from '../database/firestore/get.mjs';
export async function version_push(repository_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let db = database_firestore_get();
    let database_collection_name = version_collection_repository(repository_name);
    let fns = function_name_separator();
    let property_commit = version_property_commit();
    const commit_latest = `${ version_property_commit() }${ function_name_separator() }latest`;
    let property_commit_latest = commit_latest;
    let document_path_info = `info`;
    let info_refererence = database_reference(db, database_collection_name, document_path_info);
    await database_transaction(db, async transaction => {
        await database_reference_set_if_not_exists(transaction, info_refererence, { [property_commit_latest]: 0 });
    });
    await database_transaction(db, async transaction => {
        const property_commit_latest_data = `${ database_collection_name }${ fns }${ property_commit_latest }`;
        let property_commit_latest_data_value = await data_key_value_get(property_commit_latest_data);
        const info = await database_reference_get(transaction, info_refererence);
        let info_data = database_reference_data(info);
        let property_commit_latest_value = object_property_get(info_data, property_commit_latest);
        comment('if this fails then local code is out of sync with server');
        assert(equal(property_commit_latest_data_value, property_commit_latest_value));
        let repository_files_path = version_path_files_get(repository_name);
        let files = await directory_read_json(repository_files_path);
        let repository_commits_path = version_path_commits_get(repository_name);
        let commits = await directory_read_json(repository_commits_path);
        let last_index = list_last_index(commits);
        await list_each_with_index_async(commits, async (commit, index) => {
            let commit_path = object_property_get(commit, directory_property_file_path());
            let commit_id = list_single(version_commits_path_to_integer(list_single_item(commit_path)));
            if (commit_id <= property_commit_latest_value) {
                return;
            }
            let commit_json = object_property_get(commit, directory_property_json());
            let commit_parts = object_property_get(commit_json, version_property_parts());
            let commit_files = list_single_item(commit_json);
            for (let file of files) {
                let file_json = object_property_get(file, directory_property_json());
                let part_id = object_property_get(file_json, version_property_part_id());
                if (list_contains(commit_parts, part_id)) {
                    list_add(commit_files, file_json);
                }
            }
            let document_path_commit = `${ property_commit }${ fns }${ commit_id }`;
            database_create(db, transaction, database_collection_name, document_path_commit, database_value(commit_files));
            if (equal(index, last_index)) {
                database_reference_update_property(transaction, info_refererence, property_commit_latest, commit_id);
                await data_key_value_set(property_commit_latest_data, commit_id);
            }
        });
        let latest_files = await version_push_latest(repository_name);
        let latest_refererence = database_reference(db, database_collection_name, commit_latest);
        await database_reference_set(transaction, latest_refererence, database_value(latest_files));
    });
}