import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const FieldText = styled(TextField)`
  & .MuiTextField-root {
    background: #e9f1fb;
  }
  & .MuiOutlinedInput-input {
    padding: 16px 20px;
    border: none;
    border-bottom: 1px solid #a6adb9;
    background: #e9f1fb;
    width: 100%;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
    &:hover {
      box-shadow: 0px 8px 8px 0px #00000010, 0px 1px 0px 0px #0f43eb;
      border-bottom: 1px solid #0f43eb;
    }
    &:focus {
      box-shadow: 0px 8px 8px 0px #00000010, 0px 1px 0px 0px #0f43eb;
      border-bottom: 1px solid #0f43eb;
    }
  }
  & fieldset {
    border: none;
  }
  .MuiInputAdornment-root {
    position: absolute;
    right: 25px;
  }
  .MuiOutlinedInput-root {
    padding: 0;
  }
`;
