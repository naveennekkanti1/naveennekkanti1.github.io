document.addEventListener("DOMContentLoaded", function() {
    const reservationForm = document.getElementById("reservationForm");
    const reservationTable = document.getElementById("reservationTable");
    const receiptForm = document.getElementById("receiptForm");
  
    reservationForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const mode = document.getElementById("mode").value;
  
      // Create a new row in the table
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${mode}</td>
      `;
  
      // Append the new row to the table
      reservationTable.appendChild(newRow);
  
      // Show the receipt form
      receiptForm.style.display = "block";
  
      // Populate receipt form with booking details
      document.getElementById("receiptName").textContent = name;
      document.getElementById("receiptEmail").textContent = email;
      document.getElementById("receiptPhone").textContent = phone;
      document.getElementById("receiptMode").textContent = mode;
  
      // Reset the form
      reservationForm.reset();
    });
  
    // Show the message for phone number
    document.getElementById("phone").addEventListener("focus", function() {
      const phoneMessage = document.getElementById("phoneMessage");
      phoneMessage.textContent = "Please enter your phone number with country code.";
      phoneMessage.style.color = "#4CAF50";
    });
  
    document.getElementById("phone").addEventListener("blur", function() {
      const phoneMessage = document.getElementById("phoneMessage");
      phoneMessage.textContent = "";
    });
  });
  