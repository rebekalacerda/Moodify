// Dados para preencher com os links do Spotify 
const moodData = {
    "Pop Latino": {
        "Feliz": { "musica": "Despacito", "artista": "Luis Fonsi", "spotifyUrl": "" },
        "Triste": { "musica": "Con Calma", "artista": "Daddy Yankee", "spotifyUrl": "" },
        "Romântico": { "musica": "Hawái", "artista": "Maluma", "spotifyUrl": "" },
        "Nostálgico": { "musica": "DFMf", "artista": "Bad Bunny", "spotifyUrl": "" },
        "Motivado": { "musica": "Taki Taki", "artista": "DJ Snake ft. Ozuna", "spotifyUrl": "" }
    },
    "K-Pop": {
        "Feliz": { "musica": "Dynamite", "artista": "BTS", "spotifyUrl": "" },
        "Triste": { "musica": "Spring Day", "artista": "BTS", "spotifyUrl": "" },
        "Romântico": { "musica": "Love Scenario", "artista": "iKON", "spotifyUrl": "" },
        "Nostálgico": { "musica": "Blue & Grey", "artista": "BTS", "spotifyUrl": "" },
        "Motivado": { "musica": "Golden", "artista": "HUNTR/X", "spotifyUrl": "" }
    },
    "Pop": {
        "Feliz": { "musica": "Levitating", "artista": "Dua Lipa", "spotifyUrl": "" },
        "Triste": { "musica": "Someone Like You", "artista": "Adele", "spotifyUrl": "" },
        "Romântico": { "musica": "Daisies", "artista": "Justin Bieber", "spotifyUrl": "https://open.spotify.com/intl-pt/track/5BZsQlgw21vDOAjoqkNgKb" }, // Exemplo
        "Nostálgico": { "musica": "As It Was", "artista": "Harry Styles", "spotifyUrl": "" },
        "Motivado": { "musica": "Roar", "artista": "Katy Perry", "spotifyUrl": "" }
    },
    "Pop-Rock": {
        "Feliz": { "musica": "Shut Up and Dance", "artista": "Walk the Moon", "spotifyUrl": "" },
        "Triste": { "musica": "The Scientist", "artista": "Coldplay", "spotifyUrl": "" },
        "Romântico": { "musica": "Just the Way You Are", "artista": "Bruno Mars", "spotifyUrl": "" },
        "Nostálgico": { "musica": "Yellow", "artista": "Coldplay", "spotifyUrl": "" },
        "Motivado": { "musica": "Try", "artista": "P!nk", "spotifyUrl": "" }
    },
    "Afrobeat": {
        "Feliz": { "musica": "Water", "artista": "Tyla", "spotifyUrl": "" },
        "Triste": { "musica": "Understand", "artista": "OMAH LAY", "spotifyUrl": "" },
        "Romântico": { "musica": "Essence (feat. Tems)", "artista": "Wizkid", "spotifyUrl": "" },
        "Nostálgico": { "musica": "Koni Koni Love", "artista": "Klever Jay", "spotifyUrl": "" },
        "Motivado": { "musica": "Sungba", "artista": "Asake", "spotifyUrl": "" }
    },
    "R&B": {
        "Feliz": { "musica": "Uptown Funk", "artista": "Mark Ronson ft. Bruno Mars", "spotifyUrl": "" },
        "Triste": { "musica": "When I Was Your Man", "artista": "Bruno Mars", "spotifyUrl": "" },
        "Romântico": { "musica": "Kiss It Better", "artista": "Rihanna", "spotifyUrl": "" },
        "Nostálgico": { "musica": "Adorn", "artista": "Miguel", "spotifyUrl": "" },
        "Motivado": { "musica": "Happy", "artista": "Pharrell Williams", "spotifyUrl": "" }
    },
    "Soul": {
        "Feliz": { "musica": "Respect", "artista": "Aretha Franklin", "spotifyUrl": "" },
        "Triste": { "musica": "Someone Like You", "artista": "Adele", "spotifyUrl": "" },
        "Romântico": { "musica": "I'd Rather Go Blind", "artista": "Etta James", "spotifyUrl": "" },
        "Nostálgico": { "musica": "A Change Is Gonna Come", "artista": "Sam Cooke", "spotifyUrl": "" },
        "Motivado": { "musica": "I Will Survive", "artista": "Gloria Gaynor", "spotifyUrl": "" }
    },
    "Indie": {
        "Feliz": { "musica": "Heat Waves", "artista": "Glass Animals", "spotifyUrl": "" },
        "Triste": { "musica": "The Night We Met", "artista": "Lord Huron", "spotifyUrl": "" },
        "Romântico": { "musica": "Someone To Stay", "artista": "Vancouver Sleep Clinic", "spotifyUrl": "" },
        "Nostálgico": { "musica": "End of Beginning", "artista": "Djo", "spotifyUrl": "" },
        "Motivado": { "musica": "Mountain Sound", "artista": "Of Monsters and Men", "spotifyUrl": "" }
    },
    "Rock Alternativo": {
        "Feliz": { "musica": "Do I Wanna Know?", "artista": "Arctic Monkeys", "spotifyUrl": "" },
        "Triste": { "musica": "505", "artista": "Arctic Monkeys", "spotifyUrl": "" },
        "Romântico": { "musica": "The Only Exception", "artista": "Paramore", "spotifyUrl": "" },
        "Nostálgico": { "musica": "Fake Plastic Trees", "artista": "Radiohead", "spotifyUrl": "" },
        "Motivado": { "musica": "Believer", "artista": "Imagine Dragons", "spotifyUrl": "" }
    },
    "Blues": {
        "Feliz": { "musica": "Pride and Joy", "artista": "Stevie Ray Vaughan", "spotifyUrl": "" },
        "Triste": { "musica": "Tears in Heaven", "artista": "Eric Clapton", "spotifyUrl": "" },
        "Romântico": { "musica": "At Last", "artista": "Etta James", "spotifyUrl": "" },
        "Nostálgico": { "musica": "Fast Car", "artista": "Tracy Chapman", "spotifyUrl": "" },
        "Motivado": { "musica": "Sweet Home Chicago", "artista": "Muddy Waters", "spotifyUrl": "" }
    },
    "Jazz": {
        "Feliz": { "musica": "Take Five", "artista": "Dave Brubeck", "spotifyUrl": "" },
        "Triste": { "musica": "Blue in Green", "artista": "Miles Davis", "spotifyUrl": "" },
        "Romântico": { "musica": "My Funny Valentine", "artista": "Frank Sinatra", "spotifyUrl": "" },
        "Nostálgico": { "musica": "What a Wonderful World", "artista": "Louis Armstrong", "spotifyUrl": "" },
        "Motivado": { "musica": "New York New York", "artista": "Frank Sinatra", "spotifyUrl": "" }
    },
    "Reggae": {
        "Feliz": { "musica": "Rude", "artista": "MAGIC!", "spotifyUrl": "" },
        "Triste": { "musica": "No Woman No Cry", "artista": "Bob Marley", "spotifyUrl": "" },
        "Romântico": { "musica": "Is This Love?", "artista": "Bob Marley", "spotifyUrl": "" },
        "Nostálgico": { "musica": "Three Little Birds", "artista": "Bob Marley", "spotifyUrl": "" },
        "Motivado": { "musica": "Could You Be Loved", "artista": "Bob Marley", "spotifyUrl": "" }
    },
    "Hard Rock": {
        "Feliz": { "musica": "Sweet Child O' Mine", "artista": "Guns N' Roses", "spotifyUrl": "" },
        "Triste": { "musica": "Always", "artista": "Bon Jovi", "spotifyUrl": "" },
        "Romântico": { "musica": "November Rain", "artista": "Guns N' Roses", "spotifyUrl": "" },
        "Nostálgico": { "musica": "Dream On", "artista": "Aerosmith", "spotifyUrl": "" },
        "Motivado": { "musica": "Enter Sandman", "artista": "Metallica", "spotifyUrl": "" }
    },
    "Metal": {
        "Feliz": { "musica": "The Pretender", "artista": "Foo Fighters", "spotifyUrl": "" },
        "Triste": { "musica": "Cherry Waves", "artista": "Deftones", "spotifyUrl": "" },
        "Romântico": { "musica": "Nothing Else Matters", "artista": "Metallica", "spotifyUrl": "" },
        "Nostálgico": { "musica": "In the End", "artista": "Linkin Park", "spotifyUrl": "" },
        "Motivado": { "musica": "Enter Sandman", "artista": "Metallica", "spotifyUrl": "" }
    },
    "Punk-Rock": {
        "Feliz": { "musica": "All the Small Things", "artista": "Blink-182", "spotifyUrl": "" },
        "Triste": { "musica": "I Miss You", "artista": "Blink-182", "spotifyUrl": "" },
        "Romântico": { "musica": "Saturday Night", "artista": "Ramones", "spotifyUrl": "" },
        "Nostálgico": { "musica": "Welcome to the Black Parade", "artista": "My Chemical Romance", "spotifyUrl": "" },
        "Motivado": { "musica": "Basket Case", "artista": "Green Day", "spotifyUrl": "" }
    },
    "Rock and Roll": {
        "Feliz": { "musica": "Twist and Shout", "artista": "The Beatles", "spotifyUrl": "" },
        "Triste": { "musica": "Yesterday", "artista": "The Beatles", "spotifyUrl": "" },
        "Romântico": { "musica": "Can't Help Falling in Love", "artista": "Elvis Presley", "spotifyUrl": "" },
        "Nostálgico": { "musica": "Highway To Hell", "artista": "AC/DC", "spotifyUrl": "" },
        "Motivado": { "musica": "Don't Stop Me Now", "artista": "Queen", "spotifyUrl": "" }
    },
    "Hip-Hop/Rap": {
        "Feliz": { "musica": "Sunflower", "artista": "Post Malone", "spotifyUrl": "" },
        "Triste": { "musica": "Lucid Dreams", "artista": "Juice WRLD", "spotifyUrl": "" },
        "Romântico": { "musica": "Best Part", "artista": "Daniel Caesar", "spotifyUrl": "" },
        "Nostálgico": { "musica": "Stan", "artista": "Eminem", "spotifyUrl": "" },
        "Motivado": { "musica": "Lose Yourself", "artista": "Eminem", "spotifyUrl": "" }
    },
    "Trap": {
        "Feliz": { "musica": "Old Town Road", "artista": "Lil Nas X", "spotifyUrl": "" },
        "Triste": { "musica": "Without Me", "artista": "Halsey", "spotifyUrl": "" },
        "Romântico": { "musica": "Sicko Mode", "artista": "Travis Scott", "spotifyUrl": "" },
        "Nostálgico": { "musica": "Mask Off", "artista": "Future", "spotifyUrl": "" },
        "Motivado": { "musica": "SAD!", "artista": "XXXTENTACION", "spotifyUrl": "" }
    },
    "Eletrônica": {
        "Feliz": { "musica": "I Gotta Feeling", "artista": "Black Eyed Peas", "spotifyUrl": "" },
        "Triste": { "musica": "Strobe", "artista": "Deadmau5", "spotifyUrl": "" },
        "Romântico": { "musica": "Clarity", "artista": "Zedd ft. Foxes", "spotifyUrl": "" },
        "Nostálgico": { "musica": "Levels", "artista": "Avicii", "spotifyUrl": "" },
        "Motivado": { "musica": "Titanium", "artista": "David Guetta", "spotifyUrl": "" }
    },
    "Brega-Funk": {
        "Feliz": { "musica": "Escola do Neiff", "artista": "Neiff", "spotifyUrl": "" },
        "Triste": { "musica": "Trama", "artista": "Ruanzinho", "spotifyUrl": "" },
        "Romântico": { "musica": "Envolvimento", "artista": "MC Loma e as Gêmeas Lacração", "spotifyUrl": "" },
        "Nostálgico": { "musica": "Vai Malandra", "artista": "Anitta", "spotifyUrl": "" },
        "Motivado": { "musica": "Cheia de Marra", "artista": "MC Kevinho", "spotifyUrl": "" }
    },
    "Funk": {
        "Feliz": { "musica": "Amo Minha Favela", "artista": "MC Menor K", "spotifyUrl": "" },
        "Triste": { "musica": "Ela É do Tipo", "artista": "MC Kevin o Chris", "spotifyUrl": "" },
        "Romântico": { "musica": "Glamurosa", "artista": "MC Marcinho", "spotifyUrl": "" },
        "Nostálgico": { "musica": "Rap da Felicidade", "artista": "MC Racionais", "spotifyUrl": "" },
        "Motivado": { "musica": "Bum Bum Tam Tam", "artista": "MC Fioti", "spotifyUrl": "" }
    },
    "Forró": {
        "Feliz": { "musica": "Olha Pro Céu", "artista": "Luiz Gonzaga", "spotifyUrl": "" },
        "Triste": { "musica": "Manchete dos Jornais", "artista": "Calcinha Preta", "spotifyUrl": "" },
        "Romântico": { "musica": "Asa Branca", "artista": "Luiz Gonzaga", "spotifyUrl": "" },
        "Nostálgico": { "musica": "Meu Abrigo", "artista": "Luiz Gonzaga", "spotifyUrl": "" },
        "Motivado": { "musica": "Xote das Meninas", "artista": "Luiz Gonzaga", "spotifyUrl": "" }
    },
    "Sertanejo": {
        "Feliz": { "musica": "Evidências", "artista": "Chitãozinho & Xororó", "spotifyUrl": "" },
        "Triste": { "musica": "Quando o Coração Aperta", "artista": "Chitãozinho & Xororó", "spotifyUrl": "" },
        "Romântico": { "musica": "Escreve aí", "artista": "Luan Santana", "spotifyUrl": "" },
        "Nostálgico": { "musica": "Eu Sei de Cor", "artista": "Marília Mendonça", "spotifyUrl": "" },
        "Motivado": { "musica": "Aí Eu Chorei", "artista": "Marília Mendonça", "spotifyUrl": "" }
    },
    "Pagode": {
        "Feliz": { "musica": "Exemplo Feliz", "artista": "Zeca Pagodinho", "spotifyUrl": "" },
        "Triste": { "musica": "Até que Durou", "artista": "Péricles", "spotifyUrl": "" },
        "Romântico": { "musica": "Sinais", "artista": "Sorriso Maroto", "spotifyUrl": "" },
        "Nostálgico": { "musica": "Deixa Acontecer", "artista": "Grupo Revelação", "spotifyUrl": "" },
        "Motivado": { "musica": "Camarão que Dorme a Onda Leva", "artista": "Sorriso Maroto", "spotifyUrl": "" }
    },
    "Samba": {
        "Feliz": { "musica": "Mais Feliz", "artista": "Zeca Pagodinho", "spotifyUrl": "" },
        "Triste": { "musica": "A Loba", "artista": "Alcione", "spotifyUrl": "" },
        "Romântico": { "musica": "Mas Que Nada", "artista": "Sérgio Mendes", "spotifyUrl": "" },
        "Nostálgico": { "musica": "País Tropical", "artista": "Jorge Ben Jor", "spotifyUrl": "" },
        "Motivado": { "musica": "Aquarela do Brasil", "artista": "Cartola", "spotifyUrl": "" }
    },
    "Trap BR": {
        "Feliz": { "musica": "Talvez você precise de mim", "artista": "Veigh", "spotifyUrl": "" },
        "Triste": { "musica": "Máquina do Tempo", "artista": "Matuê", "spotifyUrl": "" },
        "Romântico": { "musica": "Anos Luz", "artista": "Matuê", "spotifyUrl": "" },
        "Nostálgico": { "musica": "777", "artista": "Matuê", "spotifyUrl": "" },
        "Motivado": { "musica": "Ascensão", "artista": "Gustavo GN", "spotifyUrl": "" }
    },
    "MPB": {
        "Feliz": { "musica": "Águas de Março", "artista": "Tom Jobim", "spotifyUrl": "" },
        "Triste": { "musica": "Construção", "artista": "Chico Buarque", "spotifyUrl": "" },
        "Romântico": { "musica": "Chega de Saudade", "artista": "João Gilberto", "spotifyUrl": "" },
        "Nostálgico": { "musica": "Velha Infância", "artista": "Tribalistas", "spotifyUrl": "" },
        "Motivado": { "musica": "Oceano", "artista": "Djavan", "spotifyUrl": "" }
    },
    "Arrocha": {
        "Feliz": { "musica": "Mesmo Sem Estar", "artista": "Devinho Novaes", "spotifyUrl": "" },
        "Triste": { "musica": "Alô Porteiro", "artista": "Tayrone", "spotifyUrl": "" },
        "Romântico": { "musica": "50 Vezes", "artista": "Marcos & Belutti", "spotifyUrl": "" },
        "Nostálgico": { "musica": "Amor de Verdade", "artista": "Marcos & Belutti", "spotifyUrl": "" },
        "Motivado": { "musica": "25 Milhões", "artista": "Natanzinho Lima", "spotifyUrl": "" }
    },
    "Rock BR": {
        "Feliz": { "musica": "Céu Azul", "artista": "Charlie Brown Jr.", "spotifyUrl": "" },
        "Triste": { "musica": "Zóio de Lula", "artista": "Charlie Brown Jr.", "spotifyUrl": "" },
        "Romântico": { "musica": "Equalize", "artista": "Pitty", "spotifyUrl": "" },
        "Nostálgico": { "musica": "Anna Júlia", "artista": "Los Hermanos", "spotifyUrl": "" },
        "Motivado": { "musica": "Papo Reto", "artista": "Charlie Brown Jr.", "spotifyUrl": "" }
    },
    "Axé": {
        "Feliz": { "musica": "Beija-flor", "artista": "Timbalada", "spotifyUrl": "" },
        "Triste": { "musica": "Arerê", "artista": "Ivete Sangalo", "spotifyUrl": "" },
        "Romântico": { "musica": "Eva", "artista": "Chiclete com Banana", "spotifyUrl": "" },
        "Nostálgico": { "musica": "Diga Que Valeu", "artista": "Chiclete com Banana", "spotifyUrl": "" },
        "Motivado": { "musica": "Ela Só Quer Paz", "artista": "Cláudia Leitte", "spotifyUrl": "" }
    }
};

