import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as allActionCreators from "../ActionCreator/ActionCreator";

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActionCreators, dispatch);
};
