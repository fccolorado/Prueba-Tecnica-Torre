let app = new Vue({

    el: "#app",
    data: {
        person: {},
        strengths: [],
        data: [],
        sameSkills: []

    },

    created() {
        this.loadData()
        this.currentPersonTorre()
    },
    methods: {
        currentPersonTorre() {
            axios.get('https://bio.torre.co/api/bios/ferminciro')
                .then(response => {
                    this.person = response.data.person
                    this.strengths = response.data.strengths
                })

            .catch(error => console.log(`Error en: ${error}`))
        },
        loadData() {
            axios.post('https://search.torre.co/people/_search/?')
                .then(response => {
                    this.data = response.data.results
                    this.sameSkills = this.data.filter(data => data.skills.name == this.person.strengths.name)

                })


            .catch(error => {
                console.log(error)
            })
        },


    }

})