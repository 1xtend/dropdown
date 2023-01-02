let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

const body = document.querySelector('body');

if (isMobile.any()) {
  body.classList.add('touch');
  const arrow = document.querySelectorAll('.arrow');

  for (let i = 0; i < arrow.length; i++) {
    const subDropdownList = arrow[i].nextElementSibling;
    const currentArrow = arrow[i];
    const dropdownLink = arrow[i].previousElementSibling;

    dropdownLink.classList.add('link-margin');

    arrow[i].addEventListener('click', (e) => {
      subDropdownList.classList.toggle('open');
      currentArrow.classList.toggle('active');
    });
  }
} else {
  body.classList.add('mouse');
}
