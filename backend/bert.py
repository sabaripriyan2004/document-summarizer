import os
from summarizer import Summarizer
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.document_loaders import PyPDFLoader

# Load BERT-based summarization model
bert_model = Summarizer('distilbert-base-uncased')

# File loader and preprocessing
def file_preprocessing(file):
    loader = PyPDFLoader(file)
    pages = loader.load_and_split()
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=200, chunk_overlap=50)
    texts = text_splitter.split_documents(pages)
    final_texts = ""
    for text in texts:
        final_texts += text.page_content
    return final_texts

# BERT summarization function
def bert_summarize(filepath):
    input_text = file_preprocessing(filepath)
    summary = bert_model(input_text)
    return summary
