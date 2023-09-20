const userName = document.getElementById("name")
const userLastName = document.getElementById("lastName")
const birthDateUser = document.getElementById("birthDate")
const buttonSubmit = document.getElementById("buttonSubmit")
const userForm = document.getElementById("userForm")

userForm.addEventListener("submit", async function (event) {
  
  event.preventDefault();    

  const name = userName.value;
  const lastname = userLastName.value;
  const birthdate = birthDateUser.value;

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name,
        lastname,
        birthdate,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    userForm.reset();
  } catch (error) {
    console.log(error);
  }
});
