window.onload = function(){
    let mitabla = document.getElementById("mitabla");
    if(mitabla != null){
        let tds = mitabla.getElementsByTagName("td");
        for(let i = 0; i < tds.length; i++){
            tds[i].addEventListener("click", function(e){
                editarCelda(e, tds[i]);
            });
        }
    }
}


function editarCelda(e, obj){
    // alert(obj.innerHTML);
    
    let oldVal = obj.innerText;
    // ************* SOLO POR AHORA, ESTAMOS EN PRUEBAS *************
    obj.innerHTML = '<input type="text" id="miInput" value="' + oldVal + '" size="4">';

    let oldEvent = obj.onclick;
    obj.onclick = null;
    
    let newInput = document.getElementById("miInput");
    if(newInput != null){
        newInput.focus();
        newInput.addEventListener("blur", function(){
            let newVal = newInput.value;
            obj.innerHTML = newVal;
            obj.onclick = oldEvent;
        });
    }
}
