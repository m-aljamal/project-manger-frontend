import { Role } from "src/generated/generates";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "src/context/auth-context";

const localStorageKey = "___auth_provider_token___";

async function getToken() {
  return window.localStorage.getItem(localStorageKey);
}

async function handleUserResponse(accessToken: string) {
  window.localStorage.setItem(localStorageKey, accessToken);

  let user = await currentUser(accessToken);

  return user;
}

async function currentUser(accessToken: string) {
  const response = await fetch("http://localhost:3001/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      query: `
        query currentUser{
            currentUser{
              id
              name
              createdAt
              projectId
              role
              username
            }
          }
        `,
    }),
  });
  const json = await response.json();

  if (json.data.currentUser) {
    return { ...json.data.currentUser, accessToken };
  }
  return null;
}

async function login({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  const response = await fetch("http://localhost:3001/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      mutation login(
        $username: String!,
        $password: String!
      ){
        login(loginUserInput:{
          password: $password,
          username:$username
        }){
          accessToken,
          user{
            name
            id
            username
            role
            projectId
          }
        }
      }
        `,
      variables: {
        username,
        password,
      },
    }),
  });

  const json = await response.json();

  return handleUserResponse(json.data.login.accessToken);
}

function logout() {
  window.localStorage.removeItem(localStorageKey);
}

async function client(endpoint: string, data: any) {
  const config = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  return window
    .fetch(`${process.env.REACT_APP_API_URL}${endpoint}`, config)
    .then(async (res) => {
      const data = await res.json();
      if (res.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
}

function useProjectId(page?: string) {
  const { user }: any = useAuth();
  const { projectId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (user.role !== Role.Admin && user.projectId !== projectId) {
      navigate(`/projects/${user.projectId}/${page}`);
    }
  }, [projectId]);
  return projectId;
}

export {
  getToken,
  handleUserResponse,
  currentUser,
  login,
  logout,
  useProjectId,
  client,
};
