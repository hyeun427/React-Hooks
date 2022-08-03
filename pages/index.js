import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const onClickState = () => {
    router.push("/useState");
  };

  const onClickEffect = () => {
    router.push("/useEffect");
  };

  return (
    <div>
      <button onClick={onClickState}>useState로 출발</button>
      <button onClick={onClickEffect}>useEffect로 출발</button>
    </div>
  );
}
