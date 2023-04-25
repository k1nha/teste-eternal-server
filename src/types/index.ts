interface CreateUser {
  email: string;
  password: string;
  role: string;
}

interface UserAuth {
  email: string;
  password: string;
}

export { CreateUser, UserAuth };
