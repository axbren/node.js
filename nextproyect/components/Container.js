import Head from 'next/head'
import Navigation from './navigation'
const Container = (props) => (
    <div>
        <Head>
            <title>Next.js ejemplo</title></Head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/flatly/bootstrap.min.css" />
        <Navigation />
        <div className="Container p-4">
            {props.children}
        </div>
    </div>
)

export default Container;