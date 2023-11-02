'use client'

import { Dispatch, SetStateAction, useState } from "react";
import { InputField } from "./_components/InputField";

type PostInfo = {
  title: string;
  time: number;
}
export default function Post() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState(1);

  return(
    <>
      <div className="flex">
        <p>料理名</p>
        <input type="text" className="w-[100px] text-black" size={10}/>
      </div>
      <div className="flex">
        <p>料理の画像</p>
        <input type="file" className="w-[100px] text-black" size={10}/>
    </div>
      <button onClick={() => onPostClick()} className="bg-gray-400 text-[#020202]">POST</button>
    </>
  );
}
async function onPostClick() {
  let postInfo: PostInfo = {
    title: "塩ラーメン",
    time: 5
  }
  const res = await fetch("http://backend:8080/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postInfo)
  });
}