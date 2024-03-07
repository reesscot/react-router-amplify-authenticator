import { withAuthenticator } from "@aws-amplify/ui-react";
import { AuthUser } from "aws-amplify/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Login({ user }: { user?: AuthUser }) {
  const navigate = useNavigate();
  
  useEffect(() => {
    if (user) {
        navigate("/");
    }
  }, [user, navigate]);

  return null;
}

export default withAuthenticator(Login);