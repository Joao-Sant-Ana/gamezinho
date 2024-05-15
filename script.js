const gamearea = document.getElementById("gamearea");
const $warriors = document.querySelectorAll(".warrior");
const enemyWarriors = document.querySelectorAll(".enemyWarrior")
const warriors = Array.from($warriors);

gamearea.addEventListener('click', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    warriors.forEach((warrior => {
        warrior.style.left = x + "px";
        warrior.style.top = y + "px";
    }));
});


function enemyWarrior () {
    setTimeout(() => {
        enemyWarriors.forEach((enemyWarrior => {
            let selectWarriorToBeAttacked = Math.floor(Math.random() * warriors.length)
            let warriorToBeAttacked = warriors.slice(selectWarriorToBeAttacked, selectWarriorToBeAttacked + 1)[0];
            const localization = warriorToBeAttacked.getBoundingClientRect();
            const enemyX = localization.left;
            const enemyY = localization.top;

            enemyWarrior.style.left = enemyX + "px";
            enemyWarrior.style.top = enemyY + "px";

        }));

    }, 3000);
}
setInterval(() => {
    enemyWarrior();
}, 1000);
