/**
 * copy object values to another object with a key mapping based on a schema.
 * A new Object is created if target is not specified
 * If value is already on the target object for a given key, it will be overwritten.
 * Only keys in the schema will be mapped.
 * @example
 *
 * var schema = {
 *  prop: '_prop',
 *  otherProp: '_otherProp',
 *  mayExist: '_mayExist'
 * };
 *
 * var object = {
 *  prop: 'value',
 *  otherProp: 'otherValue',
 *  notInSchema: 'error'
 * };
 *
 * var output = mapKeys(object, schema);
 *
 * assert.equal(output._prop, 'value');
 * assert.equal(output._otherProp, 'otherValue');
 * assert(output.notInSchema === undefined);
 * assert(output.prop === undefined);
 * assert(output.otherProp === undefined);
 * assert(output.mayExist === undefined);
 * assert(output._mayExist === undefined);
 *
 * @param {Object} source - the source object
 * @param {Object} schema - the schema to apply
 * @param {Object} [target] - a target object
 * @returns {Object} the output object
 */
function mapKeys(source, schema, target) {

    var obj = target || {};

    var schemaKeys = Object.keys(schema);
    schemaKeys.forEach(function (skey) {
        if (source[skey]) {
            obj[schema[skey]] = source[skey];
        }
    });

    return obj;
}


module.exports = {
    mapKeys: mapKeys
};