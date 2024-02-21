import NewNoteForm from "./NewNoteForm";
import { useGetUsersQuery } from "../users/usersApiSlice";
import PulseLoader from "react-spinners/PulseLoader";
// import useTitle from "../../hooks/useTitle";

const NewNote = () => {
  // useTitle("techNotes: New Note");

  const { users } = useGetUsersQuery("usersList", {
    selectFromResult: ({ data }) => ({
      users: data?.ids.map((id) => data?.entities[id]),
    }),
  });

  if (!users?.length) return <PulseLoader color={"#FFF"} />;

  const content = <NewNoteForm users={users} />;

  return content;
};
export default NewNote;

// import { useSelector } from "react-redux";
// import { selectAllUsers } from "../users/usersApiSlice";
// import NewNoteForm from "./NewNoteForm";

// const NewNote = () => {
//   const users = useSelector(selectAllUsers);

//   if (!users?.length) return <p>Not Currently Available</p>;

//   const content = <NewNoteForm users={users} />;

//   return content;
// };
// export default NewNote;
