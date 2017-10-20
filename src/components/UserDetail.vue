<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name:{{ name }}</p>
        <p>Switched Name: {{switchName()}}</p>
    </div>
</template>

<script>
        export default {
            //props: ['name'],
            
            //约束props属性一
//            props:{
//                name: [String]
//            },
            
            //约束props属性二
            props: {
                name: {
                    type: String,
                    //default: 'defauntName',
                    required:true
                }
            },
            methods: {
                switchName(){
                    return this.name.split("").reverse().join("");
                }
            }
        }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>