// Variáveis
let selectedCategory = null;
let selectedSubgenre = null;
let selectedEmotion = null;

const categories = {
    "Pop": ["Pop Latino", "K-Pop", "Pop", "Pop-Rock"],
    "Vibes": ["Afrobeat", "R&B", "Soul"],
    "Alternativa": ["Indie", "Rock Alternativo"],
    "Relax": ["Blues", "Jazz", "Reggae"],
    "Rock": ["Hard Rock", "Metal", "Punk-Rock", "Rock and Roll"],
    "Hip-Hop": ["Hip-Hop/Rap", "Trap"],
    "Eletrônica": ["Eletrônica"],
    "Brasil": ["Brega-Funk", "Funk", "Forró", "Sertanejo", "Pagode", "Samba", "Trap BR", "MPB", "Arrocha", "Rock BR", "Axé"]
};

// Funções
function startApp() {
    document.getElementById('screen-landing').classList.remove('active');
    document.getElementById('screen-genre').classList.add('active');
    renderCategories();
}

function renderCategories() {
    const container = document.getElementById('categories');
    container.innerHTML = '';

    const colors = {
        "Pop": "#9E58DA", "Vibes": "#9ADD67", "Alternativa": "#DD73C2",
        "Relax": "#69AEE0", "Rock": "#DC3636", "Hip-Hop": "#939393",
        "Eletrônica": "#5FD4CE", "Brasil": "#EDCF58"
    };

    Object.keys(categories).forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        btn.style.backgroundColor = colors[cat] || '#64748b';
        btn.textContent = cat;
        btn.onclick = () => selectCategory(cat);
        container.appendChild(btn);
    });
}

