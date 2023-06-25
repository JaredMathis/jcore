import { integer_value_0 } from '../../integer/value/0.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { database_reference_set } from '../../database/reference/set.mjs';
import { database_reference } from '../../database/reference.mjs';
import { version_push_latest } from './latest.mjs';
import { data_key_value_set } from '../../data/key/value/set.mjs';
import { database_reference_update_property } from '../../database/reference/update/property.mjs';
import { database_value } from '../../database/value.mjs';
import { database_create } from '../../database/create.mjs';
import { version_document_path_commit } from '../document/path/commit.mjs';
import { list_add } from '../../list/add.mjs';
import { list_contains } from '../../list/contains.mjs';
import { version_property_part_id } from '../property/part/id.mjs';
import { version_property_parts } from '../property/parts.mjs';
import { directory_property_json } from '../../directory/property/json.mjs';
import { list_single_item } from '../../list/single/item.mjs';
import { version_commits_path_to_integer } from '../commits/path/to/integer.mjs';
import { list_single } from '../../list/single.mjs';
import { directory_property_file_path } from '../../directory/property/file/path.mjs';
import { list_each_with_index_async } from '../../list/each/with/index/async.mjs';
import { list_last_index } from '../../list/last/index.mjs';
import { version_path_commits_get } from '../path/commits/get.mjs';
import { directory_read_json } from '../../directory/read/json.mjs';
import { version_path_files_get } from '../path/files/get.mjs';
import { equal } from '../../equal.mjs';
import { assert } from '../../assert.mjs';
import { comment } from '../../comment.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { database_reference_get_data } from '../../database/reference/get/data.mjs';
import { data_key_value_get } from '../../data/key/value/get.mjs';
import { database_reference_set_if_not_exists } from '../../database/reference/set/if/not/exists.mjs';
import { database_transaction } from '../../database/transaction.mjs';
import { database_document_info_reference } from '../../database/document/info/reference.mjs';
import { version_property_commit_latest } from '../property/commit/latest.mjs';
import { function_name_separator } from '../../function/name/separator.mjs';
import { version_collection_repository } from '../collection/repository.mjs';
import { database_firestore_get } from '../../database/firestore/get.mjs';
import { list_adder_async } from '../../list/adder/async.mjs';
import { subtract_1 } from '../../subtract/1.mjs';
import { list_length } from '../../list/length.mjs';
export async function version_push_generic(repository_name, preview) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let list_commits = await list_adder_async(async function v_11(list_commits_add) {
        let db = database_firestore_get();
        let database_collection_name = version_collection_repository(repository_name);
        let fns = function_name_separator();
        let property_commit_latest = version_property_commit_latest();
        let info_refererence = database_document_info_reference(db, database_collection_name);
        await database_transaction(db, async function v_12(transaction) {
            await database_reference_set_if_not_exists(transaction, info_refererence, { [property_commit_latest]: integer_value_0() });
        });
        await database_transaction(db, async function v_13(transaction) {
            const property_commit_latest_data = `${ database_collection_name }${ fns }${ property_commit_latest }`;
            let property_commit_latest_data_value = await data_key_value_get(property_commit_latest_data);
            let info_data = await database_reference_get_data(transaction, info_refererence);
            let property_commit_latest_value = object_property_get(info_data, property_commit_latest);
            comment('if this fails then local code is out of sync with server');
            let v = equal(property_commit_latest_data_value, property_commit_latest_value);
            assert(v);
            let repository_files_path = version_path_files_get(repository_name);
            let files = await directory_read_json(repository_files_path);
            let repository_commits_path = version_path_commits_get(repository_name);
            let commits = await directory_read_json(repository_commits_path);
            let last_index = list_last_index(commits);
            await list_each_with_index_async(commits, async function v_14(commit, index) {
                let v_2 = directory_property_file_path();
                let commit_path = object_property_get(commit, v_2);
                let v_10 = list_single_item(commit_path);
                let v_3 = version_commits_path_to_integer(v_10);
                let commit_vesion = list_single(v_3);
                let v_15 = commit_vesion <= property_commit_latest_value;
                if (v_15) {
                    return;
                }
                let v_4 = directory_property_json();
                let commit_json = object_property_get(commit, v_4);
                let v_5 = version_property_parts();
                let commit_parts = object_property_get(commit_json, v_5);
                let commit_files = list_single_item(commit_json);
                for (let file of files) {
                    let v_6 = directory_property_json();
                    let file_json = object_property_get(file, v_6);
                    let v_7 = version_property_part_id();
                    let part_id = object_property_get(file_json, v_7);
                    let v_16 = list_contains(commit_parts, part_id);
                    if (v_16) {
                        list_add(commit_files, file_json);
                    }
                }
                list_commits_add({
                    commit_vesion,
                    files_length: subtract_1(list_length(commit_files))
                });
                if (preview) {
                    return;
                }
                let document_path_commit = version_document_path_commit(commit_vesion);
                let v_8 = database_value(commit_files);
                database_create(db, transaction, database_collection_name, document_path_commit, v_8);
                let v_17 = equal(index, last_index);
                if (v_17) {
                    database_reference_update_property(transaction, info_refererence, property_commit_latest, commit_vesion);
                    await data_key_value_set(property_commit_latest_data, commit_vesion);
                }
            });
            if (preview) {
                return;
            }
            let latest_files = await version_push_latest(repository_name);
            let latest_refererence = database_reference(db, database_collection_name, property_commit_latest);
            let v_9 = database_value(latest_files);
            await database_reference_set(transaction, latest_refererence, v_9);
        });
    });
    return list_commits;
}