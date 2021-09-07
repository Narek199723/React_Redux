// Action creator
export const selectSong = song => {
  console.log(song,'i am in action creator');
  // Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
