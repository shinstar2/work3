$(function(){

    // $('.teams').mouseenter(function(e){
    //     e.preventDefault();
    //     $('.group-all').show(500);


    //     })
        
        
    // })


    // $('.teams').click(function(e){
    //     e.preventDefault();
    //     $('.group-all').toggleClass('on')
        
        
    // })

    const visualSlide = new Swiper(".visual-slide", {
        scrollbar: {
        },
        slidesPerView:1,
        pagination:{
            el:'.pagination'
        }
      });


    const peopleSlide = new Swiper(".people-slide", {
        scrollbar: {
        },
        slidesPerView:1.4,
        spaceBetween:5,
        pagination:{
            el:'.pagination'
        }
      });


    const benefitSlide = new Swiper(".benefit-slide .swiper", {
        scrollbar: {
        
        },
        slidesPerView:3,
        spaceBetween:20,
    });


    //   footer 관련사이트 //
      $('.footer .relate').click(function(e){
        e.preventDefault();
        $('.relate-list').toggleClass('on')
       
        })

      $('.footer .site').click(function(e){
        e.preventDefault();
        $('.relate-list').removeClass('on')
       
        })
  
           /**헤더 teams gnb호버 */
           $('.teams').hover(function(e){
            e.preventDefault();
  
            $('.group-all').stop().slideDown()
          },function(){
              $('.group-all').stop().slideUp()
          })
    
          
        /**헤더 kr 언어호버 */
        $('.kr').click(function(e){
            e.preventDefault();

            $(this).toggleClass('on')
            // $(this).siblings().show()
            $(this).siblings().toggleClass('on')
        

        
            /**서치박스 */
            // $('.select-box').click(function(e){
            //     e.preventDefault();
                
            //     $('.group-company').addClass('on')



                // $(this).toggleClass('on')
                // // $(this).siblings().show()
                // $(this).siblings().toggleClass('on')
            
    

        })
    

  /**헤더 kr 언어호버 */
//   $('.kr').hover(function(e){
//     e.preventDefault();

//     $('.en').stop().slideDown()
//   },function(){
//       $('.en').stop().slideUp()
//   })












})//지우지말기