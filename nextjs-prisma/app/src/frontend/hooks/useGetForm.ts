"use client";

import { useState } from "react";

export default function useGetData() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const data = { email, message, setEmail, setMessage };

  return data;
}
