/*Fill your code */
var layers_list = [];
var total_bill = 0;
stack=0

function layer(cost,a)
{
    
        if(stack<=4)
        {
            layers_list.push(a.innerText);
            total_bill+=Number(cost);
            stack+=1;
            var bill = document.createElement("p");
            bill.className="list2";
            bill.id = "selected-"+ a.innerText;
            bill.innerHTML= a.innerText + " ---- " + cost;
            document.querySelector("#selected").appendChild(bill);
            //document.getElementById(a.innerText).style.backgroundColor = "rgba(241, 241, 241, 1)";

            var lay= document.createElement("col");
            lay.id = "layer"+ String(layers_list.length);
            if (a.innerText==='Chocolate')
            {
                lay.style.backgroundColor= "brown";
            }
            else if(a.innerText==='Strawberry')
            {
                lay.style.backgroundColor= "pink";
            }
            else if(a.innerText=== 'Butterscotch')
            {
                lay.style.backgroundColor="yellow";
            }
            else if(a.innerText==="Vanilla")
            {
                lay.style.backgroundColor="#f0e3c0";
            }
            else if(a.innerText=== "Red Velvet")
            {
                lay.style.backgroundColor= "red";
            }

            document.querySelector("#stack").appendChild(lay);

        }
}
    

function buy()
{
   if (total_bill===0)
   {
       alert("Add items to checkout");
   }
    //document.getElementById("candles").style.visibility= "visible";
    else
    {
        var total= document.createElement("h1");
        total.innerText= "Total ----- "+String(total_bill);
        document.querySelector("#selected").appendChild(total);
        var img= document.createElement("img");
        img.src = "assets/candle.png";
        img.id = "candles";
        document.querySelector("#stack").appendChild(img);
    }
    
}
