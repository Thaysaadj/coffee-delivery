import { InputHTMLAttributes, forwardRef } from "react";
import { InputStyledContainer, InputWrapper } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({error, className, ...props}, ref) => {
  return (
    <InputWrapper className={className}>
      <InputStyledContainer {...props} ref={ref} />
      {error && (
        <p>{error}</p>
      )}
    </InputWrapper>
  );
});
