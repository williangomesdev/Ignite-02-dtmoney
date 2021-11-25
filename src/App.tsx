import styled from "styled-components";
import { Header } from "./components/Header/Index";
import { Container } from "./components/Header/styles";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <GlobalStyle />
    </>
  );
}
