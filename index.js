document.querySelectorAll('[data-toggle-sidebar]').forEach(toggle => {
  toggle.addEventListener('click', e => {
    const sidebarID = toggle.dataset.toggleSidebar;
    const sidebarElement = sidebarID ? document.getElementById(sidebarID) : undefined;
    if (sidebarElement) {
       let sidebarState = sidebarElement.getAttribute('aria-hidden');
       sidebarElement.setAttribute('aria-hidden', sidebarState == 'true' ? false : true); 
    }
  });
});

document.querySelectorAll('[data-toggle-card]').forEach(toggle => {
  toggle.addEventListener('click', e => {
    const cardID = toggle.dataset.toggleCard;
    const cardElement = cardID ? document.getElementById(cardID) : undefined;
    if (cardElement) {
       let card = cardElement.getAttribute('aria-hidden');
       cardElement.setAttribute('aria-hidden', card == 'true' ? false : true); 
    }
  });
});

// function cardClick(element) {
//   testElement = element.getAttribute('test')
//   if (testElement == "true") {
//     element.setAttribute('test') = "false";
//   } else {
//     element.setAttribute('test') = "true";
//   }
// }