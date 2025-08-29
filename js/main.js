var ul=document.getElementById("item")
     var input=document.getElementById("input")
    function add(){
        var listitem=document.createElement("li")
        listitem.innerHTML=input.value + "<button onclick='deleteit(event)'>Delete</button>"
            ul.append(listitem)
    }
    function deleteit(event){
         event.target.parentElement.remove()
    }