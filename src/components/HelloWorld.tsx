import {defineComponent, onBeforeUpdate, onUpdated, onBeforeMount, onMounted, ref} from 'vue';
const HelloWorld = defineComponent({
  name: 'HelloWorld',
    props: {
        msg: {
            type: String,
            required: true
        }
    },
  setup(props) {
    const count = ref(0)
    const text = ref<string>('Hello World')
      onBeforeMount(() => {
        console.log('before mount', count.value)
      })
      onMounted(() => {
        console.log('mounted', count.value)
      })
      onBeforeUpdate(() => {
        console.log('before update', count.value)
      })
      onUpdated(() => {
        console.log('updated', count.value)
      })
      const onInput = ((event: Event) => (text.value = (event.target as HTMLInputElement).value))
    return () => {
        const { msg } = props
        return (
            <>
                <div>
                    <h1>{ msg }</h1>
                </div>
                <div>
                    <button type="button" onClick={() => {count.value ++}}>count is: {count.value}</button>
                </div>

                <div>
                    <input onInput={onInput} value={text.value}/>
                    <p>{text.value}</p>
                </div>
            </>
        )
    }
  },
});


export default HelloWorld;

