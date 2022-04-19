import "./App.css";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import List from "./components/generics/List";
import CustomButton from "./components/html/Button";
import RandomNumber from "./components/restriction/RandomNumber";
import Toast from "./components/template-literals/Toast";
// import Greet from "./components/01-Greet";
// import Heading from "./components/05-Heading";
// import Oscar from "./components/05-Oscar";
// import Person from "./components/02-Person";
// import PersonList from "./components/03-PersonList";
// import Status from "./components/04-Status";
// import Button from "./components/06-Button";
// import Input from "./components/06-Input";
// import Container from "./components/07-Container";
// import Box from "./components/context/Box";
// import ThemeContextProvider from "./components/context/ThemeContext";
// import UserContextProvider from "./components/context/UserContext";
// import LoggedIn from "./components/state/09-LoggedIn";
// import User from "./components/context/User";
// import Counter from "./components/state/12-Counter";
// import Counter from "./components/class/Counter";

function App() {
  // const personName = {
  //   first: "Bruce",
  //   last: "Wayne",
  // };

  // const nameList = [
  //   { first: "Bruce", last: "Wayne" },
  //   { first: "Clark", last: "Kent" },
  //   { first: "Princess", last: "Diana" },
  // ];
  return (
    <>
      {/* <Person name={personName} /> */}
      {/* <PersonList names={nameList} /> */}
      {/* <Status status="success" /> */}
      {/* <Heading>Placeholder Text</Heading> */}
      {/* <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar> */}
      {/* <Greet name="Vishwas" isLoggedIn={true} /> */}
      {/* <Button handleClick={(e) => console.log(e.target)} /> */}
      {/* <Input value="" handleChange={(event) => console.log(event)} /> */}
      {/* <Container styles={{ border: "1px solid black", padding: "1rem" }} /> */}
      {/* <LoggedIn /> */}
      {/* <User /> */}
      {/* <Counter /> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      {/* <Counter message="The current count is" /> */}
      {/* <Private isLoggedIn={true} Component={Profile} /> */}
      {/* <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      /> */}

      {/* <List
        items={[
          { id: 1, first: "Ade", last: "Tobi" },
          { id: 2, first: "Kunle", last: "Lola" },
          { id: 3, first: "Bade", last: "Lakin" },
        ]}
        onClick={(item) => console.log(item)}
      /> */}

      {/* <RandomNumber value={10} isPositive /> */}

      {/* <Toast position="right-top" /> */}

      <CustomButton variant="primary" onClick={() => console.log("clicked")}>
        Primary Button
      </CustomButton>
    </>
  );
}

export default App;
