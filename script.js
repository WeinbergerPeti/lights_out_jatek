$(function()
{
    $("h2").text("Lights out játék!");
    $("footer").html(`<p>&copy; Minden jog fentartva</p>`);
    kirajzol();
    $(".kor").on("click",function(event)
    {
        // console.log(event.target.id);
        console.log($(this).attr("id"));
    });
});

function kirajzol()
{
    let txt=`<div class="tarolo">`;
    for (let i = 0; i < 9; i++) 
    {
        txt+=`<div class="kor" id="${i}"></div>`
    }
    txt+=`</div>`
    $("article").html(txt);
}

// function szinez()
// {



//     // $("id").css("background-color","red");
    
//     console.log("katt");
//     // const tomb=[];
//     // for (let i = 0; i < $(".kor").length; i++) 
//     // {
        
//     //     console.log(i);    
//     // }
//     // tomb+=event.target.id;
//     // console.log(tomb);
// }