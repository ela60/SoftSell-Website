export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  
  const { Configuration, OpenAIApi } = require('openai');

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const { message } = req.body;

  if (!message || message.trim() === '') {
    return res.status(400).json({ reply: "Please enter a valid question." });
  }

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    });

    const reply = completion.data.choices[0].message.content;
    return res.status(200).json({ reply });
  } catch (error) {
    console.error('OpenAI error:', error.response?.data || error.message);
    return res.status(500).json({
      reply: "Sorry, something went wrong. Please try again later.",
    });
  }
}
