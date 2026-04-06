// Topnav scroll shadow
(function(){
  var nav = document.querySelector('.topnav');
  if(nav){
    window.addEventListener('scroll', function(){
      nav.classList.toggle('scrolled', window.scrollY > 8);
    }, {passive:true});
  }

  // Intersection observer — trigger data-anim elements
  if(!window.IntersectionObserver) return;
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, {threshold:0.08, rootMargin:'0px 0px -32px 0px'});

  document.querySelectorAll('[data-anim]').forEach(function(el){
    io.observe(el);
  });
})();
