import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: "$2a$10$CAwMIVksWq31gumxSGwHquBjSUywxwDtCwC4dq5niE2ddffXomc6y",
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: "$2a$10$CAwMIVksWq31gumxSGwHquBjSUywxwDtCwC4dq5niE2ddffXomc6y",
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: "$2a$10$CAwMIVksWq31gumxSGwHquBjSUywxwDtCwC4dq5niE2ddffXomc6y",
  },
];

export default users;
