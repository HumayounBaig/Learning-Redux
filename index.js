function createStore(){


    let state
    let listeners = [];

    const getState = () => state

    const subscribe = (listener) =>{
        listeners.push(listener);
        return () => {
            listeners = listeners.filter((l) => l !== listener);
        }
    }

    return{
        getState,
        subscribe,
        unSubscribe,
    }
}


const store = createStore();
store.subscribe(()=>{
    console.log('the new staet is ', store.getState());
})

const unsubscribe = store.subscribe(()=>{
    console.log('The store change');
})

unsubscribe();