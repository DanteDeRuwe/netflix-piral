import { ExtensionSlot } from 'piral';
import * as React from 'react';

export interface MovieTileProps {
  backdrop: string;
  title: string;
  score: string;
  overview: string;
  id: string;
  media_type: 'tv' | 'movie';
}

const MovieTile: React.FC<MovieTileProps> = props => {
  const backDrop = props.backdrop.match(/.*(null|undefined)$/) ? 'https://i.imgur.com/QVaMho2.png' : props.backdrop;

  return (
    <div
      className="Item"
      id={props.id}
      data-mediatype={props.media_type}
      style={{ backgroundImage: `url(${backDrop})` }}
    >
      <div className="overlay">
        <div className="title">{props.title}</div>
        <div className="rating">{props.score} / 10</div>
        <div className="plot">{props.overview}</div>
        <ExtensionSlot name="ListToggle" params={props}></ExtensionSlot>
      </div>
    </div>
  );
};

export default MovieTile;
