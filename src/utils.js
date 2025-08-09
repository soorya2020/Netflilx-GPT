export const validateFormData = (email, password) => {
  const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
  const PasswordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  const isEmailValid = EmailRegex.test(email);
  const isPasswordValid = PasswordRegex.test(password);

  if (!isEmailValid) return "email is not vald";
  if (!isPasswordValid) return "password is not valid";

  return null;
};

export const getRandomItemFromList = (array) => {
  return array[[Math.floor(Math.random() * array.length)]];
};
