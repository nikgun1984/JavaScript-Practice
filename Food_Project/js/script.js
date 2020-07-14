window.addEventListener('DOMContentLoaded', ()=>{
    // Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent(){
        tabContent.forEach((item)=>{
            item.classList.add('hide');
            item.classList.remove('show','fade');
        });
        tabs.forEach((item)=>{
            item.classList.remove('tabheader__item_active');
        });

    }

    function showTabContent(i = 0){ // ES6 feature if no arguments provided, default value will be 0
        tabContent[i].classList.add('show','fade');
        tabContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event)=>{
        const target = event.target;

        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item,i)=>{
                if(target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })


    //Timer

    const deadLine = '2020-07-20';

    function getTimeRemaining(endTime){
        const t = Date.parse(endTime) - Date.parse(new Date()),
              days = Math.floor(t/(1000*60*60*24)); // days left till discount is over
              hours = Math.floor((t / (1000*60*60))%24),
              minutes = Math.floor((t/(1000*60)%60)),
              seconds = Math.floor((t/(1000)%60));
        return {
            'total': t,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function getZero(num){
        if(num>=0 && num<10){
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector,endTime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
        updateClock();
        function updateClock(){
            const t = getTimeRemaining(endTime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if(t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadLine);
});
