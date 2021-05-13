// Smooth Scrolling
$('#navbar a, .about-btn').on('click', function(e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
  });


const toggler = $(".toggler")
const card = $(".card-placement");


$('.hamburger-item').on('click', function() {
  toggler.prop("checked", false)
  card.css("display", "block")
});

toggler.on('click', function() {
  card.css("display", "none")
})
