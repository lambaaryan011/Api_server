# API Server Documentation

This project is a simple Express.js API server that allows users to create, update, and retrieve a note. Below is a detailed explanation of the server's functionality and how to use it.

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone this repository to your local machine.
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory.
   ```bash
   cd <project-directory>
   ```

3. Install the required dependencies.
   ```bash
   npm install
   ```

## Usage

1. Start the server.
   ```bash
   node <filename>.js
   ```

2. By default, the server will run on `http://localhost:3000`.

## API Endpoints

### POST `/`

**Description**: Creates or updates the note stored on the server.

**Request Body**:
- Type: `text/plain`
- Content: The note to store. Must be non-empty.

**Response**:
- **201 Created**: Successfully updated the note. Returns the updated note.
- **400 Bad Request**: The note is invalid or empty.
- **500 Internal Server Error**: An error occurred on the server.

**Example Request**:
```bash
curl -X POST http://localhost:3000/ -H "Content-Type: text/plain" -d "This is my new note."
```

**Example Response**:
```
Note updated successfully: "This is my new note."
```

### GET `/`

**Description**: Retrieves the latest note stored on the server.

**Response**:
- **200 OK**: Successfully retrieved the note. If no note is available, returns a message indicating that.
- **500 Internal Server Error**: An error occurred on the server.

**Example Request**:
```bash
curl http://localhost:3000/
```

**Example Response (when a note exists)**:
```
Last note: "This is my new note."
```

**Example Response (when no note exists)**:
```
No note available.
```

## Code Explanation

- **Express Setup**: The server uses the Express.js framework for routing and handling requests.
- **Middleware**: The `express.text()` middleware parses incoming requests with plain text payloads.
- **Router**: The routes are defined using an `express.Router` instance.
- **Endpoints**:
  - `POST /`: Stores a new note or updates the existing note.
  - `GET /`: Retrieves the latest note.
- **Error Handling**: Basic error handling is implemented for invalid inputs and server errors.

## Notes

- The server does not use a database and only stores the latest note in memory. Restarting the server will clear the note.
- This project is meant for learning and demonstration purposes.

## License

This project is licensed under the [MIT License](LICENSE).

