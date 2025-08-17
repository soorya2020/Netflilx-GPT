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

export const getSearchQuery = (searchValue) => {
  return `
You are a movie recommendation engine.

Task:
- Based on the user's search: "${searchValue}", recommend exactly 5 relevant movie titles.
- Return them as a single line, comma-separated. Example: Movie1, Movie2, Movie3, Movie4, Movie5.
- If the search is gibberish, meaningless, unrelated to movies, or no good matches are found — return "null".
- Only include actual movie names, no extra text, no numbering, no explanations.
- If fewer than 5 valid matches exist, still return only valid movies and fill the rest with similar or popular ones in the same genre/theme.
`;
};
