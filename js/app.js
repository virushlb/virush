
function sendRequestWA(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const service = document.getElementById('service').value;
  const budget = document.getElementById('budget').value;
  const msg = document.getElementById('message').value.trim();
  const base = 'https://wa.me/96181524632';
  const text = `Hi Virush! I'd like to request a project.\nName: ${name}\nEmail: ${email}\nService: ${service}\nBudget: ${budget}\nMessage: ${msg}\nPayment: WishMoney 81 524 632`;
  const url = base + '?text=' + encodeURIComponent(text);
  window.open(url, '_blank');
  return false;
}
