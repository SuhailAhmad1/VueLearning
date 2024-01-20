export default {
    async registerCoach(context, payload) {
        const userId = context.rootGetters.userId;
        const token = context.rootGetters.token;
        const new_coach = {
            firstName: payload.first,
            lastName: payload.last,
            description: payload.desc,
            hourlyRate: payload.rate,
            areas: payload.areas
        };

        const response = await fetch(`https://vue-learning-92e56-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=${token}`, {
            method: 'PUT',
            body: JSON.stringify(new_coach)
        });

        // const responseData = await response.json();

        if (!response.ok) {
            // error ....
        }

        context.commit('registerCoach', {
            ...new_coach,
            id: userId
        })
    },
    async loadCoaches(context, payload) {
        if (!payload.forceRefresh && !context.getters.shouldUpdate){
            return;
        }
        const response = await fetch(
            `https://vue-learning-92e56-default-rtdb.firebaseio.com/coaches.json`
        );
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch')
            throw error
        }
        const coaches = [];
        for (const key in responseData) {
            const coach = {
                id: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                description: responseData[key].description,
                hourlyRate: responseData[key].hourlyRate,
                areas: responseData[key].areas
            }
            coaches.push(coach)
        }

        context.commit('setCoaches', coaches)
        context.commit('setFetchTimeStamp')
    }
};