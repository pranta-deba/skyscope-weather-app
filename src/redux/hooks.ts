import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

// * This file defines custom, type-safe versions of the useDispatch and useSelector hooks for use with Redux and TypeScript.
