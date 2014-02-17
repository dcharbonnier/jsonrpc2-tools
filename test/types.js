/* global describe, it */

var rpc = require('..');
var should = require('should');

describe('Test rpc types', function () {

  it('Boolean should return description', function (done) {
    var b = new rpc.types.Boolean({desc: 'rr'});
    should(b.typeDesc()).equal('Boolean');
    done();
  });

  it('Boolean raise error if required and empty', function (done) {
    var b = new rpc.types.Boolean({
      name    : 'test',
      required: true
    });
    (function () {
      b.check(null);
    }).should.throw();
    done();
  });
  it('Boolean return default if empty', function (done) {
    var b = new rpc.types.Boolean({
      name   : 'test',
      default: true
    });

    (function () {
      b.check();
    }).should.not.throw().and.equal(true);

    b = new rpc.types.Boolean({
      name   : 'test',
      default: false
    });
    (function () {
      b.check();
    }).should.not.throw().and.equal(false);
    done();
  });
  it('Boolean raise error if value is invalid', function (done) {
    var b = new rpc.types.Boolean({
      name   : 'test',
      default: true
    });

    (function () {
      b.check('NOT A BOOLEAN');
    }).should.throw();

    done();
  });
  it('Int should return description', function (done) {
    var b = new rpc.types.Int({desc: 'rr'});
    should(b.typeDesc()).equal('Int');
    done();
  });
  it('Int raise error if value not int', function (done) {
    var b = new rpc.types.Int({
      name: 'test'
    });

    (function () {
      b.check(1.1);
    }).should.throw();
    done();
  });
  it('Int should not raise error if value correct', function (done) {
    var b = new rpc.types.Int({
      name: 'test'
    });

    (function () {
      b.check(-1);
    }).should.not.throw();
    (function () {
      b.check(2);
    }).should.not.throw();
    (function () {
      b.check(0);
    }).should.not.throw();
    done();
  });
  it('UnsignedInt should return description', function (done) {
    var b = new rpc.types.UnsignedInt({desc: 'rr'});
    should(b.typeDesc()).equal('UnsignedInt');
    done();
  });

  it('UnsignedInt raise error if value not int', function (done) {
    var b = new rpc.types.UnsignedInt({
      name: 'test'
    });

    (function () {
      b.check(1.1);
    }).should.throw();
    done();
  });
  it('UnsignedInt raise error if value negative', function (done) {
    var b = new rpc.types.UnsignedInt({
      name: 'test'
    });

    (function () {
      b.check(-1);
    }).should.throw();
    done();
  });
  it('UnsignedInt should not raise error if value correct', function (done) {
    var b = new rpc.types.UnsignedInt({
      name: 'test'
    });

    (function () {
      b.check(1);
    }).should.not.throw();
    done();
  });
  it('String should return description', function (done) {
    var b = new rpc.types.String({desc: 'rr'});
    should(b.typeDesc()).equal('String');
    done();
  });
  it('String should return description with enum', function (done) {
    var b = new rpc.types.String({desc: 'rr', enum: ['ENUM1', 'ENUM2']});
    should(b.typeDesc()).equal('String(ENUM1,ENUM2)');
    done();
  });

  it('String raise error if value not string', function (done) {
    var b = new rpc.types.String({
      name: 'test'
    });

    (function () {
      b.check(1.1);
    }).should.throw();
    (function () {
      b.check(1);
    }).should.throw();
    (function () {
      b.check({});
    }).should.throw();
    done();
  });
  it('String should not raise error if value is correct', function (done) {
    var b = new rpc.types.String({
      name: 'test'
    });

    (function () {
      b.check('1');
    }).should.not.throw();
    (function () {
      b.check('aaa');
    }).should.not.throw();
    done();
  });
  it('String raise error if enum and wrong value', function (done) {
    var b = new rpc.types.String({
      name: 'test',
      enum: ['ENUM1', 'ENUM2']
    });

    (function () {
      b.check('WRONG');
    }).should.throw();
    done();
  });
  it('String don\'t raise error if enum and correct value', function (done) {
    var b = new rpc.types.String({
      name: 'test',
      enum: ['ENUM1', 'ENUM2']
    });

    (function () {
      b.check('ENUM1');
    }).should.not.throw();
    done();
  });
  it('UUID should return description', function (done) {
    var b = new rpc.types.UUID({desc: 'rr'});
    should(b.typeDesc()).equal('UUID');
    done();
  });
  it('UUID should not raise error if value is correct', function (done) {
    var b = new rpc.types.UUID({
      name: 'test'
    });
    (function () {
      b.check('52ea907d781779c2a9000009');
    }).should.not.throw();
    done();
  });
  it('UUID should raise error if value is incorrect', function (done) {
    var b = new rpc.types.UUID({
      name: 'test'
    });
    (function () {
      b.check('xxxx');
    }).should.throw();
    (function () {
      b.check(1);
    }).should.throw();
    done();
  });
  it('Object should return description', function (done) {
    var b = new rpc.types.Object({desc: 'rr'});
    should(b.typeDesc()).equal('Object');
    done();
  });
  it('Object should not raise error if value is correct', function (done) {
    var b = new rpc.types.Object({
      name: 'test'
    });
    (function () {
      b.check({});
    }).should.not.throw();
    done();
  });
  it('Object should raise error if value is incorrect', function (done) {
    var b = new rpc.types.Object({
      name: 'test'
    });
    (function () {
      b.check('xxxx');
    }).should.throw();
    (function () {
      b.check(1);
    }).should.throw();
    done();
  });
});