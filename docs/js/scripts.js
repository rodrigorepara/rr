jQuery(function ($){
 
    //countdown
    const months = [
        "January",
        "February",
        "March",
        "April", 
        "May", 
        "June", 
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December"
    ]
    
    const weekdays = [
        "Sunday",
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday",
    ]
    
    const countdownBox = document.querySelector('.countdown');
    const dateItems = document.querySelectorAll('.box .num');

    let futureDate = new Date(2022,8,24,2,12);
    const year = futureDate.getFullYear();
    const hours = futureDate.getHours();
    const date = futureDate.getDate();
    let month = futureDate.getMonth();
    month = months[month];
    const weekday = weekdays[futureDate.getDay()];
    
    //future fech in milisegundos
    
    const futureTime = futureDate.getTime();

    function timeRemaining() {
        const today = new Date().getTime();
        const t = futureTime - today;
        
        
        //valor en milisegundos
        
        const oneDay = 24 * 60 * 60 * 1000;
        const oneHour = 60  * 60 * 1000;
        const oneMinute = 60 * 1000;
        
        //calcukar calculating the values | calcular valores
        
        let days = t / oneDay;
        days = Math.floor(days);
        let hours = Math.floor((t % oneDay) / oneHour);
        let minutes = Math.floor((t % oneHour) / oneMinute);
        let seconds = Math.floor((t % oneMinute) / 1000);
        
        
        //matriz de valores
        const values = [days, hours, minutes, seconds];
        function addZero(item){
            if(item < 10){
                return item = `0${item}`
            }
            return item
        }
        
        dateItems.forEach(function(item, index){
            item.innerHTML = addZero(values[index]);
        });
        if(t < 0){
            clearInterval(countdown);
        }
        
                
    }
    
    let countdown = setInterval(timeRemaining, 1000);

    timeRemaining ();
    
    
    
    
    
});