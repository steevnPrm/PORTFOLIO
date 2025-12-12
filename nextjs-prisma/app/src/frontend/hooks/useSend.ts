"use client";

interface DataEntity {
  email: string;
  message: string;
}

export function useSendForm() {
  async function sendForm(endpoint: string, data: DataEntity) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      return { success: true };
    } catch (error) {}
  }

  return { sendForm };
}
