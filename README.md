![Screenshot (162)](https://github.com/naveennekkanti1/naveennekkanti1.github.io/assets/111896305/c33c8f52-6036-457b-a3e5-aa15a5b83688)
![Screenshot (161)](https://github.com/naveennekkanti1/naveennekkanti1.github.io/assets/111896305/8e54c451-3866-410f-a2c6-b523e888556e)
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bus and Train Reservation System</title>
  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <div class="container">
    <h1 style="color: #4CAF50;">Reservation System Form</h1>

    <form id="reservationForm">
      <label for="name">Name:</label>
      <input type="text" id="name" required>

      <label for="email">Email:</label>
      <input type="email" id="email" required>

      <label for="phone">Phone:</label>
      <input type="text" id="phone" required>
      <p id="phoneMessage"></p>

      <label for="mode">Mode of Transport:</label>
      <select id="mode" required>
        <option value="">Select</option>
        <option value="Bus">Bus</option>
        <option value="Train">Train</option>
      </select>

      <input type="submit" value="Submit">
    </form>

    <table id="reservationTable">
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Mode of Transport</th>
      </tr>
    </table>

    <div id="receiptForm" style="display: none;">
      <h2>Booking Receipt</h2>
      <p><strong>Name:</strong> <span id="receiptName"></span></p>
      <p><strong>Email:</strong> <span id="receiptEmail"></span></p>
      <p><strong>Phone:</strong> <span id="receiptPhone"></span></p>
      <p><strong>Mode of Transport:</strong> <span id="receiptMode"></span></p>
    </div>

  </div>

  <script src="script.js"></script>
</body>

</html>
