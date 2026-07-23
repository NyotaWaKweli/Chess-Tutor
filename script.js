// Levels All Legal & Playable (all moves make sense)::  just hand-crafted puzzles no RNG nonsense
const LEVELS = [{
	id: 1,
	description: 'White to move. Advance your pawn to control the center.',
	fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
	solution: 'e4',
	hint: 'Move the pawn in front of the king two squares forward.',
	points: 50,
	aiLevel: false
}, {
	id: 2,
	description: 'White to move. Develop your knight to attack the center.',
	fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
	solution: 'Nf3',
	hint: 'Move your knight to f3, attacking the center.',
	points: 50,
	aiLevel: false
}, {
	id: 3,
	description: 'White to move. Develop your bishop to pin the knight.',
	fen: '4k3/8/2n5/4p3/8/8/3P4/4KB2 w - - 0 1',
	solution: 'Bb5',
	hint: 'Move your bishop to b5, pinning the black knight to the king.',
	points: 70,
	aiLevel: false
}, {
	id: 4,
	description: 'White to move. Deliver checkmate with the queen.',
	fen: '7k/5p2/8/7Q/2B5/8/8/4K3 w - - 0 1',
	solution: 'Qxf7',
	hint: 'The queen captures on f7 with checkmate.',
	points: 80,
	aiLevel: false
}, {
	id: 5,
	description: 'White to move. Castle to bring your rook to the center.',
	fen: 'r1bqk2r/ppp1bppp/2np1n2/8/8/2N1PN2/PPP1BPPP/R1BQK2R w KQkq - 0 8',
	solution: 'O-O',
	hint: 'Castle kingside to connect your rooks.',
	points: 100,
	aiLevel: false
}, {
	id: 6,
	description: 'White to move. Win the queen with a powerful attack.',
	fen: '4k3/5q2/8/7Q/2B1P3/8/8/4K3 w - - 0 1',
	solution: 'Qxf7',
	hint: 'The queen captures the enemy queen, winning decisive material.',
	points: 100,
	aiLevel: false
}, {
	id: 7,
	description: 'White to move. Deliver back-rank checkmate with the rook.',
	fen: '6k1/5ppp/8/8/8/8/5PPP/R6K w - - 0 1',
	solution: 'Ra8',
	hint: 'Move your rook to the back rank for checkmate.',
	points: 120,
	aiLevel: false
}, {
	id: 8,
	description: 'White to move. Use your knight to fork the king and the rook.',
	fen: '4k2r/7p/8/8/4N3/8/8/4K3 w - - 0 1',
	solution: 'Nf6',
	hint: 'Move your knight to f6, attacking both the king and the rook.',
	points: 130,
	aiLevel: true,
	aiSequence: [
		{ userMove: 'Nf6', aiResponse: 'Kd8' },
		{ userMove: 'Nxh7', aiResponse: null }
	]
}, {
	id: 9,
	description: 'White to move. Skewer the king and rook.',
	fen: '4k2r/8/8/8/8/8/8/3QK3 w - - 0 1',
	solution: 'Qh5',
	hint: 'Move your queen to h5, checking the king and setting up a skewer.',
	points: 150,
	aiLevel: true,
	aiSequence: [
		{ userMove: 'Qh5', aiResponse: 'Kd8' },
		{ userMove: 'Qxh8', aiResponse: null }
	]
}, {
	id: 10,
	description: 'White to move. Deliver checkmate in one move.',
	fen: '7k/5p2/8/7Q/8/8/8/4K3 w - - 0 1',
	solution: 'Qxf7',
	hint: 'The queen captures on f7 with checkmate.',
	points: 200,
	aiLevel: false
}];

// All these tutorials are generated. the model is old so they may be outdated
// Tabs that should stream (not Pieces or Chessboard)
const STREAM_TABS = ['history', 'grandmasters', 'champions', 'tips', 'tech'];

