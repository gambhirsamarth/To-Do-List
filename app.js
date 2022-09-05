var count=1;
var j  =0;

function add(){
    var boxd=document.getElementById("box-div");
    var box=document.createElement("div");   
    box.className="box";
    box.id=count;
    var heading= String(prompt("ENTER THE HEADING"));
    var items=Number(prompt("ENTER NUMBER OF ITEMS (ONLY NUMBER)"))
    var arr=new Array();
       
    for(var i=0;i<items;i++){
        arr[i]=prompt("ENTER "+(i+1)+" ELEMENT");
    }
        
    box.innerHTML+=`<h2>${heading}</h2>`;
    box.innerHTML+=`<btn class="del-btn" onclick="del(${box.id})"><i class="fa-solid fa-trash"></i></btn>`
    box.innerHTML+=`<button class="add" onclick="additem(${box.id})">+</button>`

    for(var i=0;i<items;i++){
        box.innerHTML+=`<h4>
        <input type="checkbox" onclick="check(id${j},label${j})" id="id${j}">
        <label for="id${j}" id="label${j}">${arr[i]}</label>    
        </h4>`

        j++;
    }
    boxd.appendChild(box);
    count++;
}


function check(idd,labell){

    
        var checkb=idd;
        var label=labell;
        
        if(checkb.checked==true){
            label.style.textDecorationLine="line-through";
            label.style.color="#C2C2C2";
        }
        
        else{
            label.style.textDecorationLine="none";
            label.style.color="black";
        }
}

function del(b_id)
{
    const b=document.getElementById(b_id);
    b.remove();
}

function additem(boxid){
    box=document.getElementById(boxid);
    var inp = prompt("ENTER ELEMENT: ");
    box.innerHTML+=
    `<h4> 
    <input type="checkbox" onclick="check(id${j},label${j})" id="id${j}">
    <label for="id${j}" id="label${j}">${inp}</label>  
    </h4>`
     j++;
}
