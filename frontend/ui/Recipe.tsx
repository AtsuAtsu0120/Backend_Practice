import Image from "next/image";

type RecipeProps = {
  title: string;
  imageSrc: string;
  time: number;
};
export default function Recipe({ title, imageSrc, time }: RecipeProps) {
  return (
    <>
      <button className="bg-gray-400">
        <Image src={imageSrc} width={100} height={100} alt={"料理の写真"}/>
        <div className="flex">
          <div>{title}</div>
          <div>{time}分</div>
        </div>
      </button>
    </>
  );
}
