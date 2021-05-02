import React from "react";
import { createSelector } from "reselect";
import styled from "styled-components";
import { useAppSelector } from "../../hooks";
import { makeSelectAnimePage } from "./selectors";

const HotAnimeContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const AnimeItemContainer = styled.div`
  width: 17em;
  height: 18em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnimeCover = styled.div`
  width: auto;
  height: 15em;

  img {
    width: auto;
    height: 100%;
  }
`;

const AnimeTitle = styled.h6`
  margin-top: 8px;
  font-size: 15px;
  color: #000;
  font-weight: 500;
`;

const stateSelector = createSelector(makeSelectAnimePage, (animePage) => ({
  animePage,
}));

export function HotAnime() {
  const { animePage } = useAppSelector(stateSelector);

  const isEmptyAnimePage =
    !animePage || !animePage.media || animePage.media.length === 0;

  if (isEmptyAnimePage) return <div>Loading...</div>;

  return (
    <HotAnimeContainer>
      {animePage &&
        animePage.media &&
        animePage.media.map((anime) => (
          <AnimeItemContainer>
            <AnimeCover>
              <img src={anime?.coverImage?.extraLarge || ""} />
            </AnimeCover>
            <AnimeTitle>{anime?.title?.english}</AnimeTitle>
            <h5>Avergae Score: {anime?.averageScore}</h5>
          </AnimeItemContainer>
        ))}
    </HotAnimeContainer>
  );
}