const TUTORIALS = {
	pieces: [{
		title: 'The King',
		piece: 'king',
		body: 'The king moves one square in any direction: horizontally, vertically, or diagonally. It is the most important piece on the board. The game ends when a king is checkmated. The king can also capture enemy pieces, but cannot move into check. The king can castle — a special move that involves the rook — once per game. Castling is the only time the king can move two squares.'
	}, {
		title: 'The Queen',
		piece: 'queen',
		body: 'The queen is the most powerful piece on the board. It combines the movement of the rook and bishop. It can move any number of squares vertically, horizontally, or diagonally. The queen is worth nine points. It is often described as the "attacking powerhouse" and is most effective when used in coordination with other pieces.'
	}, {
		title: 'The Rook',
		piece: 'rook',
		body: 'The rook moves any number of squares vertically or horizontally. It is a powerful piece in the endgame and is worth five points. Rooks work well together on open files and are essential for checkmating the enemy king. The rook is also part of the castling move with the king.'
	}, {
		title: 'The Bishop',
		piece: 'bishop',
		body: 'The bishop moves any number of squares diagonally. Each bishop stays on its original color for the entire game. Bishops are worth three points and are strong in open positions. A pair of bishops can be very powerful, especially in the middle game, controlling both colors of the board.'
	}, {
		title: 'The Knight',
		piece: 'knight',
		body: 'The knight moves in an L-shape: two squares in one direction and one square perpendicular. It is the only piece that can jump over other pieces. Knights are worth three points and are strong in closed positions where other pieces are blocked. The knight\'s unique movement makes it excellent for forks — attacking two pieces at once.'
	}, {
		title: 'The Pawn',
		piece: 'pawn',
		body: 'The pawn moves forward one square, but captures diagonally. On its first move, it can move two squares. Pawns can promote to any other piece when reaching the last rank — usually a queen. Pawns are worth one point and are the soul of chess. They control the center, support other pieces, and form the structure of your position.'
	}],
	chessboard: [{
		title: 'The Chessboard',
		body: `<img src="https://i.ibb.co/yBZgSzyf/1-E556-F9-E-9-EAC-484-C-9-EC5-1102-CDA38-B1-D.png" alt="Chessboard with coordinates" style="max-width:100%;height:auto;border-radius:6px;margin:8px 0 12px 0;border:1px solid #EEEEEE;" />
		<div class="chessboard-explanation">
			<strong>Each square on the board has a unique name.</strong><br />
			The file (letter) comes first, then the rank (number).<br />
			For example, <strong>e4</strong> is the center square.
		</div>`
	}],
	history: [
		{ title: 'Origins of Chess',
			body: 'Chess originated in India during the Gupta Empire, around the 6th century. It spread to Persia and then to the Islamic world. The modern rules were established in Europe during the 15th century. The game has since become a global phenomenon, played by millions worldwide.' },
		{ title: 'The Romantic Era',
			body: 'The Romantic Era of chess (18th-19th century) was characterized by aggressive, tactical play. Players like Adolf Anderssen and Paul Morphy dominated with brilliant sacrifices and attacking games. The "Immortal Game" and "Evergreen Game" are famous examples from this period.' },
		{ title: 'The Modern Era',
			body: 'The modern era of chess began with the establishment of FIDE in 1924. The World Chess Championship became a formalized event. The first official World Champion was José Raúl Capablanca, who defeated Emanuel Lasker in 1921.' },
		{ title: 'The Soviet School',
			body: 'The Soviet Union dominated chess from the 1940s to the 1990s. Players like Mikhail Botvinnik, Anatoly Karpov, and Garry Kasparov were world champions. The Soviet school emphasized deep positional understanding and rigorous training.' },
		{ title: 'Deep Blue vs Kasparov',
			body: 'In 1997, IBM\'s Deep Blue defeated Garry Kasparov in a six-game match. This was the first time a computer defeated a reigning world champion under tournament conditions. It marked a turning point in the relationship between chess and technology.' },
		{ title: 'The Kasparov Era',
			body: 'Garry Kasparov was World Champion from 1985 to 2000. He is widely considered one of the greatest players of all time, known for his aggressive style and deep preparation. He also revolutionized chess training with the use of computers.' },
		{ title: 'The Karpov Era',
			body: 'Anatoly Karpov was World Champion from 1975 to 1985. He is known for his positional style and exceptional endgame technique. He played five World Championship matches against Kasparov, one of the greatest rivalries in chess history.' },
		{ title: 'The Anand Era',
			body: 'Viswanathan Anand was the first Indian World Chess Champion, holding the title from 2007 to 2013. He is known for his rapid calculation skills and versatility. Anand is also a five-time World Rapid Chess Champion.' },
		{ title: 'The Carlsen Era',
			body: 'Magnus Carlsen has been World Champion since 2013, winning five titles. He is the highest-rated player in history, with a peak rating of 2882. He is known for his universal playing style, exceptional endgame skill, and competitive mindset.' },
		{ title: 'The Future of Chess',
			body: 'Chess continues to evolve with technology. Engines like Stockfish and Leela Chess Zero have surpassed human champions. The rise of online chess platforms like Chess.com and Lichess has made the game more accessible than ever.' }
	],
	grandmasters: [
		{ title: 'Magnus Carlsen',
			body: 'Magnus Carlsen is the highest-rated chess player in history, with a peak rating of 2882. He is a five-time World Chess Champion and is known for his universal playing style and exceptional endgame skill. Carlsen is also an accomplished poker player and entrepreneur.' },
		{ title: 'Garry Kasparov',
			body: 'Garry Kasparov was World Chess Champion from 1985 to 2000. He is considered one of the greatest players of all time and was the first world champion to lose a match to a computer, Deep Blue, in 1997. Kasparov is now a prominent human rights activist.' },
		{ title: 'Anatoly Karpov',
			body: 'Anatoly Karpov was World Chess Champion from 1975 to 1985. He is known for his positional style and exceptional endgame technique. He played five World Championship matches against Kasparov, one of the greatest rivalries in chess history.' },
		{ title: 'Bobby Fischer',
			body: 'Bobby Fischer became World Chess Champion in 1972, defeating Boris Spassky in the "Match of the Century." He is remembered for his brilliant play and his contributions to chess theory, including the Fischer Random Chess variant.' },
		{ title: 'José Raúl Capablanca',
			body: 'Capablanca was a Cuban chess prodigy known for his exceptional endgame technique and effortless style. He was world champion from 1921 to 1927. Many consider him one of the most naturally gifted players ever.' },
		{ title: 'Viswanathan Anand',
			body: 'Viswanathan Anand is an Indian chess grandmaster and the first Indian to win the World Chess Championship. He was World Champion from 2007 to 2013 and has won numerous titles, including five World Rapid Chess Championships.' },
		{ title: 'Mikhail Tal',
			body: 'Mikhail Tal was the eighth World Chess Champion, known for his attacking and imaginative style. He was a master of sacrifices and complicated positions, earning him the nickname "The Magician from Riga."' },
		{ title: 'Emanuel Lasker',
			body: 'Emanuel Lasker was the second World Chess Champion, holding the title for 27 years (1894–1921). He was also a mathematician and philosopher. Lasker is considered one of the greatest players of all time.' },
		{ title: 'Alexander Alekhine',
			body: 'Alexander Alekhine was a Russian-French chess grandmaster and the fourth World Chess Champion. He is known for his aggressive style and deep strategic play. He was the first world champion to use the King\'s Indian Defence extensively.' },
		{ title: 'Boris Spassky',
			body: 'Boris Spassky was the tenth World Chess Champion, holding the title from 1969 to 1972. He is known for his universal style and ability to play both tactical and positional chess. He famously lost the World Championship to Bobby Fischer in 1972.' }
	],
	champions: [
		{ title: 'Current World Champion',
			body: 'Ding Liren is the current World Chess Champion, having won the title in 2023 after defeating Ian Nepomniachtchi. He is the first Chinese player to hold the classical World Chess Championship title.' },
		{ title: 'Women\'s World Champion',
			body: 'Ju Wenjun is the current Women\'s World Chess Champion, having held the title since 2018. She is known for her precise positional play and has successfully defended her title multiple times.' },
		{ title: 'FIDE World Championship',
			body: 'The FIDE World Chess Championship is the official title, organized by the international chess federation. It is contested every two years in a match format. The winner is crowned World Chess Champion.' },
		{ title: 'World Rapid Chess Championship',
			body: 'The World Rapid Chess Championship is held annually by FIDE. The winner is crowned World Rapid Chess Champion. The current champion is Magnus Carlsen, who has won the title five times.' },
		{ title: 'World Blitz Chess Championship',
			body: 'The World Blitz Chess Championship is held annually by FIDE. The winner is crowned World Blitz Chess Champion. Magnus Carlsen has won the title multiple times, including in 2023.' },
		{ title: 'Chess Olympiad',
			body: 'The Chess Olympiad is a biennial team event organized by FIDE. The first Olympiad was held in 1924. The Soviet Union dominated the Olympiad for decades, winning 18 titles.' },
		{ title: 'Women\'s Chess Olympiad',
			body: 'The Women\'s Chess Olympiad is a biennial team event organized by FIDE. It has been held since 1957. The Soviet Union also dominated this event, winning 11 titles.' },
		{ title: 'World Junior Chess Championship',
			body: 'The World Junior Chess Championship is an annual event for players under 20. The first Junior Championship was held in 1951. The tournament has produced many future world champions.' },
		{ title: 'World Senior Chess Championship',
			body: 'The World Senior Chess Championship is an annual event for players over 50. It has been held since 1991. The tournament has produced many former world champions who continue to compete.' },
		{ title: 'World Amateur Chess Championship',
			body: 'The World Amateur Chess Championship is an event for players who have never held a professional title. It has been held since 1976. The tournament provides a platform for aspiring players.' }
	],
	tips: [
		{ title: 'Control the Center',
			body: 'Controlling the center with pawns and pieces gives you more space and mobility. A strong center is the foundation of a good position. Use your pawns to occupy the center and your pieces to support them.' },
		{ title: 'Develop Your Pieces',
			body: 'Get your knights and bishops out early. Develop to active squares and avoid moving the same piece twice in the opening. Aim to castle within the first 10 moves to ensure king safety.' },
		{ title: 'King Safety',
			body: 'Castle early to protect your king. A safe king is essential before launching any attacks. Consider both kingside and queenside castling based on the position. Keep pawns in front of your king to shield it.' },
		{ title: 'Tactical Patterns',
			body: 'Learn common tactical patterns like forks, pins, skewers, and discovered attacks. They can win material or deliver mate. Practice pattern recognition by solving puzzles regularly.' },
		{ title: 'Endgame Principles',
			body: 'In the endgame, active king play and passed pawns are crucial. Remember the king is a fighting piece! Learn key endgames like king and pawn vs king, and rook vs pawn.' },
		{ title: 'Pawn Structure',
			body: 'Pawn structure determines the character of the position. Avoid isolated pawns, doubled pawns, and backward pawns. Control key squares with your pawns to restrict the opponent\'s pieces.' },
		{ title: 'Piece Activity',
			body: 'Active pieces are more valuable than passive ones. Aim to place your pieces on strong squares where they have maximum influence. Avoid placing pieces on the edge of the board where they are less effective.' },
		{ title: 'Time Management',
			body: 'Use your time wisely. In rapid and blitz games, manage the clock carefully. In classical games, think deeply about critical positions but avoid spending too much time on obvious moves.' },
		{ title: 'Opening Principles',
			body: 'Follow the basic opening principles: control the center, develop your pieces, and castle. Avoid moving the same piece twice in the opening unless necessary. Don\'t bring out the queen too early.' },
		{ title: 'Improving Your Game',
			body: 'Study master games, solve puzzles, and analyze your own games. Use engines to identify mistakes and learn from them. Practice regularly and play against stronger opponents to improve.' }
	],
	tech: [
		{ title: 'Minimax Algorithm',
			body: 'The minimax algorithm is the foundation of most chess engines. It evaluates positions by assuming both players play optimally. The algorithm explores all possible moves and assigns scores, choosing the move that maximizes the engine\'s chances while minimizing the opponent\'s. This is the core of AI decision-making in chess.' },
		{ title: 'Alpha-Beta Pruning',
			body: 'Alpha-beta pruning is an optimization for minimax that eliminates branches that cannot possibly affect the final decision. This allows engines to search twice as deep in the same amount of time. It is a classic algorithm that demonstrates how AI can be made more efficient.' },
		{ title: 'Neural Networks in Chess',
			body: 'Leela Chess Zero uses deep neural networks learned from self-play. It evaluates positions like a human would, based on pattern recognition rather than brute force. This represents a new paradigm in chess AI, complementing traditional engines.' },
		{ title: 'Chess Engines Today',
			body: 'Modern chess engines like Stockfish and Leela Chess Zero have surpassed human world champions. They are used for analysis, training, and entertainment. The combination of traditional search and neural networks represents the state of the art.' },
		{ title: 'Stockfish',
			body: 'Stockfish is an open-source chess engine developed by a community of programmers. It is one of the strongest engines in the world, using advanced search techniques and evaluation functions. It is available on multiple platforms and is used by millions of players.' },
		{ title: 'Leela Chess Zero',
			body: 'Leela Chess Zero is a neural network-based chess engine inspired by AlphaZero. It learns by playing against itself, improving its play over time. It has achieved superhuman performance and is available as an open-source project.' },
		{ title: 'AlphaZero',
			body: 'AlphaZero is a chess engine developed by DeepMind. It used reinforcement learning to learn chess from scratch, playing millions of games against itself. It defeated Stockfish in a 100-game match, showing the power of neural networks in chess.' },
		{ title: 'Chess Tablebases',
			body: 'Chess tablebases are databases of solved endgame positions. They contain optimal play for all positions with up to 7 pieces. They are used by engines to play endgames perfectly and are essential for high-level analysis.' },
		{ title: 'Chess in the Cloud',
			body: 'Cloud-based chess engines allow users to analyze positions using powerful hardware. Services like Chess.com and Lichess offer cloud analysis, making it accessible to everyone. This has democratized chess training.' },
		{ title: 'The Future of Chess AI',
			body: 'Chess AI continues to advance with more powerful hardware and algorithms. The combination of search, neural networks, and reinforcement learning will likely produce even stronger engines in the future. The boundaries between human and machine chess are blurring.' }
	]
};

