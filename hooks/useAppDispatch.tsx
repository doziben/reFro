import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/Store";

const useAppDispatch: () => AppDispatch = useDispatch;

export default useAppDispatch;
