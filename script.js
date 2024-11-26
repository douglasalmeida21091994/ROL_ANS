// Ajustando dinamicamente o ano no footer
const footerElement = document.querySelector('footer');
const currentYear = new Date().getFullYear();

footerElement.innerHTML = footerElement.innerHTML.replace(/2024/, currentYear);
