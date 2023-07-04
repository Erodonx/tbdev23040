function strtokSp(str1, str2, n){
    const tab = str1.split(str2);
    return tab[n-1];

}


function strtok(str1, str2, n){
    var strtemp;
    console.log(str1);
    for(i=0 ; i<n-1 ; i++)
    {
        str1=str1.substring((str1.indexOf(str2)+1),str1.length);
        console.log(i);
        console.log(str1);
    }
    if (str1.indexOf(str2)==-1){

        return str1;
    }
    else{
        strtemp=str1.substring(0,(str1.indexOf(str2)-1));
        str1=strtemp;
        return str1;

    }

}
var strTest="robert ;dupont ;amiens ;80000 ;initalD ;Pinata";
var strRed=strtokSp(strTest, ';', 5);
console.log(strRed);
window.alert('Vous avez extrait '+ strRed);

