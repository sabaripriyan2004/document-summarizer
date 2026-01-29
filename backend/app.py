from flask import Flask, request, jsonify
import os
from lamini import lamini_summarize  # Import the lamini summarization function
from bert import bert_summarize  # Import the BERT summarization function
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="http://localhost:3000")

data_directory = "data"

# Check if the data directory exists
if not os.path.exists(data_directory):
    # Create the data directory if it doesn't exist
    os.makedirs(data_directory)


@app.route('/summarize', methods=['POST'])
def summarize():
    # Get the model selection from the request form (either 'lamini' or 'bert')
    model = request.form.get('model')
    
    # Get the uploaded file
    uploaded_file = request.files.get('file')
    
    # Construct the file path
    filepath = os.path.join("data", uploaded_file.filename)
    
    # Save the uploaded file to the constructed file path
    uploaded_file.save(filepath)
    
    # Perform summarization based on the selected model
    if model == 'lamini':
        # Use LaMini model for summarization
        summary = lamini_summarize(filepath)
    else:
        # Use BERT model for summarization
        summary = bert_summarize(filepath)
    
    # Return the summary as JSON
    return jsonify({'summary': summary})


if __name__ == '__main__':
    app.run(debug=True)
