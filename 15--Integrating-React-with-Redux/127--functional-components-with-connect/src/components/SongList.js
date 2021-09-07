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

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

// &   When we pass action creator(selectedSong) here inside a connect function, the connect function does a special operation on the functions inside the object {selectedSong} it takes it to another JS function and it's kind of going to call dispatch function for us
// ^ So by passing our action creator in to the connect function and whenever we call
export default connect(mapStateToProps, { selectSong })(SongList);
