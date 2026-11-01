function submit() {
    const name1 = document.getElementById("Player1").value.trim();
    const name2 = document.getElementById("Player2").value.trim();
    const tag = document.getElementById("tag");

    // Validate names; stop here if anything is missing
    if (name1 === "" && name2 === "") {
        alert("Both players must enter their names!");
        return;
    }
    if (name1 === "") {
        alert("Player 1 must enter a name!");
        return;
    }
    if (name2 === "") {
        alert("Player 2 must enter a name!");
        return;
    }

    // Roll a die for each player (1-6)
    const num1 = Math.floor(Math.random() * 6) + 1;
    const num2 = Math.floor(Math.random() * 6) + 1;

    const images = document.querySelectorAll("img");
    images[0].setAttribute("src", `image/image${num1}.png`);
    images[1].setAttribute("src", `image/image${num2}.png`);

    // Decide the result
    let result;
    if (num1 > num2) {
        result = `${name1} 🚩 Wins!`;
    } else if (num2 > num1) {
        result = `${name2} 🚩 Wins!`;
    } else {
        result = `${name1} and ${name2} - It's a Draw!`;
    }

    tag.innerText = result;
}
