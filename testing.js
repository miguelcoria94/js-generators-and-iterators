function* timestampGenerator() {
    console.log(Date.now())
    yield;
    console.log('execution continued')
}

const it = timestampGenerator()

it.next()
it.next()