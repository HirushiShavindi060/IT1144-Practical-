const orderForm = document.getElementById('orderForm');
const modal = document.getElementById('orderModal');
const closeBtn = document.querySelector('.close-btn');

orderForm.addEventListener('submit', function(e) {
    e.preventDefault(); 

   
    const name = document.querySelector('input[name="name"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const address = document.querySelector('input[name="address"]').value;

    
    document.getElementById('customerDetails').innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
    `;

    modal.style.display = "block"; 
});


closeBtn.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}