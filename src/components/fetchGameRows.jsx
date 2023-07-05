
export default function GameRows({ VG, setSelectedGameId }) {
  return (
    <tr
      onClick={() => {
        setSelectedGameId(VG.gameId);
      }}
    >
      <td>{VG.title}</td>
      <td>
        <img src={VG.coverImg} id="game-image" alt="Game Cover" />
      </td>
    </tr>
  );
}


