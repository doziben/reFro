type authScreens = {
  Onboarding: undefined;
  Login: undefined;
  SignUp: { newUser: boolean } | undefined;
};

//* APP *//
type appScreens = {
  _Account: undefined;
  _Today: undefined;
  _Workspace: undefined;
};

type accountScreens = {
  Account: undefined;
};

type todayScreens = {
  Today: undefined;
  Report: { value: string } | undefined;
};

//* WORKSPACE *//
type workspaceScreens = {
  Workspace: undefined;
  _Teamlist: undefined;
};

type teamListScreens = {
  Teamlist: undefined;
  Teammembers: undefined;
};

export {
  authScreens,
  appScreens,
  accountScreens,
  todayScreens,
  workspaceScreens,
  teamListScreens,
};
