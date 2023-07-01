const startBtn = document.querySelector(".start-button");
const rules_container = document.querySelector(".rules-container");
const play_area = document.querySelector(".play-area");
startBtn.addEventListener("click", () => {
  rules_container.classList.remove("active");
  play_area.classList.add("active");
});


  // script for play area
  const hint_text = document.querySelector(".hint-text");
  const about_turn = document.querySelector(".about-turn");
  let guess_number = document.querySelector(".guessNumber");
  const guess_btn = document.querySelector(".guess-btn");
  const GeneratedNumber = Math.floor(Math.random() * (10 - 1)) + 1;
  const winner_box = document.querySelector(".winner");
  let winner_text = document.querySelector(".winner-text");
  let looser_box = document.querySelector(".looser");
let looser_text = document.querySelector(".looser_text");


//   parseInt(guess_number.value)
 
console.log(GeneratedNumber)
    let chance = 1;

    guess_btn.addEventListener("click",()=>{
         
        if(guess_number.value > 0){
            
            if(chance <= 5){

                if(parseInt(guess_number.value) == GeneratedNumber)
                {
                  play_area.classList.remove('active');
                  winner_box.classList.add("active");
                  winner_text.textContent = `It took you ${chance} turns to guess the number, which was ${GeneratedNumber}.`
                }
                else if(parseInt(guess_number.value) > GeneratedNumber){
                    let gap = parseInt(guess_number.value) - GeneratedNumber;
                    if(gap <= 3)
                    {
                        hint_text.textContent = `Your guess, ${parseInt(guess_number.value)}, is too close`;
                        about_turn.textContent =  `You have ${5-chance} turns left.`
                        chance++;
                    }else{
                        hint_text.textContent = `Your guess, ${parseInt(guess_number.value)}, is too high`;
                        about_turn.textContent =  `You have ${5-chance} turns left.`
                        chance++;
                    }
                }else{
                    let gap = parseInt(guess_number.value) - GeneratedNumber;
                    if(gap <= 3)
                    {
                        hint_text.textContent = `Your guess, ${parseInt(guess_number.value)}, is too close`;
                        about_turn.textContent =  `You have ${5-chance} turns left.`
                        chance++;
                    }
                    else{
                        hint_text.textContent = `Your guess, ${parseInt(guess_number.value)}, is too high`;
                        about_turn.textContent =  `You have ${5-chance} turns left.`
                        chance++;
                    }
                }
    
             }else{
                play_area.classList.remove("active");
                looser_box.classList.add("active");
                looser_text.textContent = `Oops!! No turns left. Number was ${GeneratedNumber}.`
             }
            
        }
    })





  
  

