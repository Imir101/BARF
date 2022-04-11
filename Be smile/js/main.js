$(function(){

    $(".feedback__form").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			alert("Заявка отправлена!");
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
    
    $('.reviews__inner').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows: '.reviews .slider-arrows',
        prevArrow: '<button class="slick-arrow slick-prev"><svg width="29" height="19" viewBox="0 0 29 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.6912 7.76277L5.64528 7.76277L10.269 3.13905C10.9068 2.50129 10.9068 1.54466 10.269 0.906905C9.63125 0.26915 8.67462 0.26915 8.03687 0.906905L0.702682 8.24109C0.0649265 8.87885 0.0649265 9.83548 0.702682 10.4732L8.03687 17.8074C8.67462 18.4452 9.63125 18.4452 10.269 17.8074C10.9068 17.1697 10.9068 16.213 10.269 15.5753L5.64528 10.9515L26.6912 10.9515C27.4884 10.9515 28.2856 10.3138 28.2856 9.35716C28.2856 8.40053 27.4884 7.76277 26.6912 7.76277Z" fill="#97C3F9"/></svg></button>',
        nextArrow: '<button class="slick-arrow slick-next"><svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.73739 11.2372L24.7833 11.2372L20.1596 15.861C19.5218 16.4987 19.5218 17.4553 20.1596 18.0931C20.7973 18.7308 21.754 18.7308 22.3917 18.0931L29.7259 10.7589C30.3637 10.1212 30.3637 9.16452 29.7259 8.52677L22.3917 1.19258C21.754 0.554828 20.7973 0.554828 20.1596 1.19258C19.5218 1.83034 19.5218 2.78697 20.1596 3.42473L24.7833 8.04845L3.73739 8.04845C2.94019 8.04845 2.143 8.6862 2.143 9.64284C2.143 10.5995 2.94019 11.2372 3.73739 11.2372Z" fill="#97C3F9"/></svg></button>',
        responsive:[
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }   
            }
        ]
    });
    
    sliderInit();
    $(window).on('resize orientationchange', function() {
        sliderInit();
    });

    function sliderInit() {
        if ($(window).innerWidth() <= 1024 && !$('.services__inner').hasClass('slick-initialized')) {
            $('.services__inner').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                appendArrows: '.services .slider-arrows',
                prevArrow: '<button class="slick-arrow slick-prev"><svg width="29" height="19" viewBox="0 0 29 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.6912 7.76277L5.64528 7.76277L10.269 3.13905C10.9068 2.50129 10.9068 1.54466 10.269 0.906905C9.63125 0.26915 8.67462 0.26915 8.03687 0.906905L0.702682 8.24109C0.0649265 8.87885 0.0649265 9.83548 0.702682 10.4732L8.03687 17.8074C8.67462 18.4452 9.63125 18.4452 10.269 17.8074C10.9068 17.1697 10.9068 16.213 10.269 15.5753L5.64528 10.9515L26.6912 10.9515C27.4884 10.9515 28.2856 10.3138 28.2856 9.35716C28.2856 8.40053 27.4884 7.76277 26.6912 7.76277Z" fill="#97C3F9"/></svg></button>',
                nextArrow: '<button class="slick-arrow slick-next"><svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.73739 11.2372L24.7833 11.2372L20.1596 15.861C19.5218 16.4987 19.5218 17.4553 20.1596 18.0931C20.7973 18.7308 21.754 18.7308 22.3917 18.0931L29.7259 10.7589C30.3637 10.1212 30.3637 9.16452 29.7259 8.52677L22.3917 1.19258C21.754 0.554828 20.7973 0.554828 20.1596 1.19258C19.5218 1.83034 19.5218 2.78697 20.1596 3.42473L24.7833 8.04845L3.73739 8.04845C2.94019 8.04845 2.143 8.6862 2.143 9.64284C2.143 10.5995 2.94019 11.2372 3.73739 11.2372Z" fill="#97C3F9"/></svg></button>',
                mobileFirst: true,
                responsive:[
                    {
                        breakpoint: 1024,
                        settings: 'unslick'
                    },
                    {
                        breakpoint: 769,
                        slidesToShow: 2
                    },
                ]
            });
        }
        return;
    }

});
   