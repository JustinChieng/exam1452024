import React from "react";

function GamesTable(props) {
    const { games, isLoading, isError } = props;
    /* INSTRUCTION: Show "loading..." when isLoading is true */
    if (isLoading) {
        return <div className="loading">Loading...</div>
    }
    /* INSTRUCTION: Show "error" when isError is true */
    if (isError) {
        return (
            <div className="error">Error fetching data. Please try again later.</div>
        );
    }

    return (
        <div>
        {games.length > 0 ? (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genres</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>{/* INSTRUCTION: if games data is available, display the games in a table. if not, display a "No games found." message */}
                {games.map((game) => (
                    <tr key={game._id} className="game-card">
                        <td>{game.title}</td>
                        <td>{game.genres}</td>
                        <td>{game.rating}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        ) : (
            <div className="no-games">No games found.</div>
        )}
        </div>
    );
}

export default GamesTable;
