import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store/Store";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
