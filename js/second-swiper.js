const second = () =>{

    const swiper = new Swiper(".secondSwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        spaceBetween: 30,
    
        // effect: 'fade',
    
        // effect: "cube",
        // grabCursor: true,
        // cubeEffect: {
        //     shadow: true,
        //     slideShadows: true,
        //     shadowOffset: 20,
        //     shadowScale: 0.94,
        // },
    
        // effect: 'flip',
        // grapCursor: true,
    
        // effect: 'cards',
        // grapCursor: true,
    
    
        // autoplay: {
        //     delay:2500,
        //     diabaleOnInteraction: true,
        // }
    
        // slidesPerView: 3,
    
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },

      });



      const data = [
        {
          name: 'Instagram',
          img: 'https://techcrunch.com/wp-content/uploads/2018/06/Instagram-1-billion-users.png'
        },
        {
          name: 'Users',
          img: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/346Y7E5CWZIAVPJBP7JZGXHLNY.jpg'
        },
        {
          name: 'Numbers of users',
          img: 'https://www.socialfilms.co.uk/wp-content/uploads/2021/01/Number-of-Instagram-users-by-country.jpg'
        },
        {
          name: 'Like',
          img: 'https://www.insiderintelligence.com/static/db5cdd8b87463effaaaf8af59cd7712d/Instagram-in-2022_4x3.png'
        }
      ]
    
    
    
    
    
    
    const output = document.querySelectorAll('.swiper-wrapper')[1]
    
    
     data.forEach(el => {
        const slide =document.createElement('div')
        const text = document.createElement('p')
        const image = document.createElement('img')
    
    
        slide.className= 'swiper-slide'
        text.textContent = el.name
        image.src = el.img
    
        output.append(slide)
        slide.append(text,image)
    
        
    });
    
    



}

second()




 
   
    