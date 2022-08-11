import { useRouter } from "next/router";
import styled from "@emotion/styled";

export default function Home() {
  const Wrapper = styled.div`
    margin: 50px;
    display: flex;
    flex-direction: column;
  `;
  const Button = styled.button`
    margin: 10px;
    width: 200px;
    height: 70px;
    background-color: lightgray;
    color: black;
    font-weight: 700;
    :hover {
      background-color: pink;
      cursor: pointer;
    }
  `;

  const router = useRouter();

  const onClickState = () => {
    router.push("/useState");
  };

  const onClickEffect = () => {
    router.push("/useEffect");
  };

  const onClickRef = () => {
    router.push("/useRef");
  };

  const onClickContext = () => {
    router.push("/useContext");
  };

  const onClickMemo = () => {
<<<<<<< HEAD
    router.push("/useContext");
=======
    router.push("/useMemo");
>>>>>>> 2cdb64f8d418cffb41ae641725d2ea69166eaa45
  };

  return (
    <Wrapper>
      <Button onClick={onClickState}>useState로 출발🐤</Button>
      <Button onClick={onClickEffect}>useEffect로 출발🤖</Button>
      <Button onClick={onClickRef}>useRef로 출발🐣</Button>
      <Button onClick={onClickContext}>useContext로 출발💕</Button>
<<<<<<< HEAD
      <Button onClick={onClickMemo}>useMemo로 출발👻</Button>
=======
      <Button onClick={onClickMemo}>useMemo로 출발🎁</Button>
>>>>>>> 2cdb64f8d418cffb41ae641725d2ea69166eaa45
    </Wrapper>
  );
}
