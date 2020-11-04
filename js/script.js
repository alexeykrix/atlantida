$('.btn-for-scroll').on('click', function (e) {
  e.preventDefault();
  
 
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500, 'linear');
});




DG.then(function() {
                var map,
                    myIcon,
                    myDivIcon;

                map = DG.map('map', {
                    center: [50.461363, 30.482036],
                    zoom: 13,
                    minZoom: 9,
                    dragging : false,
                    touchZoom: false,
                    scrollWheelZoom: false,
                    boxZoom: false,
                    geoclicker: false,
                    fullscreenControl: false
                });

                myIcon = DG.icon({
                    iconUrl: 'img/location-marker.png',
                    iconSize: [67, 72]
                });
                DG.marker([50.461363, 30.482036], {
                    icon: myIcon
                }).addTo(map);
            });



$('.slick-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: false
});   


document.addEventListener('click', ((e)=>{
  if (e.target.id === 'website' || e.target.id === 'logos') {
    e.preventDefault();
    document.querySelectorAll('.portfolio__btn').forEach(btn => {
      btn.classList.remove('active');
    });
    e.target.classList.add('active');
    document.querySelector('.all-photo-container').innerHTML = `
      <div class="photo-container">
        <img src="img/website_1.jpg" alt="work" class="item">
        <img src="img/website_2.jpg" alt="work" class="item">
        <img src="img/website_4.jpg" alt="work" class="item">
        <img src="img/website_5.jpg" alt="work" class="item">
      </div> 

      <div class="photo-container">
        <img src="img/website_6.jpg" alt="work" class="item">
        <img src="img/website_3.jpg" alt="work" class="item">
        <img src="img/website_7.jpg" alt="work" class="item">
        <img src="img/website_8.jpg" alt="work" class="item">
      </div>
    `;
    
  }
  if (e.target.id === 'all' || e.target.id === 'broshures') {
    e.preventDefault();
    document.querySelectorAll('.portfolio__btn').forEach(btn => {
      btn.classList.remove('active');
    });
    e.target.classList.add('active');
    document.querySelector('.all-photo-container').innerHTML = `
      <div class="photo-container">
        <img src="img/work_1.jpg" alt="work" class="item">
        <img src="img/work_2.jpg" alt="work" class="item">
        <img src="img/work_3.jpg" alt="work" class="item">
        <img src="img/work_4.jpg" alt="work" class="item">
      </div> 

      <div class="photo-container">
        <img src="img/work_5.jpg" alt="work" class="item">
        <img src="img/work_6.jpg" alt="work" class="item">
        <img src="img/work_7.jpg" alt="work" class="item">
        <img src="img/work_8.jpg" alt="work" class="item">
      </div>
    `;
    
  }
}));


