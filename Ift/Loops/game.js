// Welcome text message
let playerName = prompt("What is your name, brave hero?");
alert("Nice to meet you, " + playerName + "!");

// Ask for age
let age = prompt("How old are you?");
if (age >= 18) {
    alert("You are old enough to go on a quest!");

    // Choose a weapon
    let weapon = prompt("Do you choose a sword or magic?");

    if (weapon.toLowerCase() === "sword") {
        alert("You have chosen a mighty sword!");
    } else {
        alert("You have chosen dark magic!");
    }

    // Choose a monster
    let monster = prompt("Which monster do you want to fight? Dragon, Troll, or Demon?");

    if (monster.toLowerCase() === "dragon") {
        alert("A fire-breathing dragon stands before you!");
    } else if (monster.toLowerCase() === "troll") {
        alert("A giant troll blocks your path!");
    } else {
        alert("A dark demon emerges from the shadows!");
    }

    // Battle loop
    let health = 100;
    let enemyHealth = 100;

    while (health > 0 && enemyHealth > 0) {
        let attack = prompt("Do you want to attack? (yes/no)").toLowerCase();

        if (attack === "yes") {
            let damage = Math.floor(Math.random() * 20) + 10;
            enemyHealth -= damage;
            alert("You attack and deal " + damage + " damage! Enemy HP: " + enemyHealth);

            if (enemyHealth <= 0) {
                alert("You have defeated the monster! Glory and honor belong to you, " + playerName + "!");
                break;
            }

            let enemyDamage = Math.floor(Math.random() * 15) + 5;
            health -= enemyDamage;
            alert("The monster strikes back! You take " + enemyDamage + " damage. Your HP: " + health);
        } else {
            alert("You hesitate... The monster seizes the opportunity and attacks!");
            let enemyDamage = Math.floor(Math.random() * 20) + 5;
            health -= enemyDamage;
            alert("You take " + enemyDamage + " damage! Your HP: " + health);
        }
    }

    if (health <= 0) {
        alert("You have been defeated... May your name be remembered.");
    }

} else {
    alert("You are too young. Train harder and return later!");
}
