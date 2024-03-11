//console.log(`hello!`);
//window.alert(`Ask for permission`);
//document.write(`i can do whatever i want `);
//document.getElementById("pyana").textContent= `this is pyana once again`;
//document.getElementById("myp").textContent = `And i really like pizza`;

//let name = prompt("votre nom: ");
//let age= prompt(" votre age: ");
//let phone= prompt(" votre numero de telephone: ");


    //document.getElementById("p1").textContent = `nom: ${name}`;
    //document.getElementById("p2").textContent = `age: ${age}`;
    //document.getElementById("p3").textContent = `numero de telephone: ${phone}`;


//document.write(`salut ${name} ! votre age est  ${age} ans`);
//console.log(typeof name);
//document.write(`you are ${age} years old now`);


//document.write(typeof age);


//let online= true;
//document.write(online);


let username;
document.getElementById("submit").onclick = function(){
     username = document.getElementById("text").value;
     document.write(`your name is ${username}`);
}