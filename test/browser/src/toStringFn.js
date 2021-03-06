describe('toStringFn', function() {
  var toStringFn;
  var cleanup;

  before(function(done) {

    var req = requirejs.config({
      context: Math.random().toString().slice(2),
      baseUrl: '../src',
      paths: {cleanup: '../test/cleanup'}
    });

    req(['toStringFn', 'cleanup'], function(_toStringFn, _cleanup) {
      toStringFn = _toStringFn;
      cleanup = _cleanup;
      done();
    });
  });

  it('is an function', function() {
    expect(toStringFn).to.be.an('function');
  });

  it('toStrings stuff', function() {
    expect(toStringFn.call([])).to.be.equal('[object Array]');
    expect(toStringFn.call({})).to.be.equal('[object Object]');
    expect(toStringFn.call(true)).to.be.equal('[object Boolean]');
    expect(toStringFn.call(new Date())).to.be.equal('[object Date]');
  });

  after(function() {
    cleanup();
  });
});
