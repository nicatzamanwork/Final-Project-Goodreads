// import * as React from "react";
// import Paper from "@mui/material/Paper";
// import InputBase from "@mui/material/InputBase";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import DirectionsIcon from "@mui/icons-material/Directions";

// export default function Search() {
//   return (
//     <Paper
//       component="form"
//       sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
//     >
//       <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
//       <InputBase
//         sx={{ ml: 1, flex: 1 }}
//         placeholder="Search Books"
//         inputProps={{ "aria-label": "search books" }}
//       />
//       <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
//         <SearchIcon />
//       </IconButton>
//     </Paper>
//   );
// // }
// import * as React from "react";
// import Paper from "@mui/material/Paper";
// import InputBase from "@mui/material/InputBase";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import DirectionsIcon from "@mui/icons-material/Directions";

// export default function Search() {
//   const [searchTerm, setSearchTerm] = React.useState("");
//   const [books, setBooks] = React.useState([]);

//   React.useEffect(() => {
//     // Fetch the list of books from the API
//     fetch("http://localhost:5000/api/book")
//       .then((response) => response.json())
//       .then((data) => setBooks(data))
//       .catch((error) => console.error(error));
//   }, []);

//   const handleSearchTermChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredBooks = books.filter((book) =>
//     book.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <Paper
//         component="form"
//         sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
//       >
//         <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
//         <InputBase
//           sx={{ ml: 1, flex: 1 }}
//           placeholder="Search Books"
//           inputProps={{ "aria-label": "search books" }}
//           value={searchTerm}
//           onChange={handleSearchTermChange}
//         />
//         <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
//           <SearchIcon />
//         </IconButton>
//         <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//         <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
//           <DirectionsIcon />
//         </IconButton>
//       </Paper>
//       <ul>
//         {filteredBooks.map((book) => (
//           <li key={book.id}>{book.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
