import { database_reference_get } from './database/reference/get.mjs';
import { list_each_with_index } from './list/each/with/index.mjs';
import { database_create } from './database/create.mjs';
import { database_reference_update_property } from './database/reference/update/property.mjs';
import { database_reference_set_if_not_exists } from './database/reference/set/if/not/exists.mjs';
import { function_name_separator } from './function/name/separator.mjs';
import { version_commits_path_to_integer } from './version/commits/path/to/integer.mjs';
import { directory_property_file_path } from './directory/property/file/path.mjs';
import { version_property_part_id } from './version/property/part/id.mjs';
import { version_property_parts } from './version/property/parts.mjs';
import { directory_property_json } from './directory/property/json.mjs';
import { directory_read_json } from './directory/read/json.mjs';
import { version_path_files_get } from './version/path/files/get.mjs';
import { version_path_commits_get } from './version/path/commits/get.mjs';
import { version_repository_file_size_max } from './version/repository/file/size/max.mjs';
import { version_repository_default } from './version/repository/default.mjs';
import { database_set } from './database/set.mjs';
import { version_differences } from './version/differences.mjs';
import { string_difference_apply_parse } from './string/difference/apply/parse.mjs';
import { string_multiply } from './string/multiply.mjs';
import { random_get } from './random/get.mjs';
import { random_between } from './random/between.mjs';
import { tests_generate } from './tests/generate.mjs';
import { function_tests_generate_next } from './function/tests/generate/next.mjs';
import { list_add } from './list/add.mjs';
import { equal } from './equal.mjs';
import { assert } from './assert.mjs';
import { range } from './range.mjs';
import { string_difference_apply } from './string/difference/apply.mjs';
import { string_difference_get } from './string/difference/get.mjs';
import { tests } from './tests.mjs';
import { log } from './log.mjs';
import { string_letter_is } from './string/letter/is.mjs';
import { function_tests_generate_after } from './function/tests/generate/after.mjs';
import { function_tests_generate_generic_each } from './function/tests/generate/generic/each.mjs';
import { tests_name_next } from './tests/name/next.mjs';
import { function_name_get } from './function/name/get.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { string_split } from './string/split.mjs';
import { string_underscore_is } from './string/underscore/is.mjs';
import { object_property_get } from './object/property/get.mjs';
import { list_contains } from './list/contains.mjs';
import { list_single_item } from './list/single/item.mjs';
import { runTransaction } from 'firebase/firestore';
import { database_firestore_get } from './database/firestore/get.mjs';
import { database_reference } from './database/reference.mjs';
import { list_last_index } from './list/last/index.mjs';
export async function sandbox() {
    arguments_assert(arguments, []);
    let repository_name = version_repository_default();
    let db = database_firestore_get();
    let fns = function_name_separator();
    let database_collection_name = `repository${ fns }${ repository_name }`;
    let property_commit = 'commit';
    let property_commit_latest = `${ property_commit }${ fns }latest`;
    let document_path_info = `info`;
    let info_refererence = database_reference(db, database_collection_name, document_path_info);
    await db.runTransaction(async transaction => {
        await database_reference_set_if_not_exists(transaction, info_refererence, { [property_commit_latest]: 0 });
    });
    await db.runTransaction(async transaction => {
        const info = database_reference_get(transaction, info_refererence);
        let info_data = database_reference_data(transaction, info);
        let property_commit_latest_value = object_property_get(info_data, property_commit_latest);
        let repository_files_path = version_path_files_get(repository_name);
        let files = await directory_read_json(repository_files_path);
        let repository_commits_path = version_path_commits_get(repository_name);
        let commits = await directory_read_json(repository_commits_path);
        list_each_with_index(commits, (commit, index) => {
            let commit_path = object_property_get(commit, directory_property_file_path());
            let commit_id = version_commits_path_to_integer(list_single_item(commit_path));
            if (commit_id < property_commit_latest_value) {
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
            database_create(db, transaction, database_collection_name, document_path_commit, { value: commit_files });
            if (equal(index, list_last_index(commits))) {
                database_reference_update_property(transaction, info_refererence, property_commit_latest, commit_id);
                
            }
        });
    });
    return;
    let file_size_max = await version_repository_file_size_max(repository_name);
    console.log({ file_size_max });
    return;
    return;
    const collection_path = 'cities';
    const document_path = 'new-city-id';
    const document_data = { message: 'test' };
    await database_set(collection_path, document_path, document_data);
    return;
    let differences = await version_differences(repository_name);
    console.log(differences);
    return;
    await tests();
    let fn1 = string_difference_get;
    let fn2 = string_difference_apply;
    let pairs = [];
    for (let i of range(10)) {
        let left = random_input();
        let right = random_input();
        let args1 = [
            left,
            right
        ];
        let result1 = fn1(...args1);
        console.log({ result1 });
        let args2 = [
            left,
            result1
        ];
        let result2 = fn2(...args2);
        assert(equal(right, result2));
        list_add(pairs, {
            args1,
            args2
        });
    }
    for (let pair of pairs) {
        let {args1, args2} = pair;
        await function_tests_generate_next(fn1, args1);
        await function_tests_generate_next(fn2, args2);
    }
    await tests_generate();
    function random_input() {
        let result = '';
        for (let index of range(random_between(8, 16))) {
            let c = random_get() > 0.5 ? 'a' : 'b';
            let m = string_multiply(c, random_between(1, 3));
            result = result + m;
        }
        return result;
    }
    return;
    let values = [
        '2+a',
        '3-2',
        '10+def',
        '123-5'
    ];
    await tests();
    for (let v of values) {
        await function_tests_generate_next(string_difference_apply_parse, [v]);
    }
    await tests_generate();
    return;
    let functions = [
        string_letter_is,
        string_underscore_is
    ];
    for (let f of functions) {
        let function_name = function_name_get(f);
        log(function_name);
        let inputs_string = `1,2,3,_,d,b,c`;
        let inputs = string_split(inputs_string, ',');
        for (let i of inputs) {
            let test_name = await tests_name_next(function_name);
            await function_tests_generate_generic_each(function_name, test_name, [i]);
        }
        await function_tests_generate_after();
    }
    return;
}