// MERIDA Font mapping | The original repo - https://github.com/vasiliyaltunin/chess-merida-font

const MERIDA_MAP = {
	white: { king: { light: 'k', dark: 'K' }, queen: { light: 'q', dark: 'Q' }, rook: { light: 'r', dark: 'R' },
		bishop: { light: 'b', dark: 'B' }, knight: { light: 'n', dark: 'N' }, pawn: { light: 'p', dark: 'P' } },
	black: { king: { light: 'l', dark: 'L' }, queen: { light: 'w', dark: 'W' }, rook: { light: 't', dark: 'T' },
		bishop: { light: 'v', dark: 'V' }, knight: { light: 'm', dark: 'M' }, pawn: { light: 'o', dark: 'O' } }
};

function isDarkSquare(r, c) { return (r + c) % 2 !== 0; }

function getMeridaChar(piece, dark) {
	if (!piece) return '';
	const cm = MERIDA_MAP[piece.color];
	if (!cm) return '';
	return cm[piece.type][dark ? 'dark' : 'light'];
}
 
// Custom toast / popup. Thought native  alert() wouldn't match the ui.
function showToast(title, msg, confirmText = 'OK', cancelText = 'Cancel', isError = false) {
	return new Promise((resolve) => {
		const o = document.getElementById('toastOverlay');
		const titleEl = document.getElementById('toastTitle');
		const msgEl = document.getElementById('toastMessage');
		const icon = document.getElementById('toastErrorIcon');
		const c = document.getElementById('toastConfirm');
		const x = document.getElementById('toastCancel');
		if (titleEl) titleEl.textContent = title;
		if (msgEl) msgEl.textContent = msg;
		if (icon) icon.style.display = isError ? 'block' : 'none';
		if (c) c.textContent = confirmText;
		if (x) x.textContent = cancelText;
		if (x) x.style.display = cancelText === '' ? 'none' : 'inline-block';
		if (o) o.classList.add('active');
		if (c) c.onclick = () => { if (o) o.classList.remove('active');
			resolve(true); };
		if (x) x.onclick = () => { if (o) o.classList.remove('active');
			resolve(false); };
		if (o) o.onclick = (e) => { if (e.target === o) { o.classList.remove('active');
				resolve(false); } };
	});
}

function showAlert(msg, isError = false) {
	return showToast('', msg, 'OK', '', isError);
}

// Wrong move popup.. Dedicated pop-up for bad moves
let wrongMoveResolve = null;

function showWrongMovePopup() {
	return new Promise((resolve) => {
		const o = document.getElementById('toastOverlay');
		const titleEl = document.getElementById('toastTitle');
		const msgEl = document.getElementById('toastMessage');
		const icon = document.getElementById('toastErrorIcon');
		const c = document.getElementById('toastConfirm');
		const x = document.getElementById('toastCancel');
		if (titleEl) titleEl.textContent = 'Wrong Move!';
		if (msgEl) msgEl.textContent = 'That move is not correct. Click Retry to try again.';
		if (icon) icon.style.display = 'block';
		if (c) c.textContent = 'Retry';
		if (x) x.style.display = 'none';
		if (o) o.classList.add('active');
		if (c) c.onclick = () => { if (o) o.classList.remove('active');
			resolve(true); };
		if (o) o.onclick = (e) => { if (e.target === o) { o.classList.remove('active');
				resolve(true); } };
	});
}

// STREAMING TEXT 
function streamTextToElement(element, text, speed = 15) {
	return new Promise((resolve) => {
		let index = 0;
		const chars = text.split('');
		element.innerHTML = '';
		const textSpan = document.createElement('span');
		const cursorSpan = document.createElement('span');
		cursorSpan.className = 'streaming-cursor';
		element.appendChild(textSpan);
		element.appendChild(cursorSpan);

		function addNextChar() {
			if (index < chars.length) {
				textSpan.textContent += chars[index];
				index++;
				const scrollArea = document.getElementById('tutorialScrollArea');
				if (scrollArea) scrollArea.scrollTop = scrollArea.scrollHeight;
				setTimeout(addNextChar, speed);
			} else {
				cursorSpan.remove();
				resolve();
			}
		}
		setTimeout(addNextChar, 100);
	});
}

// local storage, so the progress persists 
const STORAGE_KEY = 'nyota_wa_kweli';

function getDefaultData() {
	return {
		currentLevel: 1,
		totalPoints: 0,
		problemsSolved: 0,
		problemsAttempted: 0,
		successRate: 0,
		currentStreak: 0,
		longestStreak: 0,
		completedLevels: [],
		levelData: {},
		tutorialsViewed: [],
		tutorialProgress: {},
		settings: { showHints: true }
	};
}

let appData = null;

function loadData() {
	try {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored) {
			const parsed = JSON.parse(stored);
			const defaults = getDefaultData();
			appData = { ...defaults, ...parsed };
			if (!appData.completedLevels) appData.completedLevels = [];
			if (!appData.levelData) appData.levelData = {};
			if (!appData.tutorialProgress) appData.tutorialProgress = {};
			if (!appData.tutorialsViewed) appData.tutorialsViewed = [];
			if (!appData.settings) appData.settings = defaults.settings;
			return;
		}
	} catch (e) { console.warn('Failed to load data, starting fresh:', e); }
	appData = getDefaultData();
	saveData();
}

function saveData() {
	try { localStorage.setItem(STORAGE_KEY, JSON.stringify(appData)); } catch (e) { console.error('Failed to save data:',
			e); }
}

