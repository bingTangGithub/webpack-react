var add = require('./add.js');
var expect = require('chai').expect;

// 测试脚本里面应该包括一个或多个describe块，每个describe块应该包括一个或多个it块。
describe('加法函数的测试', function() {
  // it块称为"测试用例"（test case），表示一个单独的测试，是测试的最小单位。
  it('1 加 1 应该等于 2', function() {

    // 断言: 调用add(1, 1)，结果应该等于2。
    expect(add(1, 1)).to.be.equal(2); 
  });
});
