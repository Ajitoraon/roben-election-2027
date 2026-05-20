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

await db.collection("members")

.add({

name,
father,
mobile,
aadhaar,
voter,
address,
memberID: uniqueID

});

document.getElementById("result")

.innerHTML = `

<div class="card">

<h2>Registration Success</h2>

<h1>ID: ${uniqueID}</h1>

<div class="flex">

<div>

<img src="roben.jpg"
class="member-photo">

<p>

Roben Oraon

</p>

</div>

<div>

<p>

${name}

</p>

</div>

</div>

<p>

आपका विश्वास ही हमारी सबसे बड़ी ताकत है।

आइए मिलकर पंचायत का विकास करें।

</p>

</div>

`;

});