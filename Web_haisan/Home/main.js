$(function(){
    //thoi gian tu dong chuyen slide
    thoigian =setInterval(function(){
        //goi ham click nut next
        $('.next').trigger('click');
    },4000)

    //viet cho nut next 
    $('.next').click(function(event){    
        //khi click vao nut huy thoi gian tu dong
       // clearInterval(thoigian);   
        var Sau = $('.active').next();
        // xu ly cho nut
        var vitri = $('.xanh').index()+1;
        //xoa tat ca nut co class mau xanh
        $('.nutslide ul li').removeClass('xanh');
        //kiem tra thang cuoi 
        if(vitri == $('.nutslide ul li').length){
            vitri=0;
        }
        //nut duoc click mau xanh
        $('.nutslide ul li:nth-child('+(vitri+1)+')').addClass('xanh');


        //xu ly slide
        if (Sau.length == 0) // cuoi cung
        {
             //code cho phan dau
            $('.active').addClass('BienMatBenTrai').one('webkitAnimationEnd',function(event){
                $('.BienMatBenTrai').removeClass('BienMatBenTrai');
                $('.active').removeClass('active');   
                $('.anhslide .Slide1:first-child').addClass('DiVaoBenPhai').one('webkitAnimationEnd',function(event){      
                // thang tiep theo se duoc class active
                $('.DiVaoBenPhai').addClass('active').removeClass('DiVaoBenPhai');
                });
            }); 
        }
        else{
             //code cho phan dau
            $('.active').addClass('BienMatBenTrai').one('webkitAnimationEnd',function(event){
             $('.BienMatBenTrai').removeClass('BienMatBenTrai');
             //bo class active
             $('.active').removeClass('active');
            });
            Sau.addClass('DiVaoBenPhai').one('webkitAnimationEnd',function(event){
             // thang tiep theo se duoc class active
             $('.DiVaoBenPhai').addClass('active').removeClass('DiVaoBenPhai');
            });
        }
    });//end nut next
    $('.prev').click(function(event){  
         //khi click vao nut huy thoi gian tu dong
         clearInterval(thoigian);   
        var Truoc = $('.active').prev();
          // xu ly cho nut
          var vitri = $('.xanh').index()+1;
          //xoa tat ca nut co class mau xanh
          $('.nutslide ul li').removeClass('xanh');
          //kiem tra thang cuoi 
          if(vitri == 1){
              vitri=$('.nutslide ul li').length+1;
          }
          //nut duoc click mau xanh
          $('.nutslide ul li:nth-child('+(vitri-1)+')').addClass('xanh');
  
        //xu ly cho slide
        if(Truoc.length ==1){
             //code cho phan dau
        $('.active').addClass('BienMatBenPhai').one('webkitAnimationEnd',function(event){
            $('.BienMatBenPhai').removeClass('BienMatBenPhai');
               //bo class active
               $('.active').removeClass('active');  
               Truoc.addClass('DiVaoBenTrai').one('webkitAnimationEnd',function(event){      
                // thang tiep theo se duoc class active
                $('.DiVaoBenTrai').addClass('active').removeClass('DiVaoBenTrai');
               });
            });      
        }
        else
       {
        $('.active').addClass('BienMatBenPhai').one('webkitAnimationEnd',function(event){
            $('.BienMatBenPhai').removeClass('BienMatBenPhai');
            //bo class active
            $('.active').removeClass('active');
            $('.anhslide .Slide1:last-child').addClass('DiVaoBenTrai').one('webkitAnimationEnd',function(event){
                // thang tiep theo se duoc class active
                $('.DiVaoBenTrai').addClass('active').removeClass('DiVaoBenTrai');
            });
        });       
       }
    });//end nut prev
});

