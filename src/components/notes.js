export default function Notes({ notes, handleRemoveNote }) {
  return (
    <>
      <div className="notes-container">
        {notes.map((note, index) => {
          return (
            <div className="single-note" key={index}>
              <button className="textarea-button" onClick={handleRemoveNote}>
                ✖
              </button>
              <textarea
                rows="8"
                cols="35"
                className="textarea"
                defaultValue={note}></textarea>
            </div>
          );
        })}
      </div>
    </>
  );
}
