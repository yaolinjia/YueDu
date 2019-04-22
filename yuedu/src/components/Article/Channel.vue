<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-8">
                <List></List>
            </div>
            <div class="col-sm-4">
              <Top10></Top10>
            </div>
        </div>
    </div>
</template>

<script>
import List from '../Channel/List'
import Top10 from '../Channel/Top10'

export default {
    components:{
        List,
        Top10
    }
}
</script>

<style>

</style>
