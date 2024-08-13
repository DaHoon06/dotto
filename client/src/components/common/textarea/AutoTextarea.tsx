import * as S from "./styles/AutoTextarea.styled";
import { ChangeEvent, useRef, useState } from "react";

interface TextareaProps {
  onChangeTextarea: (value: string) => void;
  placeholder?: string;
  value?: string;
}

export const AutoTextarea = (props: TextareaProps) => {
  const { onChangeTextarea, placeholder, value } = props;
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [textarea, setTextarea] = useState(value || "");

  const handleChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();

    setTextarea(e.target.value);
    onChangeTextarea(e.target.value);

    if (textareaRef && textareaRef.current && "style" in textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  };

  return (
    <S.AutoTextareaLayout>
      <S.AutoTextarea
        ref={textareaRef}
        value={textarea}
        placeholder={placeholder}
        onChange={handleChangeTextarea}
      ></S.AutoTextarea>
    </S.AutoTextareaLayout>
  );
};
