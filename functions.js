/*main page picture functionality */
let clubPicsArr = ["Pictures/clubPicture2022.jpg",
"Pictures/clubPicture2019.jpeg", "Pictures/clubPicture2017.jpeg"];

let clubPicsArrDesc = ["Club Picture of the 2022 Year", "Club Picture of the 2019 Year", "Club Picture of the 2017 year"] ;
let picId=0;
function goprevious(){
    picId+=1;
    picId= picId%(clubPicsArr.length);
    idneededshow = "clubPic";
    idneededtohide = "clubPic";
    if(picId==0){
        idneededtohide += String(clubPicsArr.length);
    }
    else{
        idneededtohide += String(picId);
    }
    idneededshow += String(picId+1);

    document.getElementById(idneededshow).style.opacity="1";
    document.getElementById(idneededtohide).style.opacity="0";
    document.getElementById("descp").innerHTML = clubPicsArrDesc[picId];

}



function goforward(){
    picId-=1;
    picId= picId%clubPicsArr.length;
    if(picId<0){
        picId += clubPicsArr.length
    }

    idneededshow = "clubPic";
    idneededtohide = "clubPic";

    if(picId==clubPicsArr.length-1){
        idneededtohide += String(1);
    }
    else{
        idneededtohide += String(picId+2);
    }

    idneededshow += String(picId+1);


    document.getElementById(idneededshow).style.opacity="1";
    document.getElementById(idneededtohide).style.opacity="0";

    document.getElementById("descp").innerHTML = clubPicsArrDesc[picId];
}

var tally = 1;
function changepimg(){

    if(tally % 2 == 1){
        document.getElementById("presimg").src="Pictures/kevintroll.jpg";
    }
    else{
        document.getElementById("presimg").src="Pictures/kevingrin.jpg";
    }
    tally+=1;
}

var tally1 = 1;
function changevpimg(){

    if(tally1 % 2 == 1){
        document.getElementById("vpimg").src="Pictures/diegotroll.jpg";
    }
    else{
        document.getElementById("vpimg").src="Pictures/diegogrin1.png";
    }
    tally1+=1;
}

var tally2 = 1;
function changedevpic(){

    if(tally2 % 2 == 1){
        document.getElementById("edepic").src="Pictures/edtroll1.jpg";
    }
    else{
        document.getElementById("edepic").src="Pictures/edegrin.jpg";
    }
    tally2+=1;
}