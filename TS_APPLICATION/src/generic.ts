function identity<T> (arg: T) : T[] {
    return [arg]
}

//const num = identity(43)
const str = identity('Hello')


interface keyValuePair<K, V> {
    key : K
    value : V
}

class Dictionary<K,V> implements keyValuePair <K,V> {
    constructor(public key: K, public value: V){}
}

function generic<T>(arg: T) : T{
    return arg
} 