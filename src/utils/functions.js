export const getMaxPages = (limit,totalItems) => Math.trunc(totalItems/limit)

export const getActiveFilters = (filters) => {
    return Object.keys(filters).reduce((activeFilters, key) => {
        if (key!=='petrol' &&
            key!=='diesel' &&
            key!=='gas' &&
            key!=='hybrid'&&
            key!=='automatic'&&
            key!=='panelTruck'&&
            key!=='fullyIntegrated'&&
            key!=='alcove'
            ) {
            const value = filters[key];
            if ((typeof value === "string" && value !== "") || value === true) {
                activeFilters[key] = value; // Add key and value to active filters
            }
        }
        return activeFilters;
    }, {});
};
