import {
  CommonInputWrapper,
  CommonInputLabel,
  CommonInputInput,
} from "./styles";

import { InputHTMLAttributes, useId } from "react";

interface CommonInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function CommonInput({ label, ...props }: CommonInputProps) {
  const id = useId();

  return (
    <CommonInputWrapper>
      <CommonInputLabel className="visually-hidden" htmlFor={id}>
        {label}
      </CommonInputLabel>

      <CommonInputInput id={id} {...props} />
    </CommonInputWrapper>
  );
}
