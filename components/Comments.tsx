import React from 'react';

const Comment: React.FC<{ name: string; avatar: string; text: string; likes: number; time: string }> = ({ name, avatar, text, likes, time }) => (
  <div className="flex gap-3 text-left">
    <img src={avatar} alt={name} className="w-10 h-10 rounded border border-zinc-200 shrink-0" />
    <div className="flex-1">
      <div className="bg-[#f2f3f5] rounded-2xl px-4 py-3 shadow-sm">
        <span className="block font-bold text-[#385898] text-[13px] mb-1">{name}</span>
        <p className="text-[#1c1e21] text-[13px] leading-snug">{text}</p>
      </div>
      <div className="flex gap-3 items-center mt-1 ml-4 text-[11px] font-bold text-[#90949c]">
        <button className="hover:underline">Me gusta</button>
        <span>·</span>
        <button className="hover:underline">Comentar</button>
        <span>·</span>
        <span>{time}</span>
        {likes > 0 && (
           <div className="flex items-center gap-1 ml-auto bg-white shadow-sm border border-zinc-100 rounded-full px-1.5 py-0.5">
              <span className="text-[10px]">👍 {likes}</span>
           </div>
        )}
      </div>
    </div>
  </div>
);

const Comments: React.FC = () => {
  const data = [
    { name: "Leticia Ramírez", avatar: "https://i.pravatar.cc/150?u=1", text: "Empecé a hacerlo a comienzos del mes pasado y desde entonces he logrado perder 12 kilos. Realmente es muy bueno y fácil!", likes: 16, time: "27 min" },
    { name: "Verónica Sánchez", avatar: "https://i.pravatar.cc/150?u=2", text: "Wow, la receta es súper simple. Esto debería divulgarse en todo el mundo.", likes: 4, time: "25 min" },
    { name: "Ana Laura González", avatar: "https://i.pravatar.cc/150?u=3", text: "Mi esposo y yo lo estamos haciendo todas las mañanas al despertar y ya he desinflamado bastante.", likes: 14, time: "24 min" }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="border-b border-zinc-200 pb-2">
        <span className="text-xs font-bold text-[#4b4f56]">Mostrando 3 de 6,567 comentarios</span>
      </div>
      {data.map((c, i) => <Comment key={i} {...c} />)}
      <div className="bg-[#f2f3f5] p-3 rounded-lg flex items-center justify-center gap-2">
        <span className="text-[11px] font-bold text-[#385898]">Facebook Comments Plugin</span>
      </div>
    </div>
  );
};

export default Comments;