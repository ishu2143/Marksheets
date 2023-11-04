const calc = () => {
    var reg= document.getElementById("reg").value;
    var nam= document.getElementById("nam").value;
    var sch= document.getElementById("sch").value;
    var eng= document.getElementById("eng").value;
    var phy= document.getElementById("phy").value;
    var chem= document.getElementById("chem").value;
    var maths= document.getElementById("maths").value;
    var comp= document.getElementById("comp").value;
    
    var mark=[eng,phy,maths,chem,comp]; 
    var sub=["English","Physics","Maths","Chemistry","Computer"];  
   
    if(reg.length!=9){
        alert("Enter valid 8 digit registration number");
    }

    for(i=0;i<5;i++)
    {
        if((mark[i]<0)||(mark[i]>100)||(mark[i]==""))
        {
            alert("Enter valid mark for "+sub[i]);
        }
        else
        {
            if(mark[i]>50)
            {
                mark[i]=`<span style="color:green">Pass</span>`;
            }
            else
            {
                mark[i]=`<span style="color: red">Fail</span>`;
            }
        }
    }
    var total=Number(eng)+Number(phy)+Number(maths)+Number(chem)+Number(comp);
    let x=`<h5>Registration number : ${reg}</h5>
            <h5>Name : ${nam}</h5>
            <h5>School Name : ${sch}</h5>`;

    document.getElementById("details").innerHTML=x;

    if((eng>0)&&(eng<=100)&&(eng!=null)&&(phy>0)&&(phy<=100)&&(phy!=null)&&(maths>0)&&(maths<=100)&&(maths!=null)&&(chem>0)&&(chem<=100)&&(chem!=null)&&(comp>0)&&(comp<=100)&&(comp!=null))
    {
        let y=`<table>

    <tr style=" border:3px solid black; background-color:#0000cd;color:white">
         <th class="tab">Subjects</th>
         <th class="tab">Marks</th>
         <th class="tab">SGPA</th>
         <th class="tab">Pass/Fail</th>
     </tr>
     <tr class="tab">
         <td class="tab" >English</td>
         <td class="tab">${eng}</td>
         <td class="tab">${eng/10}</td>
         <td class="tab">${mark[0]}</td>
     </tr>
     <tr class="tab" style="background-color:#e6e6fa">
         <td class="tab">Physics</td>
         <td class="tab">${phy}</td> 
         <td class="tab">${phy/10}</td>
         <td class="tab">${mark[1]}</td>
     </tr>
     <tr class="tab">
         <td class="tab">Maths</td>
         <td class="tab">${maths}</td>
         <td class="tab">${maths/10}</td>
         <td class="tab">${mark[2]}</td>
     </tr>
     <tr class="tab" style="background-color:#e6e6fa">
         <td class="tab">Chemistry</td>
         <td class="tab">${chem}</td>
         <td class="tab">${chem/10}</td>
         <td class="tab">${mark[3]}</td>
     </tr>
     <tr class="tab">
         <td class="tab">Computer</td>
         <td class="tab">${comp}</td>
         <td class="tab">${comp/10}</td>
         <td class="tab">${mark[4]}</td>
     </tr>
     <tr class="tab" style=" background-color:#0000cd;color:white">
        <td class="tab"></td>
        <td class="tab">Total : ${total}</td>
        <td class="tab">CGPA : ${total/50}</td>
        <td class="tab"></td>
    </tr>
</table>`;
    document.getElementById("tabular").innerHTML=y;
    }
}
    