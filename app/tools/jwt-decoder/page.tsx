"use client";

import { useState } from "react";


import {
  KeyRound,
  Copy,
  Trash2,
} from "lucide-react";

import ToolHeader from "@/components/tools/ToolHeader";
import ToolTextarea from "@/components/tools/ToolTextarea";
import StatusAlert from "@/components/tools/StatusAlert";
import ActionButton from "@/components/tools/ActionButton";

export default function JWTDecoderPage() {

  const [token, setToken] = useState("");

  const [header, setHeader] = useState("");

  const [payload, setPayload] = useState("");

  const [status, setStatus] = useState("");
  const [exp, setExp] = useState("");
  const [iat, setIat] = useState("");
  const [nbf, setNbf] = useState("");
  const [expired, setExpired] = useState("");

 function decodeJWT() {

  if (!token.trim()) {

    setStatus("⚠️ Masukkan JWT Token");

    return;

  }

  try {

    const parts = token.split(".");

    if (parts.length !== 3) {

      setStatus("❌ JWT tidak valid");

      return;

    }

    const decode = (str: string) =>
      JSON.parse(
        atob(
          str.replace(/-/g, "+").replace(/_/g, "/")
        )
      );

    const headerData = decode(parts[0]);

    const payloadData = decode(parts[1]);

    setHeader(
      JSON.stringify(headerData, null, 2)
    );

    setPayload(
      JSON.stringify(payloadData, null, 2)
    );

    if (payloadData.exp) {

      const expDate = new Date(
        payloadData.exp * 1000
      );

      setExp(expDate.toLocaleString());

      setExpired(

        Date.now() > payloadData.exp * 1000

          ? "🔴 Expired"

          : "🟢 Valid"

      );

    } else {

      setExp("-");

      setExpired("-");

    }

    if (payloadData.iat) {

      setIat(

        new Date(

          payloadData.iat * 1000

        ).toLocaleString()

      );

    } else {

      setIat("-");

    }

    if (payloadData.nbf) {

      setNbf(

        new Date(

          payloadData.nbf * 1000

        ).toLocaleString()

      );

    } else {

      setNbf("-");

    }

    setStatus("✅ JWT berhasil di-decode");

  }

  catch {

    setStatus("❌ JWT tidak valid");

    setHeader("");

    setPayload("");

    setExp("");

    setIat("");

    setNbf("");

    setExpired("");

  }

}

  async function copyHeader(){

    if(!header) return;

    await navigator.clipboard.writeText(header);

    setStatus("✅ Header disalin");

  }

  async function copyPayload(){

    if(!payload) return;

    await navigator.clipboard.writeText(payload);

    setStatus("✅ Payload disalin");

  }

  function clearAll(){

  setToken("");

  setHeader("");

  setPayload("");

  setExp("");

  setIat("");

  setNbf("");

  setExpired("");

  setStatus("");

}

  return(

    <main className="mx-auto max-w-6xl px-6 py-20">

      <ToolHeader

        icon="🔐"

        title="JWT Decoder"

        description="Decode JSON Web Token (JWT) dengan mudah."

      />

      <div className="mt-12">

        <ToolTextarea

          label="JWT Token"

          value={token}

          onChange={setToken}

          placeholder="Paste JWT di sini..."

        />

      </div>

      <StatusAlert

        status={status}

      />
      <div className="mt-8 flex flex-wrap justify-center gap-4">

  <ActionButton
    onClick={decodeJWT}
    icon={<KeyRound size={18} />}
  >
    Decode
  </ActionButton>

  <ActionButton
    onClick={copyHeader}
    icon={<Copy size={18} />}
    color="gray"
  >
    Copy Header
  </ActionButton>

  <ActionButton
    onClick={copyPayload}
    icon={<Copy size={18} />}
    color="green"
  >
    Copy Payload
  </ActionButton>

  <ActionButton
    onClick={clearAll}
    icon={<Trash2 size={18} />}
    color="red"
  >
    Clear
  </ActionButton>

</div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">

        <ToolTextarea

          label="Header"

          value={header}

          readOnly

          placeholder="Header JWT"

        />

        <ToolTextarea

          label="Payload"

          value={payload}

          readOnly

          placeholder="Payload JWT"

        />

      </div>
      <div className="mt-10 rounded-2xl bg-slate-100 p-6 dark:bg-slate-800">

  <h2 className="mb-6 text-xl font-bold dark:text-white">

    Informasi Token

  </h2>

  <div className="grid gap-4 md:grid-cols-2">

    <div>

      <p className="font-semibold">

        Expiration

      </p>

      <p className="text-slate-600 dark:text-slate-400">

        {exp || "-"}

      </p>

    </div>

    <div>

      <p className="font-semibold">

        Issued At

      </p>

      <p className="text-slate-600 dark:text-slate-400">

        {iat || "-"}

      </p>

    </div>

    <div>

      <p className="font-semibold">

        Not Before

      </p>

      <p className="text-slate-600 dark:text-slate-400">

        {nbf || "-"}

      </p>

    </div>

    <div>

      <p className="font-semibold">

        Status

      </p>

      <p className="font-bold">

        {expired || "-"}

      </p>

    </div>

  </div>

</div>
<div className="mt-12 rounded-2xl bg-slate-100 p-6 dark:bg-slate-800">

  <h2 className="mb-4 text-xl font-bold dark:text-white">

    Tentang JWT Decoder

  </h2>

  <p className="leading-8 text-slate-600 dark:text-slate-400">

    JWT Decoder membantu membaca isi JSON Web Token (JWT) tanpa
    melakukan verifikasi signature. Tool ini berguna untuk melihat
    informasi pada Header dan Payload, termasuk waktu pembuatan token,
    masa berlaku, serta status apakah token masih valid atau sudah
    kedaluwarsa.

  </p>

</div>
</main>
  );
}
