var arr =["Rock","Paper","Scissor"];
var start = false;
var click = false;
function randNumGen(last_rand){
    var randNo = Math.random();
    randNo*= 3;
    randNo = Math.floor(randNo);
    if(randNo === last_rand){
        randNo = randNumGen(last_rand);
    }
return randNo;    
}

$("#strt_btn").click(function(){
    
    $("#strt_btn").text("Choose");
    $("#strt_btn").css("border-color","white");

    start = true;
});
var cpu_val,user_val;

function decideWin(comp_val,user_val){//0 = compWins,
    var win = 2;
if(comp_val > user_val){
    if(user_val+1 === comp_val){
        win = 0;
    }
    if(user_val+2 === comp_val){
        win = 1;
    }
}
if(comp_val < user_val){
    if(comp_val+1 === user_val){
        win = 1;
    }
    if(comp_val+2 === user_val){
        win = 0;
    }
}
return win;
}
var last_no = 5;
/////////////////////////////////////////
$(".clk").click(function(){ //when the user chooses value
    if(start === true){
    

    var Rno = randNumGen(last_no);
last_no = Rno;
for(var i=0;i<3;i++){
if(arr[i] === this.id){
    user_val = i;
}
}
cpu_val = Rno;

    $("#box1 h1").text(arr[Rno]);
    $("#box2 h1").text(this.id);

var winner = decideWin(cpu_val,user_val);
console.log(" "+cpu_val+" "+user_val);
if(winner === 0){
    $("#title").text("YOU Lose");}

else if(winner === 1){
        $("#title").text("YOU Win");}

 else if(winner===2){
            $("#title").text("It's a Draw.");}

    }
    
});

//////////////////////////////////////////////////
// if(click === true){
//     var Rno = randNumGen();
//     $("#box1").h1(arr[Rno]);
//     click = false;
// }
