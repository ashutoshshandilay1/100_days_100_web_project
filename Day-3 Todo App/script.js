const inputbox = document.getElementById('inputbox');
const taskadd = document.getElementById('taskadd');

function addingtask(){
    
    if(inputbox.value === ""){
        alert("Please enter a task");
    }else{

        const task = document.createElement("li");
        task.innerHTML = inputbox.value;
        taskadd.appendChild(task);

//Complete Button
        const Complete = document.createElement("button");
        Complete.innerHTML = "Complete";
        
//logic for complete button

        Complete.addEventListener('click', function() {
            Complete.innerHTML = "Completed Successfully";
            Complete.style.backgroundColor= "green";

        });

 // For delete button
        const Delete = document.createElement("button");
        Delete.innerHTML = "Delete";
        Delete.style.backgroundColor= "red";
        
    //Logic for delete button

        Delete.addEventListener('click', function() {
       
            task.remove();


        })
        task.appendChild(Complete);
        task.appendChild(Delete);
        inputbox.value = "";



    }

}

// I HOPE U LIKE IT