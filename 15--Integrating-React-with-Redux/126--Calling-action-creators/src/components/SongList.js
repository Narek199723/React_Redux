import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongList = (props) => {
  const renderList = () => {
    return props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  };

  return <div className="ui divided list">{renderList()}</div>;
};

// ^ This function get's called with all the data inside of our redux store, any time we change our state the mapStateProps function is going to rerun with the newly created state object
const mapStateToProps = (state) => {
  console.log(state);
  return { songs: state.songs };
};

// * SelectSong is our action creator, so what we do here is this, we import our action creator (selectSong) we pass a song and then it takes it in to the actions/index.js, there it sets it's type to "type: 'SONG_SELECTED'",
export default connect(mapStateToProps, { selectSong })(SongList);

// &  Redux cycle
// ^ || From actions/index.js --> reducers/index.js
