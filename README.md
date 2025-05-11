# 🧠 Automatic Text Summarization using Extractive and Abstractive Techniques

This project implements a hybrid text summarization system that combines both extractive and abstractive approaches. Extractive summarization selects key sentences using techniques like TextRank, K-Means, and Agglomerative Clustering. The selected sentences are then passed to transformer-based abstractive models (T5 and BART) to generate coherent and concise summaries.

---

## 📌 Abstract

With the rapid growth of digital content, extracting relevant information from large volumes of text has become a major challenge. This project proposes a hybrid approach for automatic text summarization. It uses extractive methods to identify the most relevant sentences from the source and then applies transformer-based models to paraphrase them into a human-readable summary. The use of Agglomerative Clustering and the BART model proved most effective in generating summaries with high ROUGE scores.

---

## 📂 Dataset

- **CNN/DailyMail** dataset  
- 14,355 samples used, each containing an article and its human-written highlights  
- Extracted from Kaggle and used for training and evaluation

---

## 🧰 Technologies Used

- Python  
- Google Colab / Jupyter Notebook  
- Hugging Face Transformers  
- PyTorch  
- Scikit-learn  
- NLTK  
- NumPy, Pandas, tqdm  
- Gradio (for UI – optional)

---

## 🔧 System Overview

1. **Preprocessing**  
   - Sentence segmentation, tokenization, lemmatization, stopword removal

2. **Extractive Summarization**  
   - TF-IDF vectorization  
   - Cosine similarity matrix generation  
   - Sentence selection using TextRank, K-Means, or Agglomerative Clustering

3. **Abstractive Summarization**  
   - The extractive summary is passed into T5 or BART models  
   - Generates human-like rewritten summaries

4. **Evaluation**  
   - Summaries evaluated using ROUGE metrics (ROUGE-1, ROUGE-2, ROUGE-L)  
   - Training and test loss tracked to monitor model performance

---

## 📊 Performance Summary

| Method             | ROUGE-1 (F1) | ROUGE-2 (F1) | ROUGE-L (F1) |
|--------------------|--------------|--------------|--------------|
| TextRank           | 0.2312       | 0.0594       | 0.1684       |
| K-Means            | 0.2560       | 0.0937       | 0.1622       |
| Agglomerative      | **0.2759**   | **0.0902**   | **0.1695**   |
| T5 (Abstractive)   | 0.2681       | 0.0923       | 0.1916       |
| BART (Abstractive) | **0.3194**   | **0.1141**   | **0.2261**   |

- BART achieved the best abstractive summarization performance based on both test loss and ROUGE scores  
- Agglomerative Clustering achieved the highest F1-score among extractive methods

---

## ✅ Features

- Hybrid summarization pipeline (extractive + abstractive)  
- Efficient preprocessing using NLP techniques  
- Clustering-based extractive selection  
- Transformer-based generation using T5 and BART  
- Evaluation with ROUGE metrics  

---

## 🚀 How to Use

1. Clone the repository  
2. Install required packages  
3. Run the notebook on Google Colab or locally  
4. Upload a text file or paste content  
5. Get extractive + abstractive summary in one click
