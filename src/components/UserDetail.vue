<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name:{{ name }}</p>
        <p>Switched Name: {{switchName()}}</p>
        <p>User Age: {{userAge}}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name using Parent Function</button>
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
                },
                resetFn: Function,
                userAge: Number
            },
            methods: {
                switchName(){
                    return this.name.split("").reverse().join("");
                },
                resetName(){
                    //在子组件中，改变props中的属性值，需要通知父组件
                    this.name = 'nameResetByChildComponent';
                    
                    //广播出去
                    this.$emit('nameReset', this.name);
                }
            }
        }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>