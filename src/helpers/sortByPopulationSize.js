function sortByPopulationSize(response) {
    (response.data).sort((a, b) => {
        return a.population - b.population;
    })
}

export default sortByPopulationSize;