sendBtn.onclick=()=>{
    const data = {
        name: userName.value,
        email: userEmail.value,
        review: userReview.value,
    }
    sendEmailForm(data);
    alert('Your message was succesfully sent');
}


function sendEmailForm(formData) {
    const form = document.getElementById('form');
    fetch('send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(_ => {
            form.reset()
        })
        .catch(error => console.log(error));
}
