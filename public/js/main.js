function reverseNumbers(numbers) {
    return numbers.reverse();
  }

  const numbers = [1, 2, 3, 4, 5];
  const reversedNumbers = reverseNumbers(numbers);
  
  console.log(reversedNumbers); 



//   exo2
function divPar2(x) {
    switch (x % 2) {
      case 0:
        console.log(`Le num ${x} est divisible par 2 ${x}:2 = ${x / 2}`);
        break;
      case 1:
        console.log(`Ce nombre n'est pas divisible par 2`);
        break;
    }
  }


// exo3
function logIn() {
    let password = prompt("Entrez votre mot de passe:");
  
    while (password !== "mdp") {
      password = prompt("Mot de passe incorrect. Veuillez réessayer:");
    }
  
    alert("Vous êtes connecté");
  }