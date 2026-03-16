# openid-login
日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple server with OpenID login using GitHub.

## Features
- Implements OpenID login flow using GitHub
- Stores access token in browser local storage
- Displays user information after successful login

## Requirements
- Deno runtime

## Usage
1. Clone the repository
2. Create a `client_secret.txt` file in the root directory with your GitHub OAuth app secret key.
3. Run the server using the provided `run.sh` script:
   ```
   ./run.sh
   ```
4. Open `http://localhost:8010` in your web browser to see the demo.

## License
This project is licensed under the [MIT License](LICENSE).
