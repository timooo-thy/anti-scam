# SG Anti-Scam AI

SG Anti-Scam AI is a pioneering platform designed to empower your online safety by leveraging the power of artificial intelligence. Our mission is to protect users from potential scams encountered during online transactions, especially on platforms like Carousell. By uploading screenshots of your conversations, SG Anti-Scam AI provides peace of mind through advanced scam detection techniques.

## Why SG Anti-Scam AI?

In the digital age, scams have become increasingly sophisticated, making it difficult for users to distinguish between legitimate offers and scams. SG Anti-Scam AI addresses this challenge by:

- **Enhancing Safety:** Providing a robust layer of protection against scams.
- **Offering Peace of Mind:** Eliminating the guesswork from online transactions.
- **Delivering Fast Feedback:** Swiftly informing users about the safety of their interactions.

## How It Works

1. **Upload Conversations:** Users can upload screenshots of their conversations from online marketplaces.
2. **AI Detection:** Our AI algorithms analyse the conversation, identifying potential scam patterns with a high success rate.
3. **Fast Feedback:** Users receive immediate feedback on the conversation's safety, along with an AI-generated scam score.

### AI Flow

- **RPA Processing:** Each submission is processed using Robotic Process Automation (RPA) to handle the data efficiently.
- **GPT Vision API:** To analyze the conversation screenshots, we use GPT Vision API for advanced text recognition, overcoming the limitations of traditional OCR.
- **GPT-4 with RAG:** We leverage GPT-4 with Retrieval-Augmented Generation (RAG) for analyzing conversation patterns and comparing them with known scam scenarios.
- **AI Scoring:** An AI-generated scam score is calculated based on the analysis.
- **Email Notification:** Users receive an email with the results of the analysis.
- **Admin Dashboard:** An administrative dashboard allows for human review of submissions and scores, ensuring a human-in-the-loop approach for accuracy.

## Tech Stack

- **Frontend:** Next.js, Tailwind CSS, Shadcn UI for a modern, responsive user interface.
- **Backend:** Next.js API and Server Actions.
- **AI and Machine Learning:** GPT Vision API, GPT-4 with Retrieval Augmented Generation for text analysis and scam detection.
- **Database:** Pinecone for efficient similarity search in conversational data and Azure blob storage for storing incoming submissions from users.
- **Hosting:** Deployed on Vercel for reliable, global access.

## Getting Started

Try SG Anti-Scam AI [here](https://anti-scam.vercel.app).

To contribute to or use SG Anti-Scam AI, clone the repository and follow the setup instructions:

```bash
git clone https://github.com/timooo-thy/anti-scam.git
cd anti-scam
npm install
npm run dev
```
