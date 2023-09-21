let data = [12,45,24,75,84,65,32];
// for (i=0;i<data.length; i++)
// {
//     document.write(`array ${i} is ${data[i]}<br/>`)
// }


// let x=4;  /// it means index number 4
// document.write(data[x]);

function getElement(){
    let el = document.getElementById("element").value
    if(el<data.length && typeof parseInt(el)==="number"){

        alert( data[el]+ " "+"value is :" +el)
    }else{
        alert("please enter valid input")
    }
}