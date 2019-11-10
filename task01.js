let num = prompt('Write number');
let check = true;
for(i=2; i < num; i++){
    if(num%i==0){
        alert('не просте число');
        check = false;
        break;
    } 
}
if(check){
    alert('просте число');
}
