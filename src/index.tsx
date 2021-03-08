import 'piral/polyfills';
import * as React from 'react';
import { renderInstance } from 'piral';
import { layout, errors } from './layout';
import MovieTile from './components/MovieTile';

// change to your feed URL here (either using feed.piral.cloud or your own service)
const feedUrl = 'https://feed.piral.cloud/api/v1/pilet/dante-feed';

const { root } = renderInstance({
  layout,
  errors,
  requestPilets() {
    return fetch(feedUrl)
      .then(res => res.json())
      .then(res => res.items);
  },
});

root.registerExtension('MovieTile', props => <MovieTile {...props.params}></MovieTile>);
