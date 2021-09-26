(function() {
    "use strict";
    // experience and age calculation code
    function getWords() {
        var past = new Date("2017-05-01")
        var curr = new Date()
        var diff = Math.floor(curr.getTime() - past.getTime());
        var day = 1000 * 60 * 60 * 24;
        var days = Math.floor(diff/day);
        function getPlural(number, word) {
            return (number === 1 && word.one) || word.other;
        }
        var monthCount = Math.floor(days/31);
        var months = { one: 'month', other: 'months' },
            years = { one: 'year', other: 'years' },
            m = monthCount % 12,
            y = Math.floor(monthCount / 12),
            result = [];
        y && result.push(y + ' ' + getPlural(y, years));
        m && result.push(m + ' ' + getPlural(m, months));
        return result.join(' and ');
    }
    const myage = new Date().getFullYear() - 1996; 
    document.querySelector("#myage").innerHTML = myage;
    const highlightedItems = document.querySelectorAll(".myexperience");
    highlightedItems.forEach((userItem) => {
        userItem.innerHTML = getWords();
    });
    // contact form handling
    var form = document.getElementById("contact-me");
    
    async function handleSubmit(event) {
      event.preventDefault();
      document.querySelector('.loading').classList.add('d-block');
      document.querySelector('.error-message').classList.remove('d-block');
      document.querySelector('.sent-message').classList.remove('d-block');
      var errorMsg = document.querySelector(".error-message");
      var success = document.querySelector(".sent-message");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        document.querySelector('.loading').classList.remove('d-block');
        document.querySelector('.sent-message').classList.add('d-block');
        success.innerHTML = "Your message has been sent. Thank you!";
        form.reset()
      }).catch(error => {
        document.querySelector('.loading').classList.remove('d-block');
        document.querySelector('.error-message').classList.add('d-block');
        errorMsg.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit);

    const skillsection = document.querySelector("#facts");
    const skilldivheader = document.querySelector(".skill-section-header");
    
    

   if(window.innerWidth <= 620) {
    const marginTop = (skilldivheader.clientHeight * 3.2)
    document.querySelector(".skill-set-block").style.marginTop = `${marginTop}px`;
    skillsection.style.height = `${marginTop * 1.3}px`
   } else {
    const marginTop = (skilldivheader.clientHeight * 5)
    document.querySelector(".skill-set-block").style.marginTop = `${marginTop}px`;
    skillsection.style.height = `${marginTop * 1.2}px`
   }

})()
