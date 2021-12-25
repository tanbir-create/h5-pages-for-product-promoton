// let sections = document.querySelectorAll('section');
if(localStorage.getItem('redirected')){
    localStorage.removeItem('redirected')
}

else if(localStorage.getItem('h5-watched')){
    window.location.assign('share-page.html')
}



let videoSection = document.querySelector('#video')
//keep a count of the pages scrolled to show a new page
let count = 1;


                                                            //  ***********  CHANGED ****************
function pauseSwipe(section){
    section.addEventListener('swiped-up', changePage) ;
}

   

function changePage() {
    console.log(count)
    if(count === 9 ){
        localStorage.setItem('h5-watched', 'true');
            document.querySelector('video').pause();
    }
    if(count>=sections.length) return;

    sections[count-1].style.display = 'none';  // element that was swiped
    if(sections[count].id === 'section12'){
        sections[count].style.display = 'flex'; //last element 
        return;
    }
    let delayArray = [1500, 4300, 1500, 3300, 4500, 3000, 3000, 3000, 1000, 0]
    sections[count].style.display = 'block'; 
 
    if(count === 2 || count === 4 || count === 5 || count === 7 ){
        colour = 'black';

    }else{
        colour = 'white'
    }
    let a = count;

        let t = setTimeout(() => {
            let button = document.createElement('button');
            $(button).addClass('sectionButton')
            button.innerHTML = `
                            <p class="arrow segunda next"><svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.319549 13.2672C-0.0851618 13.643 -0.108596 14.2757 0.267206 14.6805C0.643009 15.0852 1.27574 15.1086 1.68045 14.7328L0.319549 13.2672ZM15 1L15.6805 0.267206C15.2968 -0.0890689 14.7032 -0.0890689 14.3195 0.267206L15 1ZM28.3195 14.7328C28.7243 15.1086 29.357 15.0852 29.7328 14.6805C30.1086 14.2757 30.0852 13.643 29.6805 13.2672L28.3195 14.7328ZM1.68045 14.7328L15.6805 1.73279L14.3195 0.267206L0.319549 13.2672L1.68045 14.7328ZM14.3195 1.73279L28.3195 14.7328L29.6805 13.2672L15.6805 0.267206L14.3195 1.73279Z" fill="${colour}"/>
                                </svg>
                            </p>
                            <p class="arrow primera next "><svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.319549 13.2672C-0.0851618 13.643 -0.108596 14.2757 0.267206 14.6805C0.643009 15.0852 1.27574 15.1086 1.68045 14.7328L0.319549 13.2672ZM15 1L15.6805 0.267206C15.2968 -0.0890689 14.7032 -0.0890689 14.3195 0.267206L15 1ZM28.3195 14.7328C28.7243 15.1086 29.357 15.0852 29.7328 14.6805C30.1086 14.2757 30.0852 13.643 29.6805 13.2672L28.3195 14.7328ZM1.68045 14.7328L15.6805 1.73279L14.3195 0.267206L0.319549 13.2672L1.68045 14.7328ZM14.3195 1.73279L28.3195 14.7328L29.6805 13.2672L15.6805 0.267206L14.3195 1.73279Z" fill="${colour}"/>
                                </svg>
                            </p>
                        `
            sections[a].appendChild(button)
            pauseSwipe(sections[a])
            $('.sectionButton').click(changePage);
            
        }, delayArray[a]);
  
        count++;
  };


                                                // ********   ADDED NEW ***************

  $("img").attr("loading","lazy");


  $('#next-btn').click(function(){
        this.innerHTML = `<i class="fa fa-circle-o-notch fa-spin">`;
        window.location.assign('share-page.html')

  })
