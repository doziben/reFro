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
  EditAccount: { id: string };
  ChangePassword: undefined;
};

const date = new Date().toLocaleString();
export type dateType = typeof date;

type todayScreens = {
  Today: undefined;
  Report: {
    type: "edit" | "create";
    value: string;
    date: dateType | undefined;
  };
};

//* WORKSPACE *//
type workspaceScreens = {
  Workplace: undefined;
  _Teamlist: undefined;
};

type teamListScreens = {
  Teamlist: undefined;
  Teammembers: { name: string; id: string; role: string };
};

export {
  authScreens,
  appScreens,
  accountScreens,
  todayScreens,
  workspaceScreens,
  teamListScreens,
};
