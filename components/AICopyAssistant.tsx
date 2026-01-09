
import React, { useState } from 'react';
import { generateBetterCopy } from '../services/geminiService';
import { PageCopy } from '../types';

interface AICopyAssistantProps {
  onUpdate: (newCopy: PageCopy) => void;
  isOpen: boolean;
  onClose: () => void;
}

const AICopyAssistant: React.FC<AICopyAssistantProps> = ({ onUpdate, isOpen, onClose }) => {
  const [context, setContext] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!context) return;
    setLoading(true);
    try {
      const result = await generateBetterCopy("Copy Inicial", context);
      onUpdate(result);
      onClose();
    } catch (error) {
      console.error("Erro ao gerar copy:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-lg p-8 shadow-2xl">
        <h3 className="text-2xl font-bold mb-4 text-white">Assistente de Copy IA</h3>
        <p className="text-zinc-400 mb-6 text-sm">Descreva seu produto ou serviço e a Gemini criará uma copy de alta conversão para você.</p>
        
        <textarea
          className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all mb-6 min-h-[120px]"
          placeholder="Ex: Estou vendendo um curso de emagrecimento para mães ocupadas que querem perder 5kg em 30 dias sem academia."
          value={context}
          onChange={(e) => setContext(e.target.value)}
        />

        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 rounded-xl border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleGenerate}
            disabled={loading || !context}
            className="flex-1 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-bold transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            ) : "Gerar Copy"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AICopyAssistant;
