module.exports = function calculate_scores(answer){
    let right_answer = {text:["统一建模语言","封装性","继承性","多态性"],radio:[false,true,false,false,true,false,false,false,false,true,true,false],checkbox:[[true,true,false,true],[true,true,true,false]],textarea:'模型是现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。'}

    // 文本得分
    let score1 = score(right_answer.text,answer.text)
    let score2 = 0
    if(right_answer.textarea == answer.textarea ){
        score2+=20
    }
    // 选项得分
    let score3 = 0
    let score4 = score(right_answer.checkbox,answer.checkbox)
    for(let i = 0;i < answer.radio.length;i++){
        if(answer.radio[i] == right_answer.radio[i] && right_answer.radio[i] == true){
            score3+=10
        }
    }
    // 总分
    let scores = score1+score2+score3+score4
    return scores
}
function score(right,select){
    let sum = 0
    for (let item of right){
        for (let ele of select){
            if(typeof(item) == 'object' && typeof(ele) == 'object'){
                if(item.toString() == ele.toString()){
                    sum+=10
                }
            }else if(item == ele && typeof(item) == 'string'){
                    sum+=5
            }
        }
    }
    return sum
}

