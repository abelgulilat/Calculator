
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


let aa = new Array();
let bb = new Array();


let display=(z)=>{
    b.value += z;
    if(z <= 1000000)
        aa.push(z);
    else
    
        bb.push(z);
        

}

let clears =()=>{
    b.value = " ";
    aa.pop();
    
}

let compute =()=>{
    // b.value = eval(b.value);
    
    let wi = bb.length;
    let neg = false;
    for(let i = 0; i <= wi; i++)
        {   
            let tempo = bb.pop();
            

            if( tempo == "+")
                {
                    let res = add(aa.pop(),aa.pop());
                    aa.push(res);
                }
            else if( tempo == "-")
                {
                    
                    
                    res = sub(aa.pop(),aa.pop());
                    aa.push(res);

                    // console.log("abwl", sub(aa.pop(),aa.pop()));
                }
            else if( tempo == "*")
                {
                    console.log("abwl", pro(aa.pop(),aa.pop()));
                }
            else if( tempo == "/")
                {
                    console.log("abwl", di(aa.pop(),aa.pop()));
                }

        }
        let reserve = aa.pop();
        // console.log(reserve);
        aa.push(reserve);
        b.value = reserve;
}



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




let add=( num1,num2)=>{
        return parseInt(num1) + parseInt(num2) ;
}
let sub=(num1,num2)=>{
        return parseInt(num1) - parseInt(num2) ;
}
// let pro=(let aa,let bb)=>{
//         return this.aa * this.bb ;
// }
// let di=(let aa,let bb)=>{
//     if(this.bb!=0)
//         return this.aa / this.bb ;
//     else
//         return "Undefined" ;
// }

    




