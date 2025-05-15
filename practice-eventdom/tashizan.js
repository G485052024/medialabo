function greeting(){
    let l = document.querySelector('input[name=left]');
    let r = document.querySelector('input[name=right]');
    leftnumber = Number(l.value);
    rightnumber = Number(r.value);
    answernumber = leftnumber + rightnumber;
    let s = document.querySelector("span#answer");
    s.textContent = answernumber;


}
let b = document.querySelector('button#calc');
b.addEventListener('click', greeting);