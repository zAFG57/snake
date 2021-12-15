

window.onload=function() {
    canv=document.getElementById("gc");
    ctx=canv.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(game,1000/15);
    new Audio('son/jeux.mp3').play();
}
px=py=0;
tc=40;
gs=20;
ax=ay=20;
yv=0;
xv=1;
trail=[];
tail = 5;
vie = 10;

px2=py2=39;
tc2=40;
gs2=20;
yv2=0;
xv2=-1;
trail2=[];
tail2 = 5;
vie2 = 10;
trail3 = [];
tail3 = 0;



function game() {
    px+=xv;
    py+=yv;
    if(px<0) {
        px= tc-1;
    }
    if(px>tc-1) {
        px= 0;
    }
    if(py<0) {
        py= tc-1;
    }
    if(py>tc-1) {
        py= 0;
    }

    px2+=xv2;
    py2+=yv2;
    if(px2<0) {
        px2= tc2-1;
    }
    if(px2>tc2-1) {
        px2= 0;
    }
    if(py2<0) {
        py2= tc2-1;
    }
    if(py2>tc2-1) {
        py2= 0;
    }


    ctx.fillStyle="black";
    ctx.fillRect(0,0,canv.width,canv.height);
 
    ctx.fillStyle="lime";
    for(var i=0;i<trail.length;i++) {
        ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
        if(trail[i].x==px && trail[i].y==py) {
            tail = 5;
            vie = vie-1;
            new Audio('son/dommage.mp3').play();
            document.getElementById('p1').innerHTML = vie;
        }
        if(trail[i].x==px2 && trail[i].y==py2) {
            tail2 = 5;
            vie2 = vie2-1;
            new Audio('son/dommage.mp3').play();
            document.getElementById('p2').innerHTML = vie2;
        }
    }
    trail.push({x:px,y:py});
    while(trail.length>tail) {
    trail.shift();
    }



    ctx.fillStyle="blue";
    for(var i=0;i<trail2.length;i++) {
        ctx.fillRect(trail2[i].x*gs2,trail2[i].y*gs2,gs2-2,gs2-2);
        if(trail2[i].x==px2 && trail2[i].y==py2) {
            tail2 = 5;
            vie2 = vie2-1;
            new Audio('son/dommage.mp3').play();
            document.getElementById('p2').innerHTML = vie2;
        }
        if(trail2[i].x==px && trail2[i].y==py) {
            tail = 5;
            vie = vie-1;
            new Audio('son/dommage.mp3').play();
            document.getElementById('p1').innerHTML = vie;
        }
    }
    trail2.push({x:px2,y:py2});
    while(trail2.length>tail2) {
    trail2.shift();
    }


    if(ax==px2 && ay==py2) {
        tail2++;
        vie2 = vie2+1;
        document.getElementById('p2').innerHTML = vie2;
        new Audio('son/bonus.mp3').play();
        ax=Math.floor(Math.random()*tc);
        ay=Math.floor(Math.random()*tc);
    }
    if(ax==px && ay==py) {
        tail++;
        vie = vie+1;
        document.getElementById('p1').innerHTML = vie;
        new Audio('son/bonus.mp3').play();
        ax=Math.floor(Math.random()*tc);
        ay=Math.floor(Math.random()*tc);
    }
    ctx.fillStyle="red";
    ctx.fillRect(ax*gs,ay*gs,gs-2,gs-2);


    if(vie == 0) {
        document.location.href="blue.html";
    }
    if(vie2 == 0) {
        document.location.href="gre.html";
    }
}
function keyPush(evt) {
    switch(evt.keyCode) {
        case 37:
            xv=-1;yv=0;
            break;
        case 38:
            xv=0;yv=-1;
            break;
        case 39:
            xv=1;yv=0;
            break;
        case 40:
            xv=0;yv=1;
            break;


        case 68:
            xv2=1;yv2=0;
            break;

        case 90:
            xv2=0;yv2=-1;
            break;

        case 81:
            xv2=-1;yv2=0;
            break;

        case 83:
            xv2=0;yv2=1;
            break;
    }
}

