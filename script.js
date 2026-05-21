document.getElementById("memberForm")

.addEventListener("submit",

async function(e){

e.preventDefault();

let uniqueID =
Math.floor(
100 + Math.random()*9900
);

const name =
document.getElementById("name").value;

const father =
document.getElementById("father").value;

const mobile =
document.getElementById("mobile").value;

const aadhaar =
document.getElementById("aadhaar").value;

const voter =
document.getElementById("voter").value;

const address =
document.getElementById("address").value;

const photoFile =
document.getElementById("photo").files[0];

if(!photoFile){

alert("Please Upload Photo");

return;

}

if(photoFile.size > 500000){

alert("Photo size must be below 500KB");

return;

}

const reader = new FileReader();

reader.readAsDataURL(photoFile);

reader.onload = async function(){

const photoBase64 = reader.result;

await db.collection("members")

.add({

name,
father,
mobile,
aadhaar,
voter,
address,

photo: photoBase64,

memberID: uniqueID

});

document.getElementById("result")

.innerHTML = `

<div class="card">

<h2>

Registration Success

</h2>

<h1>

Member ID: ${uniqueID}

</h1>

<div class="flex">

<div>

<img src="roben.jpg"
class="member-photo">

<p>

Roben Oraon

</p>

</div>

<div>

<img src="${photoBase64}"
class="member-photo">

<p>

${name}

</p>

</div>

</div>

<p>

“आपका विश्वास ही हमारी सबसे बड़ी ताकत है।  
आइए मिलकर पंचायत को विकास की नई ऊँचाई तक पहुँचाएँ।”

</p>

</div>

`;

};

});
