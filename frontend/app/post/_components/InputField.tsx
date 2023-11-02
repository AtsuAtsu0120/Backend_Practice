import { ChangeEvent, ComponentProps, Dispatch, HTMLProps, SetStateAction } from "react";

type InputFieldProps<T> = { 
  label: string;
  setState: Dispatch<SetStateAction<T>>,
}

export function InputField<T>({label, setState}: InputFieldProps<T>) {
  const onChangeState= (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value as T);
  }
  return(
    <div className="flex">
      <p>{label}</p>
      <input type="text" className="w-[100px] text-black" size={10} onInput={onChangeState}/>
    </div>
  )
}