function updateUIFromData() {
	const pts = document.getElementById('pointsDisplay');
	const lvl = document.getElementById('levelDisplay');
	const strk = document.getElementById('streakDisplay');
	const solv = document.getElementById('solvedDisplay');
	if (pts) pts.textContent = formatPoints(appData.totalPoints);
	if (lvl) lvl.textContent = appData.currentLevel;
	if (strk) strk.textContent = appData.currentStreak;
	if (solv) solv.textContent = appData.problemsSolved;
}

function formatPoints(p) {
	return p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Moving animation for points 
function animatePoints(oldValue, newValue) {
	const el = document.getElementById('pointsDisplay');
	if (!el) return;
	const duration = 500;
	const steps = 20;
	const increment = (newValue - oldValue) / steps;
	let current = oldValue;
	let step = 0;

	const interval = setInterval(() => {
		current += increment;
		step++;
		el.textContent = formatPoints(Math.round(current));
		if (step >= steps) {
			clearInterval(interval);
			el.textContent = formatPoints(newValue);
		}
	}, duration / steps);
}


// Chess board engine-  Not Stockfish. It parses FEN strings into a 2D array, decides legal moves for every piece type, and detects if a square is under attack.
function parseFEN(fen) {
	const board = Array.from({ length: 8 }, () => Array(8).fill(null));
	const rows = fen.split(' ')[0].split('/');
	const pieceMap = {
		'K': { type: 'king', color: 'white' },
		'Q': { type: 'queen', color: 'white' },
		'R': { type: 'rook', color: 'white' },
		'B': { type: 'bishop', color: 'white' },
		'N': { type: 'knight', color: 'white' },
		'P': { type: 'pawn', color: 'white' },
		'k': { type: 'king', color: 'black' },
		'q': { type: 'queen', color: 'black' },
		'r': { type: 'rook', color: 'black' },
		'b': { type: 'bishop', color: 'black' },
		'n': { type: 'knight', color: 'black' },
		'p': { type: 'pawn', color: 'black' }
	};
	for (let r = 0; r < 8; r++) {
		let c = 0;
		for (const ch of rows[r]) {
			if (ch >= '1' && ch <= '8') { c += parseInt(ch); } else if (pieceMap[ch]) { board[r][c] = pieceMap[
				ch];
				c++; }
		}
	}
	return board;
}

function boardToFEN(board) {
	const pc = {
		'white-king': 'K',
		'white-queen': 'Q',
		'white-rook': 'R',
		'white-bishop': 'B',
		'white-knight': 'N',
		'white-pawn': 'P',
		'black-king': 'k',
		'black-queen': 'q',
		'black-rook': 'r',
		'black-bishop': 'b',
		'black-knight': 'n',
		'black-pawn': 'p'
	};
	let fen = '';
	for (let r = 0; r < 8; r++) {
		let empty = 0;
		for (let c = 0; c < 8; c++) {
			const p = board[r][c];
			if (p) { if (empty > 0) { fen += empty;
					empty = 0; }
				fen += pc[p.color + '-' + p.type] || ''; } else empty++;
		}
		if (empty > 0) fen += empty;
		if (r < 7) fen += '/';
	}
	return fen + ' w KQkq - 0 1';
}

// Is square attacked? 
function isSquareAttacked(board, row, col, attackerColor) {
	const enemy = attackerColor;
	const knightMoves = [
		[-2, -1],
		[-2, 1],
		[-1, -2],
		[-1, 2],
		[1, -2],
		[1, 2],
		[2, -1],
		[2, 1]
	];
	for (const [dr, dc] of knightMoves) {
		const r = row + dr,
			c = col + dc;
		if (r >= 0 && r < 8 && c >= 0 && c < 8) {
			const p = board[r][c];
			if (p && p.type === 'knight' && p.color === enemy) return true;
		}
	}
	const dirs = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
		[-1, -1],
		[-1, 1],
		[1, -1],
		[1, 1]
	];
	for (const [dr, dc] of dirs) {
		let r = row + dr,
			c = col + dc;
		let steps = 0;
		while (r >= 0 && r < 8 && c >= 0 && c < 8) {
			const p = board[r][c];
			if (p) {
				if (p.color === enemy) {
					const isDiagonal = Math.abs(dr) === 1 && Math.abs(dc) === 1;
					const isStraight = (dr === 0) !== (dc === 0);
					if (p.type === 'queen') return true;
					if (isDiagonal && p.type === 'bishop') return true;
					if (isStraight && p.type === 'rook') return true;
					if (steps === 0 && p.type === 'king') return true;
				}
				break;
			}
			r += dr;
			c += dc;
			steps++;
		}
	}
	const pawnDir = enemy === 'white' ? -1 : 1;
	for (const dc of [-1, 1]) {
		const r = row + pawnDir,
			c = col + dc;
		if (r >= 0 && r < 8 && c >= 0 && c < 8) {
			const p = board[r][c];
			if (p && p.type === 'pawn' && p.color === enemy) return true;
		}
	}
	return false;
}

// Get legal moves (including castling)--- returns every valid destination for a piece
function getLegalMoves(board, row, col) {
	const piece = board[row][col];
	if (!piece) return [];
	const moves = [];
	const enemy = piece.color === 'white' ? 'black' : 'white';
	const add = (r, c, flag = null) => {
		if (r < 0 || r > 7 || c < 0 || c > 7) return;
		const t = board[r][c];
		if (t && t.color === piece.color) return;
		moves.push({ row: r, col: c, isCapture: !!t, flag: flag });
	};

	switch (piece.type) {
		case 'king': {
			const dirs = [
				[-1, -1],
				[-1, 0],
				[-1, 1],
				[0, -1],
				[0, 1],
				[1, -1],
				[1, 0],
				[1, 1]
			];
			for (const d of dirs) add(row + d[0], col + d[1]);
			const backRow = piece.color === 'white' ? 7 : 0;
			if (row === backRow && col === 4) {
				const ksRook = board[backRow][7];
				if (ksRook && ksRook.type === 'rook' && ksRook.color === piece.color &&
					!board[backRow][5] && !board[backRow][6] &&
					!isSquareAttacked(board, backRow, 4, enemy) &&
					!isSquareAttacked(board, backRow, 5, enemy) &&
					!isSquareAttacked(board, backRow, 6, enemy)) {
					moves.push({ row: backRow, col: 6, isCapture: false, flag: 'castle-kingside' });
				}
				const qsRook = board[backRow][0];
				if (qsRook && qsRook.type === 'rook' && qsRook.color === piece.color &&
					!board[backRow][3] && !board[backRow][2] && !board[backRow][1] &&
					!isSquareAttacked(board, backRow, 4, enemy) &&
					!isSquareAttacked(board, backRow, 3, enemy) &&
					!isSquareAttacked(board, backRow, 2, enemy)) {
					moves.push({ row: backRow, col: 2, isCapture: false, flag: 'castle-queenside' });
				}
			}
			break;
		}
		case 'queen': {
			const dirs = [
				[-1, -1],
				[-1, 0],
				[-1, 1],
				[0, -1],
				[0, 1],
				[1, -1],
				[1, 0],
				[1, 1]
			];
			for (const d of dirs) {
				let r = row + d[0],
					c = col + d[1];
				while (r >= 0 && r < 8 && c >= 0 && c < 8) {
					const t = board[r][c];
					if (t) {
						if (t.color === enemy) moves.push({ row: r, col: c, isCapture: true });
						break;
					}
					moves.push({ row: r, col: c, isCapture: false });
					r += d[0];
					c += d[1];
				}
			}
			break;
		}
		case 'rook': {
			const dirs = [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1]
			];
			for (const d of dirs) {
				let r = row + d[0],
					c = col + d[1];
				while (r >= 0 && r < 8 && c >= 0 && c < 8) {
					const t = board[r][c];
					if (t) {
						if (t.color === enemy) moves.push({ row: r, col: c, isCapture: true });
						break;
					}
					moves.push({ row: r, col: c, isCapture: false });
					r += d[0];
					c += d[1];
				}
			}
			break;
		}
		case 'bishop': {
			const dirs = [
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			];
			for (const d of dirs) {
				let r = row + d[0],
					c = col + d[1];
				while (r >= 0 && r < 8 && c >= 0 && c < 8) {
					const t = board[r][c];
					if (t) {
						if (t.color === enemy) moves.push({ row: r, col: c, isCapture: true });
						break;
					}
					moves.push({ row: r, col: c, isCapture: false });
					r += d[0];
					c += d[1];
				}
			}
			break;
		}
		case 'knight': {
			const knightDeltas = [
				[-2, -1],
				[-2, 1],
				[-1, -2],
				[-1, 2],
				[1, -2],
				[1, 2],
				[2, -1],
				[2, 1]
			];
			for (const d of knightDeltas) add(row + d[0], col + d[1]);
			break;
		}
		case 'pawn': {
			const dir = piece.color === 'white' ? -1 : 1;
			const startRow = piece.color === 'white' ? 6 : 1;
			const promoRow = piece.color === 'white' ? 0 : 7;
			const fwd = row + dir;
			if (fwd >= 0 && fwd < 8 && !board[fwd][col]) {
				if (fwd === promoRow) {
					for (const p of ['Q', 'R', 'B', 'N']) {
						moves.push({ row: fwd, col: col, isCapture: false, flag: 'promotion-' + p });
					}
				} else {
					moves.push({ row: fwd, col: col, isCapture: false });
				}
				if (row === startRow) {
					const fwd2 = row + 2 * dir;
					if (!board[fwd2][col]) {
						moves.push({ row: fwd2, col: col, isCapture: false });
					}
				}
			}
			for (const dc of [-1, 1]) {
				const cr = row + dir,
					cc = col + dc;
				if (cr >= 0 && cr < 8 && cc >= 0 && cc < 8) {
					const t = board[cr][cc];
					if (t && t.color === enemy) {
						if (cr === promoRow) {
							for (const p of ['Q', 'R', 'B', 'N']) {
								moves.push({ row: cr, col: cc, isCapture: true, flag: 'promotion-' + p });
							}
						} else {
							moves.push({ row: cr, col: cc, isCapture: true });
						}
					}
				}
			}
			break;
		}
	}
	return moves;
}

