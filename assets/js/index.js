
let a = document.getElementById("form");
let b = document.getElementById("answer");


let c = document.getElementById("one");
let d = document.getElementById("two");
let e = document.getElementById("three");
let f = document.getElementById("four");
let g = document.getElementById("five");
let h = document.getElementById("six");
let i = document.getElementById("seven");
let j = document.getElementById("eight");
let k = document.getElementById("nine");
let l = document.getElementById("plus");
let m = document.getElementById("mins");
let n = document.getElementById("divide");
let o = document.getElementById("product");
let p = document.getElementById("equal");
let q = document.getElementById("dot");
let r = document.getElementById("cancel");
let s = document.getElementById("module");
let t = document.getElementById("left");
let u = document.getElementById("right");
let v = document.getElementsByName("allpad");
let w = document.getElementsByClassName("pad");
let x = document.getElementById("h11");
let y = document.getElementById("zero");

// =====================================================================================================================


let aa = new Array();
let bb = new Array();
let temp = 0;

let display=(z)=>{
    b.value += z;
    if(z<1000000){
        temp += z;

    }
    else{
    aa.push(temp);
    aa.push(z);
    temp = 0;

    }

}

let clears =()=>{
    b.value = " ";
    aa.pop();
    
}


const add=(num1,num2)=>{
    return parseInt(num1) + parseInt(num2) ;
}
const sub=(num1,num2)=>{
    return parseInt(num1) - parseInt(num2) ;
}



let compute =()=>{
    aa.push(temp);
    temp = 0;


    let isFinshed = false;
    let i = 0; 
    while(i<aa.length && !isFinshed)
        {

            if(i==aa.length-1){
                isFinshed = true;
            }

            if(aa[i]=="/")
                {
                    let result = aa[i-1]/aa[i+1];
                    aa.splice(i-1,3,result);
                    i = 0;  
                    // i=i-1;

                }
            
                i++;
        }
    i=0;
    isFinshed = false;    
    while(i<aa.length && !isFinshed){

        if(i==aa.length-1){
            isFinshed = true;
        }

        if(aa[i]=="*")
            {
                let result = aa[i-1]*aa[i+1];
                aa.splice(i-1,3,result);
                i = 0;

            }
            i++;
        
    }

    i=0;

    isFinshed = false;    
    while(i<aa.length && !isFinshed){

        if(i==aa.length-1){
            isFinshed = true;
        }

        if(aa[i]=="+")
            {
                let result = parseFloat( aa[i-1])+parseFloat( aa[i+1]);
                aa.splice(i-1,3,result);
                i = 0;

            }
            i++;
        
    }

    i=0;

    isFinshed = false;    

    while(i<aa.length && !isFinshed){

        if(i == aa.length-1){
            isFinshed = true;
        }

        if(aa[i]=="-")
            {
                let result = aa[i-1]-aa[i+1];
                aa.splice(i-1,3,result);
                i = 0;

            }
        i++;
    }
    b.value = aa[0];

    
}


// =====================================================================================================================


function ch1k(){k.style.background = "violet";}
function ch2k(){k.style.background = "";}
function ch1l(){l.style.background = "violet";}
function ch2l(){l.style.background = "";}
function ch1c(){c.style.background = "violet";}
function ch2c(){c.style.background = "";}
function ch1d(){d.style.background = "violet";}
function ch2d(){d.style.background = "";}
function ch1e(){e.style.background = "violet";}
function ch2e(){e.style.background = "";}
function ch1f(){f.style.background = "violet";}
function ch2f(){f.style.background = "";}
function ch1g(){g.style.background = "violet";}
function ch2g(){g.style.background = "";}
function ch1h(){h.style.background = "violet";}
function ch2h(){h.style.background = "";}
function ch1i(){i.style.background = "violet";}
function ch2i(){i.style.background = "";}
function ch1j(){j.style.background = "violet";}
function ch2j(){j.style.background = "";}
function ch1left(){t.style.background = "violet";}
function ch2left(){t.style.background = "";}
function ch1right(){u.style.background = "violet";}
function ch2right(){u.style.background = "";}
function ch1module(){s.style.background = "violet";}
function ch2module(){s.style.background = "";}
function ch1ac(){r.style.background = "violet";}
function ch2ac(){r.style.background = "";}
function ch1divid(){n.style.background = "violet";}
function ch2divid(){n.style.background = "";}
function ch1product(){o.style.background = "violet";}
function ch2product(){o.style.background = "";}
function ch1minus(){m.style.background = "violet";}
function ch2minus(){m.style.background = "";}
function ch1plus(){l.style.background = "violet";}
function ch2plus(){l.style.background = "";}
function ch1dot(){q.style.background = "violet";}
function ch2dot(){q.style.background = "";}
function ch1zero(){y.style.background = "violet";}
function ch2zero(){y.style.background = "";}
function ch1equal(){p.style.background = "purple";p.style.color = "black"}
function ch2equal(){p.style.background = "";}


// =====================================================================================================================





