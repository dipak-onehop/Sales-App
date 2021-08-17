export function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
  if (email && emailRegex.test(email.trim())) {
    return true;
  }
  return false;
}

// function to validate contact is in required format or not
export function validateContact(contactNo) {
  const contactNoRegex = /^[6-9][0-9]{9}$/;
  if (contactNo && contactNoRegex.test(contactNo.trim())) {
    return true;
  }
  return false;
}