// Game state – for fixed move detection.. like, "what the player is doing right now?"  

// Tracks selected piece, valid move highlights, whose turn it is, and whether we're waiting for an AI response. Also keeps a move log for the "Previous Moves" 

const PIECE_ABBR = {
	king: 'K',
	queen: 'Q',
	rook: 'R',
	bishop: 'B',
	knight: 'N',
	pawn: ''
};

let boardState = [];
let previousBoardState = [];
let selectedSquare = null;
let validMoves = [];
let currentLevelIndex = 0;
let currentProblem = null;
let hintRevealed = false;
let timerInterval = null;
let timerSeconds = 0;
let isLevelComplete = false;
let isReplay = false;

let aiStepIndex = 0;
let isAITurn = false;

// MOVE LOG 
let moveLog = [];

function addMoveToLog(moveStr, isWhite) {
	moveLog.push({ move: moveStr, isWhite: isWhite });
	renderMoves();
}

function clearMoveLog() {
	moveLog = [];
	renderMoves();
}

function renderMoves() {
	const list = document.getElementById('movesList');
	if (!list) return;
	if (moveLog.length === 0) {
		list.innerHTML = '<div class="moves-empty">No moves yet.</div>';
		return;
	}
	let html = '';
	let moveNumber = 1;
	for (let i = 0; i < moveLog.length; i += 2) {
		const white = moveLog[i];
		const black = moveLog[i + 1];
		html += `<div class="move-entry">`;
		html += `<span class="move-number">${moveNumber}.</span>`;
		html += `<span class="move-white">${white ? white.move : ''}</span>`;
		if (black) {
			html += `<span class="move-black">${black.move}</span>`;
		}
		html += `</div>`;
		moveNumber++;
	}
	list.innerHTML = html;
	list.scrollTop = list.scrollHeight;
}

// MOVES OVERLAY 
document.getElementById('previousMovesBtn').addEventListener('click', function() {
	document.getElementById('movesOverlay').classList.add('active');
});

document.getElementById('movesClose').addEventListener('click', function() {
	document.getElementById('movesOverlay').classList.remove('active');
});

document.getElementById('movesClear').addEventListener('click', function() {
	clearMoveLog();
});

// START TIMER 

function startTimer() {
	if (timerInterval) clearInterval(timerInterval);
	timerSeconds = 0;
	const timeEl = document.getElementById('timeDisplay');
	if (timeEl) timeEl.textContent = '0s';
	timerInterval = setInterval(() => {
		timerSeconds++;
		const el = document.getElementById('timeDisplay');
		if (el) el.textContent = timerSeconds + 's';
	}, 1000);
}

function stopTimer() {
	if (timerInterval) {
		clearInterval(timerInterval);
		timerInterval = null;
	}
	return timerSeconds;
}

function calculateHintCost() {
	const level = currentLevelIndex + 1;
	if (level <= 2) return 0;
	return 10 + level * 5;
}

function calculateSkipCost() {
	const level = currentLevelIndex + 1;
	if (level <= 2) return 0;
	return 15 + level * 5;
}

// Fixed move detection
 
function detectMove(before, after) {
	let fromRow = -1,
		fromCol = -1;
	let toRow = -1,
		toCol = -1;
	let movedPiece = null;

	for (let r = 0; r < 8; r++) {
		for (let c = 0; c < 8; c++) {
			const beforePiece = before[r][c];
			const afterPiece = after[r][c];
			if (beforePiece && !afterPiece) {
				fromRow = r;
				fromCol = c;
				movedPiece = beforePiece;
				break;
			}
		}
		if (fromRow !== -1) break;
	}

	if (movedPiece) {
		for (let r = 0; r < 8; r++) {
			for (let c = 0; c < 8; c++) {
				const beforePiece = before[r][c];
				const afterPiece = after[r][c];
				if (afterPiece && afterPiece.type === movedPiece.type && afterPiece.color === movedPiece.color) {
					if (!(r === fromRow && c === fromCol)) {
						toRow = r;
						toCol = c;
						break;
					}
				}
				if (beforePiece && afterPiece && beforePiece.color !== afterPiece.color) {
					if (afterPiece.type === movedPiece.type && afterPiece.color === movedPiece.color) {
						toRow = r;
						toCol = c;
						break;
					}
				}
				if (movedPiece.type === 'king' && afterPiece && afterPiece.type === 'king') {
					if (Math.abs(c - fromCol) === 2) {
						toRow = r;
						toCol = c;
						break;
					}
				}
			}
			if (toRow !== -1) break;
		}
	}

	if (fromRow === -1 || toRow === -1) {
		for (let r = 0; r < 8; r++) {
			for (let c = 0; c < 8; c++) {
				const beforePiece = before[r][c];
				const afterPiece = after[r][c];
				if (beforePiece && !afterPiece) {
					fromRow = r;
					fromCol = c;
					movedPiece = beforePiece;
				}
				if (!beforePiece && afterPiece) {
					toRow = r;
					toCol = c;
				}
				if (beforePiece && afterPiece && beforePiece.color !== afterPiece.color) {
					if (afterPiece.color === 'white') {
						toRow = r;
						toCol = c;
					}
				}
			}
		}
	}

	if (fromRow === -1 || toRow === -1 || !movedPiece) {
		return null;
	}

	const files = 'abcdefgh';
	const ranks = '87654321';

	if (movedPiece.type === 'king' && Math.abs(toCol - fromCol) === 2) {
		if (toCol > fromCol) return 'O-O';
		else return 'O-O-O';
	}

	let piecePrefix = PIECE_ABBR[movedPiece.type] || '';
	if (!piecePrefix && movedPiece.type === 'queen') piecePrefix = 'Q';
	if (!piecePrefix && movedPiece.type === 'rook') piecePrefix = 'R';
	if (!piecePrefix && movedPiece.type === 'bishop') piecePrefix = 'B';
	if (!piecePrefix && movedPiece.type === 'knight') piecePrefix = 'N';

	const captured = before[toRow][toCol] !== null && before[toRow][toCol].color !== movedPiece.color;

	let moveStr = '';
	if (piecePrefix === '') {
		if (captured) moveStr = files[fromCol] + 'x';
	} else {
		moveStr = piecePrefix;
		if (captured) moveStr += 'x';
	}
	moveStr += files[toCol] + ranks[toRow];

	if (movedPiece.type === 'pawn' && (toRow === 0 || toRow === 7)) {
		moveStr += '=Q';
	}

	return moveStr;
}

