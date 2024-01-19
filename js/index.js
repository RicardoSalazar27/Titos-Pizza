addEventListener('scroll', function() {
  let header = document.getElementById('header');
  let innerheader = document.getElementById('innerheader');
  let nav = document.getElementById('nav').children;
  let logotext = document.getElementById('logotext');
  let line1 = document.getElementsByClassName('line1');
  let line2 = document.getElementsByClassName('line2');
  let line3 = document.getElementsByClassName('line3');

  if (document.documentElement.scrollTop > 199) {
    header.style.backgroundColor = 'rgba(14,53,120,1)'
    header.style.height = '80px'
    header.style.boxShadow = '0px 0px 10px .5px #000000'
    innerheader.style.backgroundColor = 'rgba((14,53,120,1))'
    for (var i = 0; i < nav.length; i++) {
      nav[i].style.color = '#FFFFFF'
    }
    logotext.style.color = '#FFFFFF'
    line1[0].style.backgroundColor = '#FFFFFF'
    line2[0].style.backgroundColor = '#FFFFFF'
    line3[0].style.backgroundColor = '#FFFFFF'

  } else {
    header.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    header.style.height = '100px'
    header.style.boxShadow = 'none'
    innerheader.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    for (var i = 0; i < nav.length; i++) {
      nav[i].style.color = '#000000'
    }
    logotext.style.color = '#000000'
    line1[0].style.backgroundColor = '#000000'
    line2[0].style.backgroundColor = '#000000'
    line3[0].style.backgroundColor = '#000000'
  }
});

function transform(x) {
  x.classList.toggle("change")
}

