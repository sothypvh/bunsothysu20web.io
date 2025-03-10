document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let salary = document.getElementById("salary").value;
    let date = document.getElementById("date").value;

    // Format salary with currency
    let formattedSalary = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(salary);

    document.getElementById(
      "form-data"
    ).innerHTML = `Name: ${name} <br> Email: ${email} <br> Salary: ${formattedSalary} <br> Hire Date: ${date}`;

    document.getElementById("success-message").classList.remove("d-none");

    // Corrected alert function - using a single string with newline characters
    alert(
      `1. EmpName: ${name}\n2. Email: ${email}\n3. Salary: ${formattedSalary}\n4. HireDate: ${date}`
    );

    this.reset();
  });

// Close alert when clicking the "X" button
document.getElementById("close-alert").addEventListener("click", function () {
  document.getElementById("success-message").classList.add("d-none");
});
