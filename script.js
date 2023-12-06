function szamlalas(){
    let x = document.getElementById("nem").selectedIndex
    let y = document.getElementById("nem").options
    let gender = y[x].value
    let height = Number(document.getElementById("magassag").value)
    let weight = Number(document.getElementById("suly").value)
    let age = Number(document.getElementById("kor").value)
    let z = document.getElementById("aktivitas").selectedIndex
    let v = document.getElementById("aktivitas").options
    let activity = Number(v[z].value)
    let eredmeny
    if (gender == "ferfi"){
        eredmeny = 10*weight+6.25*height-5*age+5
    }
    else if (gender == "no"){
        eredmeny = 10*weight+6.25*height-5*age-161
    }
    if ((height=="") || (weight=="")){
        alert("Nem adott meg súly vagy magasságot!")
    }
    else{
        if((age=="")|| (age%1!=0)){
            alert("Hibásan megadott vagy hiányzó kor!")
        }
        else{
            eredmeny = eredmeny*activity
            let m = document.getElementById("mod").selectedIndex
            let l = document.getElementById("mod").options
            eredmeny = eredmeny+Number(l[m].value)
            document.getElementById("kesz").innerHTML = eredmeny+" kcal"
        }
    }
}