function renderBoard() {
	const b = document.getElementById('board');
	if (!b) return;
	b.innerHTML = '';
	for (let r = 0; r < 8; r++) {
		for (let c = 0; c < 8; c++) {
			const sq = document.createElement('div');
			const dark = isDarkSquare(r, c);
			sq.className = 'square' + (dark ? ' dark' : '');
			const piece = boardState[r][c];
			if (piece) {
				const sp = document.createElement('span');
				sp.className = 'piece';
				sp.textContent = getMeridaChar(piece, dark);
				sq.appendChild(sp);
			}
			if (selectedSquare && selectedSquare.row === r && selectedSquare.col === c) sq.classList.add(
			'selected');
			const mv = validMoves.find(m => m.row === r && m.col === c);
			if (mv) {
				const el = document.createElement('div');
				el.className = mv.isCapture ? 'capture-ring' : 'move-dot';
				sq.appendChild(el);
			}
			sq.dataset.row = r;
			sq.dataset.col = c;
			sq.addEventListener('click', function() {
				if (isLevelComplete || isAITurn) return;
				handleSquareClick(parseInt(this.dataset.row), parseInt(this.dataset.col));
			});
			b.appendChild(sq);
		}
	}
}

function handleSquareClick(row, col) {
	if (isLevelComplete || isAITurn) return;
	const piece = boardState[row][col];

	if (selectedSquare) {
		const move = validMoves.find(m => m.row === row && m.col === col);
		if (move) {
			// Save state before move
			const beforeMoveState = boardState.map(r => r.map(c => c ? { ...c } : null));

			const from = boardState[selectedSquare.row][selectedSquare.col];
			if (move.flag === 'castle-kingside' || move.flag === 'castle-queenside') {
				const backRow = selectedSquare.row;
				boardState[row][col] = from;
				boardState[selectedSquare.row][selectedSquare.col] = null;
				if (move.flag === 'castle-kingside') {
					boardState[backRow][5] = boardState[backRow][7];
					boardState[backRow][7] = null;
				} else {
					boardState[backRow][3] = boardState[backRow][0];
					boardState[backRow][0] = null;
				}
			} else {
				boardState[row][col] = from;
				boardState[selectedSquare.row][selectedSquare.col] = null;
			}

			selectedSquare = null;
			validMoves = [];
			renderBoard();

			const moveStr = detectMove(beforeMoveState, boardState);

			if (moveStr) {
				const isWhite = currentProblem ? currentProblem.id % 2 === 1 : true;
				addMoveToLog(moveStr, isWhite);
			}

			if (currentProblem.aiLevel) {
				const expectedUserMove = currentProblem.aiSequence[aiStepIndex].userMove;
				if (moveStr === expectedUserMove) {
					aiStepIndex++;
					if (aiStepIndex === currentProblem.aiSequence.length) {
						handleCorrectSolution();
						return;
					} else {
						const aiResponse = currentProblem.aiSequence[aiStepIndex - 1].aiResponse;
						if (aiResponse) {
							// Save state after AI response
							previousBoardState = boardState.map(r => r.map(c => c ? { ...c } : null));
							isAITurn = true;
							setTimeout(() => {
								executeAIMove(aiResponse);
							}, 500);
						} else {
							isAITurn = false;
						}
					}
				} else {
					// WRONG MOVE	Show popup and retry
					showWrongMovePopup().then(() => {
						// Restore board to state  BEFORE the wrong move
						boardState = beforeMoveState.map(r => r.map(c => c ? { ...c } : null));
						selectedSquare = null;
						validMoves = [];
						renderBoard();
						// Very Important!! : Do NOT change aiStepIndex –> player needs to try the same step again
						// The player is still on the same step, so aiStepIndex stays unchanged
					});
				}
			} else {
				if (moveStr === currentProblem.solution) {
					handleCorrectSolution();
				} else {
					showWrongMovePopup().then(() => {
						boardState = beforeMoveState.map(r => r.map(c => c ? { ...c } : null));
						selectedSquare = null;
						validMoves = [];
						renderBoard();
					});
				}
			}
			return;
		}
		if (piece && piece.color === boardState[selectedSquare.row][selectedSquare.col].color) {
			selectedSquare = { row, col };
			validMoves = getLegalMoves(boardState, row, col);
			renderBoard();
			return;
		}
		selectedSquare = null;
		validMoves = [];
		renderBoard();
		return;
	}

	if (piece) {
		selectedSquare = { row, col };
		validMoves = getLegalMoves(boardState, row, col);
		renderBoard();
	}
}

// Execute Ai move 
function executeAIMove(aiMoveStr) {
	let targetFile, targetRank;
	let pieceType = null;

	if (aiMoveStr.length >= 2 && aiMoveStr[0] >= 'A' && aiMoveStr[0] <= 'Z') {
		pieceType = aiMoveStr[0];
		targetFile = aiMoveStr[1];
		targetRank = parseInt(aiMoveStr[2]);
	} else {
		targetFile = aiMoveStr[0];
		targetRank = parseInt(aiMoveStr[1]);
	}

	const files = 'abcdefgh';
	const toCol = files.indexOf(targetFile);
	const toRow = 8 - targetRank;
	let fromRow = -1,
		fromCol = -1;

	for (let r = 0; r < 8; r++) {
		for (let c = 0; c < 8; c++) {
			const p = boardState[r][c];
			if (p && p.color === 'black') {
				if (pieceType) {
					const abbr = PIECE_ABBR[p.type] || '';
					if (abbr !== pieceType) continue;
				}
				const moves = getLegalMoves(boardState, r, c);
				if (moves.some(m => m.row === toRow && m.col === toCol)) {
					fromRow = r;
					fromCol = c;
					break;
				}
			}
		}
		if (fromRow !== -1) break;
	}

	if (fromRow !== -1) {
		// Save state before AI move
		const beforeAIMove = boardState.map(r => r.map(c => c ? { ...c } : null));
		const fromPiece = boardState[fromRow][fromCol];
		boardState[toRow][toCol] = fromPiece;
		boardState[fromRow][fromCol] = null;
		selectedSquare = null;
		validMoves = [];
		renderBoard();
		isAITurn = false;
		// Save state after AI move for retry purposes
		previousBoardState = boardState.map(r => r.map(c => c ? { ...c } : null));
		const problemText = document.getElementById('problemText');
		problemText.textContent = 'AI played ' + aiMoveStr + '. Your turn.';
		addMoveToLog(aiMoveStr, false);
	} else {
		isAITurn = false;
		showAlert('AI could not move. Try again.', true);
		boardState = previousBoardState.map(r => r.map(c => c ? { ...c } : null));
		renderBoard();
		// Don't reset aiStepIndex – a player should try the same step
	}
}

