window.onload = function () {
    let x = 28;
    let y = 77;
    console.log(skaiciusDalinasiDvieju(28));
    console.log(skaiciusDalinasiDvieju(77));

}

function skaiciusDalinasiDvieju(skaicius)
{
    if ((skaicius % 2 === 0)) 
    {
        return true;
    }
   
    
    else if ((skaicius % 2 >0) ) 
    {
        return false;
    }
    
}