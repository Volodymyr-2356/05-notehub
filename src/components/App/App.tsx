import css from "./App.module.css";
import NoteList from "../NoteList/NoteList";
import { fetchNotes } from "../../services/noteService";
import Pagination from "../Pagination/Pagination";
import SearchBox from "../SearchBox/SearchBox";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Modal from "../Modal/Modal";
import NoteForm from "../NoteForm/NoteForm";

export function App() {
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ["notes", page],
    queryFn: () => fetchNotes({ page, search: "", perPage: 12 }),
  });
  console.log(data);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Eroor</p>;
  }
  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox></SearchBox>
        <Pagination
          page={page}
          totalPages={data.totalPages}
          onPageChange={setPage}
        />
        <button className={css.button} onClick={() => setIsModalOpen(true)}>
          Create note +
        </button>
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <NoteForm></NoteForm>
          </Modal>
        )}
      </header>

      {data && data.notes.length > 0 && <NoteList notes={data.notes} />}
    </div>
  );
}
