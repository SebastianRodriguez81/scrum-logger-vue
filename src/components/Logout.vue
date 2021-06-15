<template>
<div class="fixed-bottom">
    <button @click="Logout" class="bg-pink-700 hover:bg-pink-800 text-white 
            font-bold py-4 px-8 rounded-full absolute bottom-5 right-10">
        LOGOUT
    </button>    
</div>        
</template>

<script>
import firebase from 'firebase'

export default {
    name: "Logout",
    
    setup () {
        const Logout = () => {
            
            firebase
                .auth()
                .signOut()
                .then(() => console.log("Signed out"))
                .catch(err => alert(err.message))
        }        
    return {
        Logout          
    }       
    }
}
</script>

<style>

</style>