import './App.css'
import { Button, Flex } from '@aws-amplify/ui-react';
import { signOut } from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";
import SearchBar from './SearchBar';

export default function App() {
  const navigate = useNavigate();

  return (
    <Flex gap="20px">
      <SearchBar />

      <Button onClick={async () => {
        await signOut();
        navigate("/");
      }
      }>Sign out</Button>
    </Flex>
  )
}
