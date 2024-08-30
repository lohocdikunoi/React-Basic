const InitState = {
  users: [
    { id: 1, Name: "Trinh Kim Vien" },
    { id: 2, Name: "KunxBeKim" },
  ],
  post: [],
};

const rootReducer = (state = InitState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      let usersNew = state.users;
      usersNew = usersNew.filter((item) => item.id !== action.payload.id);

      return {
        ...state,
        users: usersNew,
      };
    case "CREAT_USER":
      let id = Math.floor(Math.random() * 1000);
      let usernew = { id: id, Name: `random - ${id}` };

      return {
        ...state,
        users: [...state.users, usernew],
      };

    default:
      return state;
  }
};

export default rootReducer;
