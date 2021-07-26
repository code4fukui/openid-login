import { Server } from "https://js.sabae.cc/Server.js";
import { fetchPOST } from "https://js.sabae.cc/fetchPOST.js";

const getAccessToken = async (url, client_id, client_secret, code) => {
  const param = {
    client_id,
    client_secret,
    code,
  };
  const res = await fetchPOST(url, param);
  if (res.error) {
    throw new Error(res);
  }
  return res.access_token;
};

class ServerWithOpenID extends Server {
  constructor(port, openid) {
    super(port);
    this.openid = openid;
    if (!openid) {
      console.log("new ServerWithOpenID(port, { url, client_id, client_secret })");
    }
  }
  async handleNotFound(req) {
    // log
    /*
    const date = new Date();
    const data = { date, req };
    await Deno.writeTextFile("data/" + date.getTime() + ".json", JSON.stringify(data));
    */

    if (req.path == "/openid_callback" && req.query.startsWith("code=")) {
      const code = req.query.substring(5);
      const token = await getAccessToken(this.openid.url, this.openid.client_id, this.openid.client_secret, code);
      const html = `<script type=module>
        localStorage.setItem("accessToken", "${token}");
        document.location.href = "/";
        </script>
      `;
      //const res = new TextEncoder().encode("welcome! " + token);
      const res = new TextEncoder().encode(html);
      return new Response(res);
    }
    return super.handleNotFound(req);
  }
  /*
  async api(path, req, remoteAddr) {
    // log
    const date = new Date();
    const data = { date, path, req, remoteAddr };
    await Deno.writeTextFile("data/" + date.getTime() + ".json", JSON.stringify(data));
    return null;
  }
  */
};

export { ServerWithOpenID };
