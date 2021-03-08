import { ExtensionSlot } from 'piral';
import * as React from 'react';

export interface MovieTileProps {
  backdrop: string;
  title: string;
  score: string;
  overview: string;
}

const MovieTile: React.FC<MovieTileProps> = props => (
  <div className="Item" style={{ backgroundImage: 'url(' + props.backdrop + ')' }}>
    <div className="overlay">
      <div className="title">{props.title}</div>
      <div className="rating">{props.score} / 10</div>
      <div className="plot">{props.overview}</div>
      <ExtensionSlot name="ListToggle"></ExtensionSlot>
    </div>
  </div>
);

export default MovieTile;
