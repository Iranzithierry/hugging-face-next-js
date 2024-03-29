import { HfInference } from '@huggingface/inference';
import { HuggingFaceStream, StreamingTextResponse } from 'ai';
import { experimental_buildOpenAssistantPrompt } from 'ai/prompts';

const Hf = new HfInference(process.env.HUGGINGFACE_API_KEY);
export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = Hf.textGenerationStream({
    model: 'OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5',
    inputs: experimental_buildOpenAssistantPrompt(messages),
    parameters: {
      max_new_tokens: 250,
      // @ts-ignore
      typical_p: 0.2,
      repetition_penalty: 1,
      return_full_text: false,
    },
  });

  const stream = HuggingFaceStream(response);
  return new StreamingTextResponse(stream);
}
