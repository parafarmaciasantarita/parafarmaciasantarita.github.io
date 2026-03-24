function initSocial() {
    const container = document.getElementById('social-grid');
    if (!container) return;

    // Funzione aggiornata: gestisce sia card cliccabili che statiche
    function createStaticInstaCard(link, imageUrl, altText) {
        const isLink = link && link !== "-";
        
        // Se è un link, usiamo <a>, altrimenti un <div>
        const wrapperTag = isLink ? 'a' : 'div';
        const wrapperAttrs = isLink 
            ? `href="${link}" target="_blank" class="group cursor-pointer"` 
            : `class="cursor-default"`;

        return `
            <${wrapperTag} ${wrapperAttrs} class="block w-full max-w-[400px] h-[480px] bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden relative border border-slate-100">
                
                <div class="flex items-center justify-center h-full p-2 bg-slate-50"> 
                    <img 
                        src="${imageUrl}" 
                        alt="${altText}" 
                        class="w-full h-full object-contain transform ${isLink ? 'group-hover:scale-105' : ''} transition-transform duration-700" 
                        onerror="this.src='https://placehold.co/400x480?text=Instagram+Post';"
                    >
                </div>
                
                ${isLink ? `
                    <div class="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-colors duration-300"></div>
                    
                    <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm text-pink-600">
                        <i data-lucide="instagram" class="w-5 h-5"></i>
                    </div>
                    
                    <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span class="bg-white text-slate-800 font-bold py-3 px-6 rounded-full shadow-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all">
                            Vai al post <i data-lucide="external-link" class="w-4 h-4 text-slate-400"></i>
                        </span>
                    </div>
                ` : `
                    <div class="absolute top-4 right-4 bg-white/70 backdrop-blur-sm p-2 rounded-full text-slate-400">
                        <i data-lucide="instagram" class="w-5 h-5"></i>
                    </div>
                `}
                
            </${wrapperTag}>
        `;
    }

    // POST 1 & 2: Solo immagini (passando "-" il link viene disattivato)
    const post1 = createStaticInstaCard("-", "images/crema.jpeg", "Immagine Crema");
    const post2 = createStaticInstaCard("-", "images/lierac.jpeg", "Immagine Lierac");
    
    // POST 3: Post cliccabile originale
    const post3 = createStaticInstaCard(
        "https://www.instagram.com/p/DVN7ZwfDH-N/",
        "images/voltaren.webp",
        "Post Instagram 3"
    );
    
    container.innerHTML = post1 + post2 + post3;
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}
