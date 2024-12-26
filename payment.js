const price = localStorage.getItem('discounted_price');
document.getElementById('price').textContent = 'total: ' + price + '$';
document.getElementById('payment-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const number = document.getElementById('number').value.trim();
  const cvv = document.getElementById('cvv').value.trim();
  const expiration = document.getElementById('expiry').value.trim();

  let isValid = true;

  const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
  if (!nameRegex.test(name)) {
    isValid = false;
    alert('Please enter a valid full name.');
  }
  const numberRegex = /^[0-9]{16}$/;
  if (!numberRegex.test(number)) {
    isValid = false;
    alert('Please enter a valid 16 digit credit card number.');
  }
  const expirationRegex = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
  if (!expirationRegex.test(expiration)) {
    isValid = false;
    alert('Please enter a valid expiration date.');
  } else {
    const [month, year] = expiration.split('/').map(Number);

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // JS months are 0-indexed
    const currentYear = currentDate.getFullYear() % 100; // Last two digits of the year
    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      isValid = false;
      alert('Please enter a future expiration date.');
    }
  }
  const cvvRegex = /^[0-9]{3}$/;
  if (!cvvRegex.test(cvv)) {
    isValid = false;
    alert('Please enter a valid 3 digit CVV.');
  }

  if (isValid) {
    alert('Submission successful!');
    const url = 'final.html';
    window.location.href = url;
  }
});
