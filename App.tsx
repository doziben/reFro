import { Provider } from "react-redux";
import { Store } from "./store/Store";
import AuthManager from "./utils/AuthManager";

//** Navigators are prefixed with _  **/

export default function App() {
  return (
    <Provider store={Store}>
      <AuthManager />
    </Provider>
  );
}