//  Level Loading-- Simply, Reset everything for a fresh puzzle
function loadLevel(index, replay = false) {
	const level = LEVELS[index];
	if (!level) return;
	currentLevelIndex = index;
	currentProblem = level;
	isReplay = replay;
	hintRevealed = false;
	isLevelComplete = false;
	aiStepIndex = 0;
	isAITurn = false;
	moveLog = [];

	boardState = parseFEN(level.fen);
	previousBoardState = boardState.map(r => r.map(c => c ? { ...c } : null));
	selectedSquare = null;
	validMoves = [];

	const levelDisplay = document.getElementById('levelDisplay');
	if (levelDisplay) levelDisplay.textContent = index + 1;

	const problemText = document.getElementById('problemText');
	if (problemText) problemText.textContent = level.description;

	const hintBtn = document.getElementById('hintBtn');
	if (hintBtn) {
		hintBtn.textContent = 'Reveal Hint';
		hintBtn.classList.remove('revealed');
		hintBtn.disabled = false;
	}

	const hintContent = document.getElementById('hintContent');
	if (hintContent) {
		hintContent.classList.add('hidden');
		hintContent.textContent = '';
	}

	const hintCost = document.getElementById('hintCost');
	const cost = calculateHintCost();
	if (hintCost) {
		hintCost.textContent = cost > 0 ? `(${cost} points)` : '(free)';
	}

	const skipBtn = document.getElementById('skipBtn');
	const skipCost = calculateSkipCost();
	if (skipBtn) {
		skipBtn.textContent = skipCost > 0 ? `Skip (${skipCost} points)` : 'Skip (free)';
	}

	renderBoard();
	const pts = document.getElementById('pointsDisplay');
	const strk = document.getElementById('streakDisplay');
	const solv = document.getElementById('solvedDisplay');
	if (pts) pts.textContent = formatPoints(appData.totalPoints);
	if (strk) strk.textContent = appData.currentStreak;
	if (solv) solv.textContent = appData.problemsSolved;

	startTimer();

	if (!appData.levelData[level.id]) {
		appData.levelData[level.id] = {
			fen: level.fen,
			description: level.description,
			solution: level.solution,
			hint: level.hint,
			points: level.points,
			theme: level.theme || 'tactic',
			aiLevel: level.aiLevel || false,
			aiSequence: level.aiSequence || null
		};
		saveData();
	}
}

function handleCorrectSolution() {
	if (isLevelComplete) return;
	const timeTaken = stopTimer();

	if (!isReplay) {
		const pointsEarned = currentProblem.points || 50;
		const oldPoints = appData.totalPoints;
		const newPoints = oldPoints + pointsEarned;
		appData.totalPoints = newPoints;
		appData.problemsSolved++;
		appData.problemsAttempted++;
		appData.currentStreak++;
		if (appData.currentStreak > appData.longestStreak) {
			appData.longestStreak = appData.currentStreak;
		}
		appData.successRate = Math.round((appData.problemsSolved / appData.problemsAttempted) * 100);

		const levelRecord = {
			level: currentLevelIndex + 1,
			points: pointsEarned,
			theme: currentProblem.theme || 'Tactic',
			status: 'solved',
			time: timeTaken,
			date: new Date().toISOString()
		};
		appData.completedLevels.push(levelRecord);
		appData.currentLevel = currentLevelIndex + 2;
		saveData();
		animatePoints(oldPoints, newPoints);
		const lvl = document.getElementById('levelDisplay');
		if (lvl) lvl.textContent = appData.currentLevel;
		const strk = document.getElementById('streakDisplay');
		if (strk) strk.textContent = appData.currentStreak;
		const solv = document.getElementById('solvedDisplay');
		if (solv) solv.textContent = appData.problemsSolved;
	} else {
		const pts = document.getElementById('pointsDisplay');
		if (pts) pts.textContent = formatPoints(appData.totalPoints);
	}

	isLevelComplete = true;

	const totalCompleted = appData.completedLevels.length;
	if (totalCompleted >= 10 && !isReplay) {
		showCongratsOverlay();
		return;
	}

	const msg = isReplay ? 'Level Replayed! 🎯' : 'Level Complete! 🎉';
	const detail = isReplay ? 'You solved it again! No points awarded.' :
		`You earned +${currentProblem.points || 50} points!\nTime: ${timeTaken}s\nStreak: ${appData.currentStreak}`;
	const btnText = isReplay ? 'Continue' : 'Start Next Level';

	showToast(msg, detail, btnText, '').then(() => {
		const timeEl = document.getElementById('timeDisplay');
		if (timeEl) timeEl.textContent = '0s';
		if (!isReplay) {
			const nextLevel = currentLevelIndex + 2;
			if (nextLevel <= LEVELS.length) {
				loadLevel(nextLevel - 1);
			} else {
				const totalCompletedAfter = appData.completedLevels.length;
				if (totalCompletedAfter >= 10) {
					showCongratsOverlay();
				} else {
					showAlert('You completed all levels! 🏆');
				}
			}
		} else {
			const actualLevel = Math.min(appData.currentLevel, LEVELS.length);
			loadLevel(actualLevel - 1);
		}
	});
}

// Congratulations overlay (actually removes/wipes all the progress.)
function showCongratsOverlay() {
	const overlay = document.getElementById('congratsOverlay');
	const totalTime = appData.completedLevels.reduce((sum, l) => sum + (l.time || 0), 0);
	const solvedCount = appData.completedLevels.filter(l => l.status === 'solved').length;
	const skippedCount = appData.completedLevels.filter(l => l.status === 'skipped').length;
	const accuracy = appData.problemsAttempted > 0 ?
		Math.round((appData.problemsSolved / appData.problemsAttempted) * 100) : 0;

	document.getElementById('congratsPoints').textContent = formatPoints(appData.totalPoints);
	document.getElementById('congratsAccuracy').textContent = accuracy + '%';
	document.getElementById('congratsSolved').textContent = solvedCount;
	document.getElementById('congratsSkipped').textContent = skippedCount;
	document.getElementById('congratsTime').textContent = totalTime + 's';
	document.getElementById('congratsStreak').textContent = appData.longestStreak;

	overlay.classList.add('active');
}

document.getElementById('playAgainBtn').addEventListener('click', function() {
	localStorage.removeItem(STORAGE_KEY);
	appData = getDefaultData();
	saveData();
	document.getElementById('congratsOverlay').classList.remove('active');
	loadLevel(0);
	updateUIFromData();
});

// UI event binding for wiring upnthe buttons
document.getElementById('hintBtn').addEventListener('click', function() {
	if (hintRevealed || isLevelComplete) return;
	const cost = calculateHintCost();
	if (cost > 0 && appData.totalPoints < cost) {
		showAlert('Not enough points! You need ' + cost + ' points.');
		return;
	}
	if (cost > 0) {
		const oldPoints = appData.totalPoints;
		const newPoints = oldPoints - cost;
		appData.totalPoints = newPoints;
		saveData();
		animatePoints(oldPoints, newPoints);
	}
	const hintText = currentProblem.hint || 'Think about the best move.';
	const hintContent = document.getElementById('hintContent');
	if (hintContent) {
		hintContent.textContent = hintText;
		hintContent.classList.remove('hidden');
	}
	this.textContent = 'Hint Revealed';
	this.classList.add('revealed');
	hintRevealed = true;
	this.disabled = true;
});

document.getElementById('skipBtn').addEventListener('click', async function() {
	if (isLevelComplete) return;
	const cost = calculateSkipCost();
	if (cost > 0 && appData.totalPoints < cost) {
		showAlert('Need ' + cost + ' points to skip.');
		return;
	}
	const confirmed = await showToast('Skip Problem', cost > 0 ? 'Skip? Costs ' + cost + ' points.' :
		'Skip? (Free for levels 1-2)', 'Skip', 'Cancel');
	if (confirmed) {
		if (cost > 0) {
			const oldPoints = appData.totalPoints;
			const newPoints = oldPoints - cost;
			appData.totalPoints = newPoints;
			animatePoints(oldPoints, newPoints);
		}
		appData.problemsAttempted++;
		appData.currentStreak = 0;
		appData.successRate = Math.round((appData.problemsSolved / appData.problemsAttempted) * 100);

		const levelRecord = {
			level: currentLevelIndex + 1,
			points: 0,
			theme: currentProblem.theme || 'tactic',
			status: 'skipped',
			time: stopTimer(),
			date: new Date().toISOString()
		};
		appData.completedLevels.push(levelRecord);
		const nextLevel = currentLevelIndex + 2;
		appData.currentLevel = nextLevel;
		saveData();
		updateUIFromData();
		stopTimer();
		const timeEl = document.getElementById('timeDisplay');
		if (timeEl) timeEl.textContent = '0s';
		if (nextLevel <= LEVELS.length) {
			loadLevel(nextLevel - 1);
		} else {
			const totalCompleted = appData.completedLevels.length;
			if (totalCompleted >= 10) {
				showCongratsOverlay();
			} else {
				showAlert('Congratulations! You completed all levels! 🏆');
			}
		}
	}
});

