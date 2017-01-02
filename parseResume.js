/**
 * Created by metrokobe on 2017/1/1.
 */
const fs = require('fs');
const resumeMDPath = './README.md';
const resumeJSONPath = './README.json'
const firstLevel = "#"
function removeEnter(string){
    return string.replace('\n', '');
}
function parse(data){
    let resumeData = {}
    const datas = data.split(firstLevel).slice(1);
    for(let i=0;i<datas.length;i++){
        let dataItem = datas[i].split('\n*');
        console.log(dataItem);
        for(let j=0;j<dataItem.length;j++){
            if(j>0){
                let dataItemSplit = dataItem[j].split('|');
                resumeData[dataItem[0]][removeEnter(dataItemSplit[0])] = removeEnter(dataItemSplit[1]);
            }else{
                resumeData[removeEnter(dataItem[0])] = {};
            }
        }
    }
    return resumeData;
}

fs.readFile(resumeMDPath, 'utf8', (error, data)=>{
    if(error) {
        console.log(error);
    }
    const resumeString = JSON.stringify(parse(data), null, 2);
    fs.writeFile(resumeJSONPath, resumeString,  (error)=>{
        if(error) console.log(`write error ${error}`);
        else{
            console.log('write succ');
        }
    })

})