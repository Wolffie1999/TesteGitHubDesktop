function gerarTabu(){
    let num = Number(document.getElementById("txtnum").value)
    let tab = document.getElementById("resultado")

    if(num == 0){
        alert("Por favor, digite um número!!!")
    } else{
        tab.innerHTML = ''//Limpar o que estiver no corpo 
    

    let contadora = 1

    while(contadora<=100){

        let item = document.createElement("p")
        item.innerHTML = `${num} x ${contadora} = ${num*contadora} <br>`
    

        item.value = `tab${contadora}`  
        tab.appendChild(item)
        contadora++
    }
          }
}