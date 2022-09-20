const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById('progress');
const formSteps = document.querySelectorAll(".form-step")
const progressSteps = document.querySelectorAll(".progress-step")
const submit = document.getElementById('submitbtn');
const form = document.getElementById('form');
const confirmation = document.getElementById('confirm');
const firstName= document.getElementById('Firstname');
const nameConfirmation = document.getElementById('name');

let formStepsNum =0;

nextBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        formStepsNum++; //increases the form steps before updating
        updateFormSteps();
        updateProgressBar();
    })
})

prevBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        formStepsNum--; //decreases the form steps before updating
        updateFormSteps();
        updateProgressBar();
    })
})

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    form.style.display = 'none';
    confirmation.style.display= 'block';
    nameConfirmation.innerHTML = firstName.value
    // console.log(firstName.value)
})



//updating function
function updateFormSteps(){
    //seek to find if there is any form-step that contain 'form-step-active' group
    //if there is any, remove the className
    formSteps.forEach(formStep=>{
        formStep.classList.contains('form-step-active') &&
        formStep.classList.remove("form-step-active"); 
    })
    formSteps[formStepsNum].classList.add("form-step-active");
    
    // const progressActive = document.querySelectorAll(".progress-step-active");
    const percentage = document.getElementById('percentage')
    percentage.innerHTML = `${(formStepsNum/formSteps.length)*100 + '%'}  completed`;   
}

function updateProgressBar(){
    progressSteps.forEach((progressStep, index)=>{
        if(index < formStepsNum +1){
            progressStep.classList.add('progress-step-active')
        } else {
            progressStep.classList.remove('progress-step-active')
        }
    })

    const progressActive = document.querySelectorAll(".progress-step-active");

    progress.style.width=((progressActive.length -1)/ (progressSteps.length-1)) *100 +"%";
};