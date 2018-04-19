let fs = require("fs");
let calculate_scores = require("../main/main")
describe('main()', () => {
    it('should pass', () => {
      expect(fs.statSync("./exam/index.html").isFile()).toBe(true);
    });
    it('excellent',()=> {
        let answer = {text:["统一建模语言","封装性","继承性","多态性"],radio:[false,true,false,false,true,false,false,false,false,true,true,false],checkbox:[[true,true,false,true],[true,true,true,false]],textarea:'模型是现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。'}
        let scores = 100
        expect(scores).toEqual(calculate_scores(answer))
    })
    it('good',()=> {
        let answer = {text:["统一建模语言","封装性","继承性",""],radio:[false,true,false,false,true,false,false,false,false,true,true,false],checkbox:[[false,true,false,true],[true,true,true,false]],textarea:'模型是现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。'}
        let scores = 85
        expect(scores).toEqual(calculate_scores(answer))
    })
    it('pass',()=> {
        let answer = {text:["统一建模语言","","继承性","多态性"],radio:[false,true,false,false,true,false,false,false,true,false,false,false],checkbox:[[true,true,false,true],[true,true,false,false]],textarea:'模型是现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。'}
        let scores = 65
        expect(scores).toEqual(calculate_scores(answer))
    })
    it('fail',()=> {
        let answer = {text:["统一建模语言","封装性","继承性","多态性"],radio:[false,true,false,false,true,false,false,false,false,true,false,false],checkbox:[[true,false,false,true],[true,true,false,false]],textarea:'模型是现实世界的简化，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。'}
        let scores = 50
        expect(scores).toEqual(calculate_scores(answer))
    })
});