function selectCategory(cat) {
    selectedCategory = cat;
    selectedSubgenre = null;

    const container = document.getElementById('subgenres-container');
    container.classList.remove('hidden');

    document.getElementById('category-title').textContent = cat + ":";

    const list = document.getElementById('subgenres-list');
    list.innerHTML = '';

    categories[cat].forEach(sub => {
        const div = document.createElement('div');
        div.className = 'subgenre-item';
        div.textContent = sub;
        div.onclick = () => {
            document.querySelectorAll('.subgenre-item').forEach(i => i.classList.remove('selected'));
            div.classList.add('selected');
            selectedSubgenre = sub;
        };
        list.appendChild(div);
    });
}

function discoverMusic() {
    const checked = document.querySelector('input[name="emotion"]:checked');
    
    if (!selectedSubgenre) {
        alert("❌ Por favor, selecione um sub-gênero primeiro.");
        return;
    }
    if (!checked) {
        alert("❌ Por favor, selecione uma emoção.");
        return;
    }

    selectedEmotion = checked.value;

    const songData = moodData[selectedSubgenre] ? moodData[selectedSubgenre][selectedEmotion] : null;

    if (!songData) {
        alert("😕 Não encontramos música para esta combinação.\nTente outra emoção ou sub-gênero.");
        return;
    }

    // Preenche a tela de resultado
    document.getElementById('song-name').textContent = songData.musica;
    document.getElementById('artist-name').textContent = songData.artista;
    document.getElementById('genre-tag').textContent = selectedSubgenre;
    document.getElementById('emotion-tag').textContent = selectedEmotion;

    // Troca de tela
    document.getElementById('screen-genre').classList.remove('active');
    document.getElementById('screen-result').classList.add('active');
}

function openSpotify() {
    const songData = moodData[selectedSubgenre] ? moodData[selectedSubgenre][selectedEmotion] : null;

    if (songData && songData.spotifyUrl) {
        window.open(songData.spotifyUrl, '_blank');
    } else {
        const songName = document.getElementById('song-name').textContent;
        const artistName = document.getElementById('artist-name').textContent;
        alert(`🎵 ${songName} - ${artistName}\n\nLink do Spotify não encontrado para esta música.`);
    }
}

function resetApp() {
    location.reload();
}

function backToGenreScreen() {
    document.getElementById('screen-result').classList.remove('active');
    document.getElementById('screen-genre').classList.add('active');
}

// Incialização
window.onload = () => {
    document.getElementById('screen-landing').classList.add('active');
    console.log("%c✅ Moodify carregado com links do Spotify!", "color:#ff2d55; font-weight:bold");
};