document.getElementById('pointsBtn').addEventListener('click', async function() {
	await showAlert('Total Points: ' + formatPoints(appData.totalPoints) +
		'\nLevel: ' + appData.currentLevel +
		'\nSolved: ' + appData.problemsSolved +
		'\nStreak: ' + appData.currentStreak +
		'\nSuccess Rate: ' + appData.successRate + '%');
});

// Levels section Open the histry instantly
function renderLevels() {
	const body = document.getElementById('levelsBody');
	if (!body) return;
	body.innerHTML = '';
	const levels = appData.completedLevels;
	if (levels.length === 0) {
		body.innerHTML =
			`<div style="color:#999;font-size:14px;padding:20px;text-align:center;">No levels completed yet.</div>`;
		return;
	}
	const reversed = [...levels].reverse();
	const uniqueLevels = [];
	const seen = new Set();
	for (const item of reversed) {
		if (!seen.has(item.level)) {
			seen.add(item.level);
			uniqueLevels.push(item);
		}
	}
	uniqueLevels.forEach(item => {
		const div = document.createElement('div');
		div.className = 'level-item';
		const statusText = item.status === 'skipped' ? 'Skipped' : 'Solved';
		const statusClass = item.status === 'skipped' ? 'skipped' : 'solved';
		div.innerHTML =
			`<span class="level-num">${item.level}</span><span class="level-points">★ ${item.points} pts</span><span class="level-time">${item.time || '?'}s</span><span style="font-size:11px;color:#999;">${item.theme || 'tactic'}</span><span class="level-status ${statusClass}">${statusText}</span>`;
		div.addEventListener('click', async function() {
			const lvl = item.level - 1;
			if (lvl < LEVELS.length) {
				stopTimer();
				const timeEl = document.getElementById('timeDisplay');
				if (timeEl) timeEl.textContent = '0s';
				loadLevel(lvl, true);
				const overlay = document.getElementById('levelsOverlay');
				if (overlay) overlay.classList.remove('active');
				const levelDisplay = document.getElementById('levelDisplay');
				if (levelDisplay) levelDisplay.textContent = item.level;
			}
		});
		body.appendChild(div);
	});
}

document.getElementById('levelBtn').addEventListener('click', function() {
	const overlay = document.getElementById('levelsOverlay');
	overlay.classList.add('active');
	renderLevels();
});

document.getElementById('levelsClose').addEventListener('click', function() {
	const overlay = document.getElementById('levelsOverlay');
	overlay.classList.remove('active');
});

document.querySelectorAll('.overlay').forEach(o => {
	o.addEventListener('click', function(e) {
		if (e.target === this) this.classList.remove('active');
	});
});

// Tutorials engine to Open instantly
let currentTutorialTab = 'pieces';
let currentTutorialIdx = 0;
const TUTORIAL_TABS = ['pieces', 'chessboard', 'history', 'grandmasters', 'champions', 'tips', 'tech'];

function getTutorialItems(tab) {
	return TUTORIALS[tab] || [];
}

async function renderTutorial(stream = true) {
	const container = document.getElementById('tutorialContent');
	const counter = document.getElementById('tutorialCounter');
	const prev = document.getElementById('tutorialPrev');
	const next = document.getElementById('tutorialNext');
	if (!container) return;
	const items = getTutorialItems(currentTutorialTab);
	const total = items.length;

	if (total === 0) {
		container.innerHTML = `<div style="color:#999;font-size:14px;padding:20px 0;">No content available.</div>`;
		if (counter) counter.textContent = '0 of 0';
		if (prev) prev.disabled = true;
		if (next) next.disabled = true;
		return;
	}

	if (currentTutorialIdx >= total) currentTutorialIdx = Math.max(0, total - 1);

	const item = items[currentTutorialIdx];
	const isStreamTab = STREAM_TABS.includes(currentTutorialTab);

	let previewHtml = '';
	if (currentTutorialTab === 'pieces' && item.piece) {
		const ch = getMeridaChar({ type: item.piece, color: 'white' }, false);
		previewHtml =
			`<div class="tutorial-piece-preview"><span class="piece-preview-font">${ch}</span><div><div class="piece-name">${item.title}</div><div style="font-size:12px;color:#666;">The ${item.title.toLowerCase()} piece</div></div></div>`;
	}

	const titleHtml = `<div class="tutorial-title">${item.title}</div>`;
	const bodyHtml = `<div class="tutorial-body" id="tutorialBody"></div>`;
	container.innerHTML = titleHtml + previewHtml + bodyHtml;

	if (counter) counter.textContent = `${currentTutorialIdx+1} of ${total}`;
	if (prev) prev.disabled = currentTutorialIdx === 0;
	if (next) next.disabled = currentTutorialIdx >= total - 1;

	const bodyEl = document.getElementById('tutorialBody');
	if (currentTutorialTab === 'chessboard') {
		bodyEl.innerHTML = item.body;
	} else if (isStreamTab && stream) {
		const plainText = item.body.replace(/<[^>]*>/g, '');
		await streamTextToElement(bodyEl, plainText, 12);
	} else {
		bodyEl.textContent = item.body;
	}

	const scrollArea = document.getElementById('tutorialScrollArea');
	if (scrollArea) scrollArea.scrollTop = 0;
}

document.getElementById('tutorialPrev').addEventListener('click', function() {
	if (currentTutorialIdx > 0) {
		currentTutorialIdx--;
		renderTutorial(true);
	}
});

document.getElementById('tutorialNext').addEventListener('click', function() {
	const items = getTutorialItems(currentTutorialTab);
	if (currentTutorialIdx < items.length - 1) {
		currentTutorialIdx++;
		renderTutorial(true);
	}
});

document.querySelectorAll('.tutorial-tab').forEach(tab => {
	tab.addEventListener('click', function() {
		document.querySelectorAll('.tutorial-tab').forEach(t => t.classList.remove('active'));
		this.classList.add('active');
		currentTutorialTab = this.dataset.tab;
		currentTutorialIdx = 0;
		renderTutorial(true);
	});
});

document.getElementById('tutorialBtn').addEventListener('click', function() {
	const overlay = document.getElementById('tutorialsOverlay');
	overlay.classList.add('active');
	currentTutorialTab = 'pieces';
	currentTutorialIdx = 0;
	document.querySelectorAll('.tutorial-tab').forEach(t => t.classList.remove('active'));
	document.querySelector('.tutorial-tab[data-tab="pieces"]').classList.add('active');
	renderTutorial(true);
});

document.getElementById('tutorialsClose').addEventListener('click', function() {
	const overlay = document.getElementById('tutorialsOverlay');
	overlay.classList.remove('active');
});

// INIT 

// Loads saved data, figures out which level to show, and gets the board on screen. Also handles the case where the player already beat everything and so needs to show the congrats screen
function init() {
	loadData();
	updateUIFromData();

	const levelToLoad = Math.min(appData.currentLevel, LEVELS.length);
	if (levelToLoad <= LEVELS.length) {
		loadLevel(levelToLoad - 1);
	} else {
		const totalCompleted = appData.completedLevels.length;
		if (totalCompleted >= 10) {
			showCongratsOverlay();
		} else {
			showAlert('Congratulations! You completed all 10 levels! 🏆');
			loadLevel(LEVELS.length - 1);
		}
	}
}

document.addEventListener('DOMContentLoaded', init);
if (document.readyState === 'complete' || document.readyState === 'interactive') { init(); }
