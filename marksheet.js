
const calc = () => {
    var reg= document.getElementById("reg").value;
    let nam= document.getElementById("nam").value;
    let sch= document.getElementById("sch").value;
    let eng= document.getElementById("eng").value;
    let phy= document.getElementById("phy").value;
    let chem= document.getElementById("chem").value;
    let maths= document.getElementById("maths").value;
    let comp= document.getElementById("comp").value;
    heading1='Subjects';
    heading2='Marks';
    heading3='Percentage';
    heading4='Pass/Fail';
    sub1="English";
    sub2="Physics";
    sub3="Maths";
    sub4="Chemistry";
    sub5="Computer";

    console.log(reg);
    console.log(nam);   
    console.log(sch);
    console.log(eng);
    console.log(phy);
    console.log(chem);
    console.log(comp);
    console.log(maths)

    if(eng>100)
    {
        
        alert("Please enter valid english marks for 100!!")
    }
    if(phy>100)
    {
        alert("Please enter valid physics marks for 100!!")
    }
    if(maths>100)
    {
        alert("Please enter valid Maths marks for 100!!")
    }
    if(chem>100)
    {
        alert("Please enter valid Chemistry marks for 100!!")
    }
    if(comp>100)
    {
        alert("Please enter valid Chemistry marks for 100!!")
    }

    

    let english=eng/10;
    document.getElementById("english").innerHTML=english;
    document.getElementById("eng1").innerHTML=eng;
    if(english>5)
    {
        document.getElementById("epf").innerHTML='Pass'
    }
    else{
        document.getElementById("epf").innerHTML='Fail'
    }


    let physics=phy/10;
    document.getElementById("physics").innerHTML=physics;
    document.getElementById("phy1").innerHTML=phy;
    if(physics>5)
    {
        document.getElementById("ppf").innerHTML='Pass'
    }
    else{
        document.getElementById("ppf").innerHTML='Fail'
    }


    let mat=maths/10;
    document.getElementById("mat").innerHTML=mat;
    document.getElementById("maths1").innerHTML=maths;
    if(mat>5)
    {
        document.getElementById("mpf").innerHTML='Pass'
    }
    else{
        document.getElementById("mpf").innerHTML='Fail'
    }


    let chemistry=chem/10;
    document.getElementById("chemistry").innerHTML=chemistry;
    document.getElementById("chem1").innerHTML=chem;
    if(chemistry>5)
    {
        document.getElementById("cpf").innerHTML='Pass'
    }
    else{
        document.getElementById("cpf").innerHTML='Fail'
    }

    let computer=comp/10;
    document.getElementById("computer").innerHTML=computer;
    document.getElementById("comp1").innerHTML=comp;
    if(computer>5)
    {
        document.getElementById("spf").innerHTML='Pass'
    }
    else{
        document.getElementById("spf").innerHTML='Fail'
    }

    // tabular = document.getElementById("tabular");
    // tabular.insertAdjacentHTML('beforeend',tab(heading1,heading2,heading3,heading4,sub1,sub2,sub3,sub4,sub5,eng,english,epf,phy,physics,ppf,maths,mat,mpf,chem,chemistry,cpf,comp,cpf));

    
    // let tabular = document.getElementById("tabular");
    // tabular.tab();

    // let total=eng+phy+maths+chem+comp;
    let y= `<table style="width: 50%; border: 1px solid rgb(0, 0, 0);">

    <tr>
         <th style="width:80px; border:1px solid black;">${heading1}</th>
         <th style="width:80px; border:1px solid black;">${heading2}</th>
         <th style="width:80px ;border:1px solid black;">${heading3}</th>
         <th style="width:80px; border:1px solid black;">${heading4}/th>
         
     </tr>
     <tr>
         <td>${sub1}</td>
         <td id="eng1">${eng}</td>
         <td id="english">${english}</td>
         <td id="epf">${epf}</td>
     </tr>
     <tr>
         <td>${sub2}</td>
         <td id="phy1">${phy}</td>
         <td id="physics">${physics}</td>
         <td id="ppf">${ppf}</td>
     </tr>
     <tr>
         <td>${sub3}</td>
         <td id="maths1">${maths}</td>
         <td id="mat">${mat}</td>
         <td id="mpf">${mpf}</td>
     </tr>
     <tr>
         <td>${sub4}</td>
         <td id="chem1">${chem}</td>
         <td id="chemistry">${chemistry}</td>
         <td id="cpf">${cpf}</td>
     </tr>
     <tr>
         <td>${sub5}</td>
         <td id="comp1">${comp}</td>
         <td id="computer">${computer}</td>
         <td id="spf">${spf}</td>
     </tr>
    
     </table>`;
    
   
    document.getElementById("tabular").innerHTML=y;

}

// const tab= ({heading1,heading2,heading3,heading4,sub1,sub2,sub3,sub4,sub5,eng,english,epf,phy,physics,ppf,maths,mat,mpf,chem,chemistry,cpf,computer,comp,spf}) => {
    