


const submit = document.querySelector('.submit-button');


let count = 0;





function goodName(value) {
    if (value === "") {
        document.querySelector('.name-error').style.display = "block";
    } else {
        document.querySelector('.name-error').style.display = "none";
        count = 1;
    }
}


function goodMail(value) {
    if (value.includes("@") && value.includes(".com")) {
        document.querySelector('.mail-error').style.display = "none";
        count = 2;
    } else {
        document.querySelector('.mail-error').style.display = "block";
    }
}




function goodSubject(value) {
    if (value === "") {
        document.querySelector('.subject-error').style.display = "block";
    } else {
        document.querySelector('.subject-error').style.display = "none";
        count = 3;
    }
}


function goodMessage(value) {
    if (value.length < 10) {
       document.querySelector('.message-error').style.display = "block";  
    } else {
        document.querySelector('.message-error').style.display = "none";
        count += 1;
    }
} 


submit.addEventListener('click', (event) => {
    

    event.preventDefault();

    goodName(document.querySelector('.name-class').value);
    goodMail(document.querySelector('.mail-class').value);
    goodSubject(document.querySelector('.subject-class').value);
    goodMessage(document.querySelector('.message-class').value);

    if (count === 4) {
        console.log(count);
        document.querySelector('.js-success-message').style.display = "block";
    }
    
 }
)