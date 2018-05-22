let submit = document.querySelector("#button");
let email = document.querySelector("#email");
let number = document.querySelector("#number");
let errorCode = document.querySelector("#error");
let carrier = document.querySelector("#carrier");
const emailKey = "bvd5889-email";
const numKey = "bvd5889-number";
const carrierKey = "bvd5889-carrier";

errorCode.innerHTML = "";
submit.addEventListener("click", storeValues);
number.addEventListener("click", resetCode);
email.addEventListener("click", resetCode);

getValues();

document.addEventListener("keydown", function (e)
{
  if(e.which == 13)
  {
    storeValues();
  }
});

function getValues()
{
  let theNum = localStorage.getItem(numKey);
  let theEmail = localStorage.getItem(emailKey);
  let theCarrier = localStorage.getItem(carrierKey);

  if(theNum && theEmail && theCarrier)
  {
    email.value = theEmail;
    number.value = theNum;
    carrier.value = theCarrier;
  }
  else
  {
    return;
  }
}

function storeValues() {
  let userNum = getNum(number.value);
  let userEm = email.value;
  let userCarrier = carrier.value;
  if (!inputCheck(userEm, userNum)) {
    return;
  }

  localStorage.setItem(emailKey, userEm);
  localStorage.setItem(numKey, userNum);
  localStorage.setItem(carrierKey, userCarrier);

  location.href = "myself";
}

function inputCheck(emailAdd, phoneNumber) {
  let goodInput = false;

  if (phoneNumber == null && !checkEmail(emailAdd)) {
    errorCode.innerHTML = "please enter a valid email address and phone number.";
    return;
  }
  if (phoneNumber == null) {
    errorCode.innerHTML = "please enter a valid phone number, with only number values (area code 2).";
    return;
  }
  if (!checkEmail(emailAdd)) {
    errorCode.innerHTML = "please enter a valid email address.";
    return;
  }

  goodInput = true;
  return goodInput;
}

function resetCode() {
  errorCode.innerHTML = "";
}

function checkEmail(emString) {
  let isEmail = false;

  for (let i = 0; i < emString.length; i++) {
    let currentLetter = emString.substr(i, 1);

    if (currentLetter == "@") {
      isEmail = true;
      break;
    }
  }

  return isEmail;
}

function getNum(numString) {
  let finalNum = "";

  for (let i = 0; i < numString.length; i++) {
    let currentLetter = numString.substr(i, 1);

    if (!isNaN(parseInt(currentLetter, 10))) {
      finalNum += numString.substr(i, 1);
    }
  }

  if (finalNum.length != 10) {
    return null;
  } else {
    return finalNum;
  }
}
