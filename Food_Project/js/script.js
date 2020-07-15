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

    //Modal Window

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]');
    
    modalTrigger.forEach(btn => {
        btn.addEventListener('click',()=>{
            
        });
    });

    function closeModal(){
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    function openModal(){
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';// prevents from scrolling while using modal
        clearInterval(modalTimerId);
    }

    modalCloseBtn.addEventListener('click',closeModal);

    modal.addEventListener('click',(e)=>{
        if(e.target === modal){
            closeModal();
        }
    });
    //press 'escape' to leave the modal window 
    document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape' && modal.classList.contains('show')){
            closeModal();
        }
    });
    //modal will be open automatically after 3 second if it was not open yet otherwise it wont be open
    const modalTimerId = setTimeout(openModal, 5000);
    
    //once you reach the end of the page you will get modal open
    //but it will be open once
    function showModalByScroll(){
        if(window.pageYOffset +document.documentElement.clientHeight >=document.documentElement.scrollHeight){
            openModal();
            //will be only open once and then wont bother u again
            window.removeEventListener('scroll',showModalByScroll);
        }
    }
    
    window.addEventListener('scroll', showModalByScroll);
});
