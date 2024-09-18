import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch } from "react";

type CheckBoxProps = {
  checked: boolean,
  toggleChecked: Dispatch<boolean>
}
  
export const CheckBox = (props: CheckBoxProps) => {
  return (
    <div 
      className="min-w-4 w-4 h-4 ml-1.5 mt-1 mr-2.5 p-0 border border-google-blue rounded cursor-pointer overflow-hidden" 
      onClick={() => props.toggleChecked(!props.checked)}>
      { props.checked ? (
      <div className="w-4 h-4 bg-google-blue text-white text-xs border-google-blue m-0">
        <FontAwesomeIcon icon={faCheck} className="ml-0.5" />
      </div> 
      ) : <div className="w-4 h-4 rounded"></div> }
    </div>
  )
};