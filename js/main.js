const vm = new Vue({
    el:'main',
    mounted(){
        this.getPersons();
        console.log('hi...');
    },
    data:{
        busqueda: '',
        mensaje:'Personas generadas',
        personas: [],
    },
    methods: {
        getPersons(){
            axios.get('https://randomuser.me/api/?results=20')
            .then((res) => {
                this.personas = res.data.results;
            })
            .catch(console.log('error...'));
        }
    },
    computed:{
        searchPerson(){
            return this.personas.filter((persona) => persona.name.first.includes(this.busqueda));
        }
    }
})