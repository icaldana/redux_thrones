export const selectUser = (user) => {
  console.log("You clicled on user: ", user.first);
  return {
    type: "USER_SELECTED",
    payload: user
  }
};
