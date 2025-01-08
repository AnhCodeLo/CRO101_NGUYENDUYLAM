const players = [
  { name: "Messi", goals: 30 },
  undefined,
  { name: "Ronaldo", goals: 28 },
  { name: "Neymar", goals: 22 },
  { goals: 2 },
  { name: "Mbappé", goals: 25 },
  { name: "Pele", goals: null },
];

// Lọc danh sách cầu thủ hợp lệ
const validPlayers = players.filter(
  (player) =>
    player && player.name && player.goals !== null && player.goals !== undefined
);

// Tìm cầu thủ ghi nhiều bàn thắng nhất
let topScorer = null;
let maxGoals = 0;

validPlayers.forEach((player) => {
  if (player.goals > maxGoals) {
    maxGoals = player.goals;
    topScorer = player;
  }
});

// Tổng kết tổng số bàn thắng
const totalGoals = validPlayers.reduce((sum, player) => sum + player.goals, 0);

export { validPlayers, topScorer, totalGoals };
