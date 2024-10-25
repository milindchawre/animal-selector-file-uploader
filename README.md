# Animal Selector and File Uploader

This project is a simple web application that allows users to select an animal to view its image and upload files to the server. It is built using Flask for the backend and HTML, CSS, and JavaScript for the frontend.

## Features

- **Animal Selector**: Choose an animal from a list of options to display its image.
- **File Uploader**: Upload a file to the server and view its details (name, size, type).

## Technologies Used

- **Flask**: A lightweight WSGI web application framework for Python.
- **HTML/CSS**: For structuring and styling the web pages.
- **JavaScript**: For handling dynamic content and user interactions.

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/milindchawre/animal-selector-file-uploader.git
   cd animal-selector-file-uploader
   ```

2. **Set up a virtual environment**:
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application**:
   ```bash
   python app.py
   ```

5. **Access the application**:
   Open your web browser and go to `http://127.0.0.1:5000`.

## Project Structure

- `app.py`: The main Flask application file.
- `templates/index.html`: The HTML template for the main page.
- `static/styles.css`: The CSS file for styling the application.
- `static/script.js`: The JavaScript file for handling user interactions.

## Usage

- **Select an Animal**: Choose an animal from the radio buttons to view its image.
- **Upload a File**: Use the file input to select a file and click "Upload" to send it to the server. The file details will be displayed on the page.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.
