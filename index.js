

/*fetch("https://restcountries.com/v3.1/all")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));*/

<script> 

    async function fetchData(){
    try{
        const response = await fetch ("https://restcountries.com/v3.1/all");
        const data = await response.json();
        console.log(data);
        return data[1];
    }catch (error){
        console.error(error);
    }
}
</script>