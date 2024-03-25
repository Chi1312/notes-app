export default function NoteInput({
  noteText,
  handleNoteChange,
  handleNotesAdd,
}) {
  return (
    <div className="note">
      <p className="note-heading">Te salut cu stima si respect! Te rog introdu no-titza!</p>
      <textarea
        rows="7"
        cols="75"
        type="textarea"
        className="textarea-heading"
        value={noteText}
        onChange={handleNoteChange}></textarea>
      <button
        onClick={() => {
          if (noteText.length > 0) handleNotesAdd();
        }}
        className="note-button">
        baga fratele meu
      </button>
    </div>
  );
}
