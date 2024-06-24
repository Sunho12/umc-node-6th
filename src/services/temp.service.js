import { BaseError } from "../../config/error.js";
import { tempResponseDTO } from "../dtos/temp.response.dto.js";
import { flagResponseDTO } from "../dtos/temp.response.dto.js";

export const getTempData = () => {
    return tempResponseDTO("This is TEST ! >.0");
};

export function CheckFlag(flag){
    if (flag == 1)
        throw new BaseError("Flag is 1 !!");
    else{
        return flagResponseDTO(flag);
    }
};