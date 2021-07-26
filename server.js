import { ServerWithOpenID } from "./ServerWithOpenID.js";

class MyServer extends ServerWithOpenID {
};

const url = "https://github.com/login/oauth/access_token";

// https://github.com/settings/developers
// New OAuth App
// https://temp.sabae.cc/openid_callback
const client_id = "ac0f8e75b3dd97527c41";

// create a new client secret -> write client_secret.txt
const client_secret = (await Deno.readTextFile("client_secret.txt")).trim();

new MyServer(8010, { url, client_id, client_secret });
