var count=1;

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

    for(var i=0;i<items;i++){
        box.innerHTML+=`<h4>
        <input type="checkbox" onclick="check(id${i},label${i})" id="id${i}">
        <label for="id${i}" id="label${i}">${arr[i]}</label>    
        </h4>`
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