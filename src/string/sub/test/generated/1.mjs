export function string_sub_test_generated_1() {
    let expected = 'b';
    let actual = string_sub('aab', 2, 3);
    assert(json_equal(actual, expected));
}