function isGender(gender) {
  if (!gender) {
    return false;
  }

  let genderInLowerCase = gender.toLowerCase();

  return genderInLowerCase === 'male' || genderInLowerCase === 'female';
}

function showGender(gender) {
  return isGender(gender) ? `Your gender is ${gender}`: 'You didn\'t enter your gender';
}

let gender = prompt('What is your gender?', '');
alert(showGender(gender));