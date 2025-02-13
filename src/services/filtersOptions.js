const options = {
    platformOptions: [
        { label: 'Все', value: 'all' },
        { label: 'PC', value: 'pc' },
        { label: 'Браузер ', value: 'browser' },
    ],
    genresOptions: [
        { value: 'all', label: 'Все жанры' },
        { value: 'action', label: 'Action' },
        { value: 'action-rpg', label: 'Action RPG' },
        { value: 'battle-royale', label: 'Battle Royale' },
        { value: 'card', label: 'Card Game' },
        { value: 'fantasy', label: 'Fantasy' },
        { value: 'fighting', label: 'Fighting' },
        { value: 'mmo', label: 'MMO' },
        { value: 'mmorpg', label: 'MMORPG' },
        { value: 'moba', label: 'MOBA' },
        { value: 'racing', label: 'Racing' },
        { value: 'shooter', label: 'Shooter' },
        { value: 'social', label: 'Social' },
        { value: 'sports', label: 'Sports' },
        { value: 'strategy', label: 'Strategy' },
    ],
    sortOptions: [
        { label: 'алфавит', value: 'alphabetical' },
        { label: 'дата', value: 'release-date' },
        { label: 'рейтинг', value: 'popularity' },
    ],

}

export default options;