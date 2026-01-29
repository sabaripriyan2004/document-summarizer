import matplotlib.pyplot as plt
import seaborn as sns

# ROUGE scores for Lamini Flan T5 and BERT models
lamini_rouge_scores = {
    'rouge-1': 0.48,
    'rouge-2': 0.35,
    'rouge-l': 0.48
}

bert_rouge_scores = {
    'rouge-1': 0.53,
    'rouge-2': 0.45,
    'rouge-l': 0.53
}

# Extract metrics and scores for plotting
metrics = list(lamini_rouge_scores.keys())
lamini_scores = list(lamini_rouge_scores.values())
bert_scores = list(bert_rouge_scores.values())

# Create a bar chart to compare ROUGE scores
plt.figure(figsize=(10, 6))
bar_width = 0.35
index = range(len(metrics))

# Plot Lamini Flan T5 scores
plt.bar(index, lamini_scores, bar_width, label='Lamini Flan T5', color='b')

# Plot BERT scores
plt.bar([p + bar_width for p in index], bert_scores, bar_width, label='BERT', color='r')

# Add labels and title
plt.xlabel('ROUGE Metric')
plt.ylabel('ROUGE Score')
plt.title('Comparison of ROUGE Scores: Lamini Flan T5 vs. BERT')
plt.xticks([p + bar_width/2 for p in index], metrics)
plt.legend()

# Show the plot
plt.tight_layout()
plt.show()
