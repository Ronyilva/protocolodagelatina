
import React from 'react';
import { Testimonial } from '../types';

const MOCK_COMMENTS: Testimonial[] = [
  { id: 1, name: "Leticia Ramírez", avatar: "https://i.pravatar.cc/150?u=leticia", text: "Empecé a hacerlo a comienzos del mes pasado y desde entonces he logrado perder 12 kilos. Realmente es muy bueno y fácil, el único problema es que la gente de verdad piensa que te hiciste alguna cirugía o que estás usando Ozempic jajaja.", likes: 16, time: "27 min" },
  { id: 2, name: "Verónica Sánchez", avatar: "https://i.pravatar.cc/150?u=vero", text: "Wow, la receta es súper simple y fácil. Esto debería divulgarse en todo el mundo, porque yo gasté muchísimo dinero en nutricionistas y no me sirvió de nada. ¡Mis felicitaciones para ustedes!", likes: 4, time: "25 min" },
  { id: 3, name: "Ana Laura González", avatar: "https://i.pravatar.cc/150?u=ana", text: "Mi esposo y yo lo estamos haciendo todas las mañanas al despertar, exactamente como lo explicó el doctor, y mira, ya he desinflamado bastante. Perdí más de 7 kilos en 10 días haciéndolo y mi esposo perdió 8. Creo que por ser hombre adelgaza más rápido, ¡pero esto realmente es increíble!", likes: 14, time: "24 min" },
  { id: 4, name: "Guadalupe Hernández", avatar: "https://i.pravatar.cc/150?u=guada", text: "Jesucristo... el mes antepasado gasté una fortuna en una pluma de Mounjaro, y tuve prácticamente los mismos resultados con este truco. Nunca más voy a comprar una pluma de Mounjaro, voy a vivir haciendo este truco. En serio, dio exactamente el mismo resultado, solo que sin efectos secundarios.", likes: 21, time: "19 min" },
];

const Comments: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white border border-[#e5e7eb] rounded-lg shadow-sm overflow-hidden text-left">
      <div className="bg-white border-b border-[#e5e7eb] p-3">
        <span className="text-xs font-bold text-[#4b4f56]">Showing 7 of 6,567 comments</span>
      </div>

      <div className="p-4 space-y-6">
        {MOCK_COMMENTS.map((comment) => (
          <div key={comment.id} className="flex gap-3">
            <img src={comment.avatar} alt={comment.name} className="w-10 h-10 rounded border border-zinc-200 shrink-0" />
            <div className="flex-1">
              <div className="bg-[#f2f3f5] rounded-[18px] px-4 py-3">
                <span className="block font-bold text-[#385898] text-[13px] hover:underline cursor-pointer mb-1">{comment.name}</span>
                <p className="text-[#1c1e21] text-[13px] leading-tight">{comment.text}</p>
              </div>
              <div className="flex gap-3 items-center mt-1 ml-4 text-[11px] font-bold text-[#90949c]">
                <button className="hover:underline">Me gusta</button>
                <span className="font-normal">·</span>
                <button className="hover:underline">Comentar</button>
                <span className="font-normal">·</span>
                <span>{comment.time}</span>
                
                {comment.likes > 0 && (
                   <div className="flex items-center gap-1 ml-auto bg-white shadow-sm border border-zinc-100 rounded-full px-1.5 py-0.5">
                      <span className="flex -space-x-1">
                        <span className="text-[10px]">👍</span>
                        <span className="text-[10px]">❤️</span>
                      </span>
                      <span className="text-[#385898]">{comment.likes}</span>
                   </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-[#f2f3f5] p-3 flex items-center gap-2">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/9n9sW8q6n9m.png" className="w-4 h-4 opacity-70" alt="FB Icon" />
        <span className="text-[11px] font-bold text-[#385898]">Facebook Comments Plugin</span>
      </div>
    </div>
  );
};

export default Comments;
