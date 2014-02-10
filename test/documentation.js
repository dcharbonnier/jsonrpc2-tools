/* global  describe, it */

var rpc = require('..');
var should = require('should');

var argsDescription = [
  {'name': 'name', 'type': rpc.types.String, 'required': true},
  {'name': 'limit', 'type': rpc.types.UnsignedInt},
  {'name': 'start', 'type': rpc.types.UnsignedInt},
  {'name': 'sort', 'type': rpc.types.String, 'enum': ['popular', '-popular'], 'default': 'popular'}
];

describe('Rpc documentation and arguments description tools', function () {
  it('should accept a description', function (done) {
    function test() {
    }

    var f = rpc.utils.setup(test, {desc: 'Function description'});
    rpc.utils.describe(f).should.have.property('desc').equal('Function description');
    done();
  });
  it('should return a type description', function (done) {
    function test() {
    }

    var f = rpc.utils.setup(test, {args: [
      {'name': 'xxx', 'type': rpc.types.UUID}
    ]
    });
    rpc.utils.describe(f).should.have.property('arguments');
    should(rpc.utils.describe(f).arguments[0]).have.property('type').equal('UUID');
    done();
  });
  it('should convert positional arguments to named arguments', function (done) {
    function test(args, opts, callback) {
      args.should.have.property('name').equal('myname');
      args.should.have.property('count').equal(2);
      callback();
    }

    //args = rpc.get_args(arguments);
    var wrappedTest = rpc.utils.setup(test, {args: ['name', 'count'], desc: 'Function description'});
    wrappedTest(['myname', 2], null, done);
  });

  it('should accept types for arguments and positional arguments', function (done) {
    function test(args, opts, callback) {
      args.should.have.property('name').equal('myname');
      args.should.have.property('limit').equal(2);
      args.should.have.property('start').equal(null);
      args.should.have.property('sort').equal('popular');
      callback();
    }

    //args = rpc.get_args(arguments);
    var wrappedTest = rpc.utils.setup(test, {args: argsDescription});
    wrappedTest(['myname', 2], null, done);
  });
  it('should accept types for arguments and dict arguments', function (done) {
    function test(args, opts, callback) {
      args.should.have.property('name').equal('myname');
      args.should.have.property('limit').equal(2);
      args.should.have.property('start').equal(null);
      args.should.have.property('sort').equal('popular');
      callback();
    }

    //args = rpc.get_args(arguments);
    var wrappedTest = rpc.utils.setup(test, {args: argsDescription});
    wrappedTest({'name': 'myname', 'limit': 2}, null, done);
  });
  it('should throw error if arguments is invalid', function (done) {
    function test(args, opts, callback) {
      args.should.have.property('name').equal('myname');
      args.should.have.property('limit').equal(2);
      args.should.have.property('start').equal(null);
      args.should.have.property('sort').equal('popular');
      callback();
    }

    //args = rpc.get_args(arguments);
    var wrappedTest = rpc.utils.setup(test, {args: argsDescription});
    (function () {
      wrappedTest(['myname', '2'], null, done);
    }).should.throw();
    done();
  });

});