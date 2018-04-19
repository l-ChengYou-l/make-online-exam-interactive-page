function getAnswer(){
    let answer = {text:[],radio:[],checkbox:[],textarea:''}
    let text1 = document.getElementsByName("UML")
    let text2 = document.getElementsByName("features")
    let textarea = document.getElementsByTagName("textarea")
    answer.text.push(text1.value,text2.value)
    answer.textarea = textarea.value
    let radios1 = document.getElementsByName("radio1")
    let radios2 = document.getElementsByName("radio2")
    let checkboxs = document.getElementsByName("checkbox")
    for(let i=0;i<radios1.length;i++){
        answer.radio.push(radios1[i].checked)
    }
    for(let i=0;i<radios2.length;i++){
        answer.radio.push(radios2[i].checked)
    }
    for(let i=0;i<checkboxs.length;i++){
        let arr1 = []
        let arr2 = []
        if(i>5){
            arr1.push(checkboxs[i].checked)
        }else{
            arr2.push(checkboxs[i].checked)

        }
        answer.checkbox.push(arr1,arr2)
    }
    document.getElementById("scores").innerHTML = calculate_scores(answer)
}