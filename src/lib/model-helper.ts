export function getSelectedModel(): string {
  if (typeof window !== 'undefined') {
    const storedModel = localStorage.getItem('selectedModel');
    return 'llama3.1';
  } else {
    // Default model
    return 'llama3.1';
  }
}