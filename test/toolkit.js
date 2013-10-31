var toolkit = require('../lib/toolkit'),
    should = require('should');

describe('toolkit', function () {
    describe('this Object', function () {
        it('should be an Object', function() {
            toolkit.should.instanceof(Object);
        })
    })

    describe('#display_long_str_to_short(str, length, type)', function() {
        it('should keep first 3 chars of chuzheng', function() {
            toolkit.display_long_str_to_short('chuzheng', 3).should.exactly('chu...');
        })

        it('should keep last 3 chars of chuzheng', function() {
            toolkit.display_long_str_to_short('chuzheng', 3,'last').should.exactly('...eng');
        })
    })        
})