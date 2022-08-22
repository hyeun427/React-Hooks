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
    router.push("/useMemo");
  };

  const onClickCallback = () => {
    router.push("/useCallback");
  };

  const onClickReactMemo = () => {
    router.push("/reactMemo");
  };

  const onClickUseReducer = () => {
    router.push("/useReducer");
  };

  const onClickCustomHook = () => {
    router.push("/customHook");
  };

  return (
    <Wrapper>
      <Button onClick={onClickState}>useState로 출발🐤</Button>
      <Button onClick={onClickEffect}>useEffect로 출발🤖</Button>
      <Button onClick={onClickRef}>useRef로 출발🐣</Button>
      <Button onClick={onClickContext}>useContext로 출발💕</Button>
      <Button onClick={onClickMemo}>useMemo로 출발🎁</Button>
      <Button onClick={onClickCallback}>useCallback으로 출발👻</Button>
      <Button onClick={onClickReactMemo}>React.memo로 출발🥶</Button>
      <Button onClick={onClickUseReducer}>useReducer로 출발🐶</Button>
      <Button onClick={onClickCustomHook}>customHook으로 출발🦄</Button>
    </Wrapper>
  );
}
