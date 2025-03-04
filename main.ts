import { getIP } from "https://deno.land/x/get_ip/mod.ts";
import "jsr:@std/dotenv/load";

interface PubIpLog {
  id: Number;
  name: String;
  ip: String;
  date: String;
}

const getMyIP = async () => {
  const p_ip: PubIpLog = {
    id: 1,
    name: Deno.env.get("NAME"),
    ip: await getIP({ ipv6: true }),
    date: new Date().toLocaleString(),
  };

  return p_ip
};

async function setValue() {
  const data = await getMyIP()
  const resp = await fetch("https://josrferreyr-apiserverde-79.deno.dev/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: data.name , value: data}),
  });
  console.log(resp);
}

setValue();
