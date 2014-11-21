var assert = require('assert');
var mapKeys = require('../index.js').mapKeys;

describe('utility module', function () {

    describe('mapKeys', function () {

        it('should map keys base on schema', function () {

            var schema = {
                prop: '_prop',
                otherProp: '_otherProp',
                mayExist: '_mayExist'
            };

            var object = {
                prop: 'value',
                otherProp: 'otherValue',
                notInSchema: 'error'
            };

            var output = mapKeys(object, schema);

            assert.equal(output._prop, 'value');
            assert.equal(output._otherProp, 'otherValue');
            assert(output.notInSchema === undefined);
            assert(output.prop === undefined);
            assert(output.otherProp === undefined);
            assert(output.mayExist === undefined);
            assert(output._mayExist === undefined);

        });

        it('should map keys base on schema to extend a provided object', function () {

            var schema = {
                prop: '_prop',
                otherProp: '_otherProp',
                mayExist: '_mayExist'
            };

            var object = {
                prop: 'value',
                otherProp: 'otherValue',
                notInSchema: 'error'
            };

            var target = {
                existing: 'someExisting'
            };

            var output = mapKeys(object, schema, target);

            assert.equal(output, target);
            assert.equal(output._prop, 'value');
            assert.equal(output._otherProp, 'otherValue');
            assert(output.notInSchema === undefined);
            assert(output.prop === undefined);
            assert(output.otherProp === undefined);
            assert(output.mayExist === undefined);
            assert(output._mayExist === undefined);
            assert.equal(output.existing, 'someExisting')
        });

    });
});
