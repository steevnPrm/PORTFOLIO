"use client";

import { useState } from "react";
import useGetData from "../hooks/useGetForm";
import { useRedirect } from "../hooks/useRedirect";
import { useSendForm } from "../hooks/useSend";

export default function ContactForm() {
  const { email, message, setEmail, setMessage } = useGetData();
  const { sendForm } = useSendForm();
  const { redirectTo } = useRedirect();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await sendForm("/api/contact", { email, message });

      if (response?.success) {
        // Reset form
        setEmail("");
        setMessage("");
        // Redirection ou message
        redirectTo("/");
      } else {
        setError("Une erreur est survenue, veuillez réessayer.");
      }
    } catch (err) {
      setError("Une erreur est survenue, veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col sm:w-2xl border bg-vitrine-grey-300/30 border-vitrine-red-500 shadow shadow-red-300 rounded-2xl">
      <div className="flex justify-center p-6">
        <h2 className="text-vitrine-grey-100 text-2xl text-center font-bold">
          Me contacter
        </h2>
      </div>

      <form className="flex flex-col gap-6 m-6" onSubmit={handleSubmit}>
        <div className="">
          <label className="flex flex-col text-vitrine-grey-100">
            Email
            <input
              className="p-4 bg-vitrine-grey-500 shadow-2xs shadow-vitrine-red-300 text-vitrine-grey-100/50 rounded-sm pl-2"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Votre email"
            />
          </label>
        </div>

        <div>
          <label className="flex flex-col text-vitrine-grey-100">
            Message
            <textarea
              className="p-4 bg-vitrine-grey-500 text-vitrine-grey-100/50 shadow-2xs shadow-vitrine-red-300 rounded-sm pl-2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              placeholder="Votre message"
            />
          </label>
        </div>

        {error && <p>{error}</p>}

        <div className="flex justify-center">
        <button
          className="bg-vitrine-red-500 w-1/2 text-vitrine-grey-100 px-10 py-2 flex items-center justify-center rounded-full border border-vitrine-red-400"
          type="submit"
          disabled={loading}
        >
          {loading ? "Envoi..." : "Envoyer"}
        </button>
        </div>
      </form>
    </div>
  );
}

