
function mail(){
    var templateParams = {
      patient:document.getElementById('name').value,
      receiver:document.getElementById('email').value,
      age:document.getElementById('age').value,
      date:document.getElementById('date').value,
      time:document.getElementById('time').value,
      mobile:document.getElementById('mobile').value,

    };
    
    if (document.getElementById('name').value=='' || document.getElementById('email').value=='' || document.getElementById('age').value=='' || document.getElementById('date').value=='' || document.getElementById('time').value=='' || document.getElementById('mobile').value)
    {
        const form = document.getElementById('form1');
        const element = document.createElement('p');
        element.className="message";
        form.appendChild(element);
        document.querySelector('.message').innerHTML='Fill all details';
    }
    else{emailjs.send('service_hqtx5vb', 'template_d2s65ep', templateParams).then(
        (response) => {
          const form = document.getElementById('form1');
          const element = document.createElement('p');
          element.className="message";
          form.appendChild(element);
          document.querySelector('.message').innerHTML='Appointment Booked Successfully, check your email for details';
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          const form = document.getElementById('form1');
          const element = document.createElement('p');
          element.className="message";
          form.appendChild(element);
          document.querySelector('.message').innerHTML='Invalid mail';
          document.querySelector('.message').style.color='red'
          console.log('FAILED...', error);
        },
      );
      
    }}


    

function fun(){

}
  